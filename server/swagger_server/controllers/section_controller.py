import connexion
import six

from swagger_server.models.id_subpage_section_body import IdSubpageSectionBody  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.section import Section  # noqa: E501
from swagger_server import util
from swagger_server.database import database
from swagger_server.controllers.exceptions import ExceptionHandler
from swagger_server.controllers.image_controller import *
import json


def create_section(id_subpage, token_info, body=None):  # noqa: E501
    """creates a new section on a subpage

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param body: 
    :type body: dict | bytes

    :rtype: Section
    """
    
    if connexion.request.is_json:
        res = connexion.request.get_json()
        if res is None:
            raise connexion.exceptions.BadRequestProblem("Request is None")
        body = IdSubpageSectionBody(alias=res['alias'], value=res['value']) # noqa: E501

    check_subpage_in_page(id_subpage, token_info)
    cur = database.conn.cursor()
    if body is None:
        raise connexion.exceptions.BadRequestProblem()
    cur.execute("SELECT MAX(pos) FROM Sections WHERE subpage = %s", (id_subpage,))
    a = cur.fetchone()
    if a is None:
        max_pos = 0
    else:
        max_pos = a[0] + 1
    cur.execute('INSERT INTO Sections (subpage,alias,pos,value) VALUES (%s,%s,%s,%s)',(id_subpage,body.alias,max_pos,json.dumps(body.value)))
    cur.execute(f'SELECT LAST_INSERT_ID()')
    a = cur.fetchone()
    cur.close()
    database.conn.commit()
    return get_section_by_id(id_subpage, a[0], token_info)


def delete_image_from_section(id_subpage, id_section, id_image, token_info):  # noqa: E501
    """deletes an image from section

     # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param id_image: id of image
    :type id_image: int

    :rtype: List[Image]
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    cur = database.conn.cursor()
    cur.execute('DELETE FROM SectionImages WHERE section_id = %s AND image_id = %s', (id_section,id_image))
    cur.close()
    database.conn.commit()

    return get_section_images(id_subpage, id_section, token_info)


def delete_section_by_id(id_subpage, id_section, token_info):  # noqa: E501
    """deletes a section by ID

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_section: path of a subpage
    :type id_section: int

    :rtype: None
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    cur = database.conn.cursor(dictionary=True)
    cur.execute('DELETE FROM Sections WHERE id = %s AND subpage = %s',(id_section,id_subpage))
    cur.close()
    database.conn.commit()


def get_section_by_id(id_subpage, id_section, token_info):  # noqa: E501
    """finds a section by ID

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_section: path of a subpage
    :type id_section: int

    :rtype: Section
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    curr = database.conn.cursor()
    curr.execute("SELECT Sections.* FROM Sections INNER JOIN Subpages ON Sections.subpage = Subpages.id WHERE\
         Sections.subpage = %s AND Sections.id = %s", (id_subpage,id_section))
    res = curr.fetchone()
    if res is None:
        raise ExceptionHandler.NotFoundException()
    id = res[0]
    subpage = res[1]
    alias = res[2]
    value = json.loads(res[4])
    curr.close()

    images = get_section_images(id_subpage, id_section, token_info)
    return Section(id=id,alias=alias,images=images,value=value)


def get_sections(id_subpage, token_info):  # noqa: E501
    """returns a array of sections of subpage

     # noqa: E501

    :param id_subpage: 
    :type id_subpage: int

    :rtype: List[Section]
    """
    check_subpage_in_page(id_subpage, token_info)
    curr = database.conn.cursor()
    curr.execute("SELECT Sections.* FROM Sections INNER JOIN Subpages ON Sections.subpage = Subpages.id WHERE\
         Sections.subpage = %s ORDER BY Sections.pos ASC", (id_subpage,))
    res_list = curr.fetchall()
    if res_list is None:
        return []
    section_list : list[Section] = []
    for res in res_list:
        id_section = res[0]
        alias = res[2]
        value = json.loads(res[4])
        curr.close()
        images = get_section_images(id_subpage, id_section, token_info)
        section_list.append(Section(id=id_section,alias=alias,images=images,value=value))
    return section_list


def patch_image_order(body, id_subpage, id_section, token_info):  # noqa: E501
    """modifies the order of photos in section or add all photos from ID array to this section

     # noqa: E501

    :param body: Order of elements in container
    :type body: List[]
    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int

    :rtype: List[Image]
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    curr = database.conn.cursor(dictionary=True)
    curr.execute('DELETE FROM SectionImages WHERE section_id = %s',(id_section,))
    
    zip_a = list(zip(body,[id_section]*len(body),range(0,len(body))))
    curr.executemany("INSERT INTO SectionImages (image_id, section_id, pos) VALUES (%s,%s,%s)", zip_a)
    database.conn.commit()
    curr.close()
    
    return get_section_images(id_subpage, id_section, token_info)


def patch_section_order(body, id_subpage, token_info):  # noqa: E501
    """modifies the order of sections in subpage

     # noqa: E501

    :param body: Order of elements in container
    :type body: List[]
    :param id_subpage: path of a subpage
    :type id_subpage: int

    :rtype: List[Section]
    """
    check_subpage_in_page(id_subpage, token_info)
    sections = get_sections(id_subpage, token_info)
    sections_id = list(map(lambda s : s.id, sections))
    body_copy = body.copy()
    sections_id.sort()
    body_copy.sort()
    if sections_id != body_copy:
        raise connexion.exceptions.BadRequestProblem("Podana lista nie jest permutacją")
    curr = database.conn.cursor(dictionary=True)
    
    zip_a = list(zip(range(0,len(body)),body))
    curr.executemany("UPDATE Sections SET pos = %s WHERE id = %s", zip_a)
    curr.close()
    database.conn.commit()
    return get_sections(id_subpage, token_info)


def patch_section_value(id_subpage, id_section, token_info, body=None):  # noqa: E501
    """modifies a value of section

    modifies a value of section - new value object does not replace old, but method combines both of them (@see patch method) # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param body: value of section
    :type body: dict | bytes

    :rtype: Section
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    if connexion.request.is_json:
        body = connexion.request.get_json()  # noqa: E501
    a = get_section_by_id(id_subpage, id_section, token_info)
    if body is not None:
        a_dict = a.value | body
        curr = database.conn.cursor()
        curr.execute("UPDATE Sections SET value = %s WHERE id = %s", (json.dumps(a_dict), id_section))
        database.conn.commit()
        a = get_section_by_id(id_subpage, id_section, token_info)
        curr.close()
        
    return a


def post_image_to_section(id_subpage, id_section, value, token_info):  # noqa: E501
    """add one image to a section

     # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param value: id of image
    :type value: int

    :rtype: List[Image]
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    curr = database.conn.cursor()
    curr.execute("SELECT MAX(pos) FROM SectionImages WHERE section_id = %s", (id_section,))
    a = curr.fetchone()
    if a is None:
        max_pos = 0
    else:
        max_pos = a[0] + 1
    curr.execute("INSERT INTO SectionImages (image_id, section_id, pos) VALUES (%s,%s,%s)", (value, id_section, max_pos))
    a = get_section_by_id(id_subpage, id_section, token_info)
    curr.close()
    database.conn.commit()
    return get_section_images(id_subpage, id_section, token_info)

def get_section_images(id_subpage, id_section, token_info):
    """returns a list of images from a section

     # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int

    :rtype: List[Image]
    """
    check_section_in_subpage(id_subpage, id_section, token_info)
    curr = database.conn.cursor(dictionary=True)
    curr.execute("SELECT Images.* FROM Images INNER JOIN SectionImages ON SectionImages.image_id = Images.id\
             WHERE SectionImages.section_id = %s ORDER BY SectionImages.pos ASC", (id_section,))
    img_fetch = curr.fetchall()
    if img_fetch is None:
        images = []
    else:
        images = list(map(lambda x : Image(id=x['id'], image=x['image'],alt=x['alt'],title=x['title']), img_fetch))
    curr.close()
    database.conn.commit()
    # zamiana adresu lokalnego na url, który może być dostępny przez klienta
    for img in images:
        img.image = to_url(img.image)
    return images

def check_section_in_subpage(id_subpage, id_section, token_info):
    curr = database.conn.cursor()
    curr.execute("SELECT COUNT(*) FROM Sections INNER JOIN Subpages ON Sections.subpage = Subpages.id \
        INNER JOIN Pages ON Subpages.page = Pages.id WHERE Sections.id = %s AND Subpages.id = %s AND Pages.id = %s",
        (id_section,id_subpage,token_info['sub']))
    res = curr.fetchone()
    if res is None or res[0] == 0:
        raise connexion.exceptions.BadRequestProblem()

def check_subpage_in_page(id_subpage, token_info):
    curr = database.conn.cursor()
    curr.execute("SELECT COUNT(*) FROM Subpages INNER JOIN Pages ON Subpages.page = Pages.id WHERE \
        Subpages.id = %s AND Pages.id = %s", (id_subpage,token_info['sub']))
    res = curr.fetchone()
    if res is None or res[0] == 0:
        raise connexion.exceptions.BadRequestProblem()

