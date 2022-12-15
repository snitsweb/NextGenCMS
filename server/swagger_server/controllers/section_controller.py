import connexion
import six

from swagger_server.models.id_subpage_section_body import IdSubpageSectionBody  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.section import Section  # noqa: E501
from swagger_server import util
from swagger_server.database import database
from swagger_server.controllers.exceptions import ExceptionHandler
import json


def create_section(id_subpage, body=None):  # noqa: E501
    """creates a new section on a subpage

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param body: 
    :type body: dict | bytes

    :rtype: Section
    """
    if connexion.request.is_json:
        body = IdSubpageSectionBody.from_dict(connexion.request.get_json())  # noqa: E501


    cur = database.conn.cursor(dictionary=True)
    cur.execute(f'INSERT INTO Sections (subpage,alias,value) VALUES (%s,%s,%s)',(id_subpage,body.alias,body.value))
    cur.execute(f'SELECT LAST_INSERT_ID()')
    a = cur.fetchone()
    cur.close()
    database.conn.commit()
    return get_section_by_id(id_subpage,a[0])


def delete_image_from_section(id_subpage, id_section, id_image):  # noqa: E501
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

    cur = database.conn.cursor(dictionary=True)
    cur.execute(f'DELETE FROM Sections WHERE id = %s AND subpage = %s AND id_image')
    cur.execute(f'SELECT * FROM Sections')
    a = cur.fetchall()
    a = list(map(lambda x : Sections(id=int(x[0]),subpage=int(x[1]), alias=str(x[2]), pos=int(x[3])) , a))
    cur.close()
    database.conn.commit()

    return a


def delete_section_by_id(id_subpage, id_section):  # noqa: E501
    """deletes a section by ID

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_section: path of a subpage
    :type id_section: int

    :rtype: None
    """

    cur = database.conn.cursor(dictionary=True)
    cur.execute(f'DELETE FROM Sections WHERE id = %s AND subpage = %s',(id_section,id_subpage))
    cur.close()
    database.conn.commit()


def get_section_by_id(id_subpage, id_section):  # noqa: E501
    """finds a section by ID

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_section: path of a subpage
    :type id_section: int

    :rtype: Section
    """
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

    curr = database.conn.cursor(dictionary=True)
    curr.execute("SELECT Images.* FROM Images INNER JOIN SectionImages ON SectionImages.image_id = Images.id\
             WHERE SectionImages.section_id = %s", (id,))
    img_fetch = curr.fetchall()
    if img_fetch is None:
        images = []
    else:
        images = list(map(lambda x : Image.from_dict(x), img_fetch))
    return Section(id=id,subpage=subpage,alias=alias,images=images,value=value)


def get_sections(id_subpage):  # noqa: E501
    """returns a array of sections of subpage

     # noqa: E501

    :param id_subpage: 
    :type id_subpage: int

    :rtype: List[Section]
    """
    curr = database.conn.cursor()
    curr.execute("SELECT Sections.* FROM Sections INNER JOIN Subpages ON Sections.subpage = Subpages.id WHERE\
         Sections.subpage = %s ORDER BY Sections.pos ASC", (id_subpage,))
    res_list = curr.fetchall()
    if res_list is None:
        return []
    section_list = []
    for res in res_list:
        id = res[0]
        subpage = res[1]
        alias = res[2]
        value = json.loads(res[4])
        curr.close()

        curr = database.conn.cursor(dictionary=True)
        curr.execute("SELECT Images.* FROM Images INNER JOIN SectionImages ON SectionImages.image_id = Images.id\
             WHERE SectionImages.section_id = %s", (id,))
        img_fetch = curr.fetchall()
        if img_fetch is None:
            images = []
        else:
            images = list(map(lambda x : Image.from_dict(x), img_fetch))
        section_list.append(Section(id=id,subpage=subpage,alias=alias,images=images,value=value))
    return section_list


def patch_image_order(body, id_subpage, id_section):  # noqa: E501
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
    return 'do some magic!'


def patch_section_order(body, id_subpage):  # noqa: E501
    """modifies the order of sections in subpage

     # noqa: E501

    :param body: Order of elements in container
    :type body: List[]
    :param id_subpage: path of a subpage
    :type id_subpage: int

    :rtype: List[Section]
    """
    return 'do some magic!'


def patch_section_value(id_subpage, id_section, body=None):  # noqa: E501
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
    if connexion.request.is_json:
        body = Section.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def post_image_to_section(id_subpage, id_section, value):  # noqa: E501
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
    return 'do some magic!'
