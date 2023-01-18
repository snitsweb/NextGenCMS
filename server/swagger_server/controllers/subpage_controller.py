import connexion
import six

from swagger_server.models.subpage import Subpage  # noqa: E501
from swagger_server.models.subpage_body import SubpageBody  # noqa: E501
from swagger_server.models.meta_subpage import MetaSubpage  # noqa: E501
from swagger_server.models.subpage_id_body import SubpageIdBody  # noqa: E501
from swagger_server import util, const
from swagger_server.database import database
import json
from swagger_server.controllers.exceptions import ExceptionHandler
from swagger_server.controllers.section_controller import *


def create_subpage(body=None):  # noqa: E501
    """creates a new subpage

    creates a new subpage based on MetaPage # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Subpage
    """
    print("HELP")
    if connexion.request.is_json:
        res = (connexion.request.get_json())
        body = SubpageBody(res['value'], MetaSubpage.from_dict(res['meta']))  # noqa: E501
    if body is None:
        raise Exception()
    user = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT MAX(pos) FROM Subpages WHERE page = %s", (user,))
    a = curr.fetchone()
    if a is None:
        max_pos = 0
    else:
        max_pos = a[0] + 1
    curr.execute("INSERT INTO Subpages (page, pos, value) VALUES (%s, %s, %s)", (user, max_pos, json.dumps(body.value)))
    curr.execute("SELECT LAST_INSERT_ID()")
    id = curr.fetchone()
    if body.meta is None:
        meta_body = MetaSubpage()
    else:
        meta_body = body.meta
    body_dict = meta_body
    body_no_none = { k: ('' if v is None else v) for k, v in body_dict.items() }
    try:
        curr.execute("INSERT INTO MetaSubpages (subpage, name, path, title, description) VALUES (%s, %s, %s, %s, %s)", 
        (id[0], body_no_none['name'], body_no_none['path'], body_no_none['title'], body_no_none['description']))
    except mysql.connector.errors.DatabaseError as e:
        raise ExceptionHandler.WrongInputException(e) from e
    database.conn.commit()
    curr.close()
    return get_subpage(id[0])


def delete_subpage(id2):  # noqa: E501
    """deletes a subpage

     # noqa: E501

    :param id2: id of subpage
    :type id2: int

    :rtype: None
    """
    cur = database.conn.cursor()
    cur.execute("DELETE FROM Subpages WHERE id = %s; ",(id2,))
    database.conn.commit()
    cur.close()



def get_subpage(id2):  # noqa: E501
    """find subpage by ID

    returns a subpage based on ID # noqa: E501

    :param id2: id of subpage
    :type id2: int

    :rtype: Subpage
    """
    user = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT value FROM Subpages WHERE page = %s AND id = %s", (user, id2))
    res = curr.fetchone()
    if res is None:
        raise ExceptionHandler.NotFoundException()
    value = json.loads(res[0])
    curr.close()
    
    #pobieramy MetaSubpage
    curr = database.conn.cursor(dictionary=True)
    curr.execute("SELECT * FROM MetaSubpages WHERE subpage = %s", (id2,))
    res = curr.fetchone()
    print(res)
    curr.close()
    meta_subpage = MetaSubpage.from_dict(res)

    # pobieramy listę sekcji
    sections = get_sections(id2)
    return Subpage(id=id2, meta=meta_subpage, sections=sections, value=value)


def get_subpage_array():  # noqa: E501
    """returns array of subpages

     # noqa: E501


    :rtype: List[Subpage]
    """
    user = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT id, value FROM Subpages WHERE page = %s ORDER BY pos", (user,))
    res_list = curr.fetchall()
    if res_list is None:
        return []
    subpage_list : list[Subpage] = []
    for res in res_list:
        if res is None:
            raise ExceptionHandler.NotFoundException()
        id = res[0]
        value = json.loads(res[1])
        curr.close()
        
        #pobieramy MetaSubpage
        curr = database.conn.cursor(dictionary=True)
        curr.execute("SELECT * FROM MetaSubpages WHERE subpage = %s", (id,))
        res = curr.fetchone()
        curr.close()
        meta_subpage = MetaSubpage.from_dict(res)

        # pobieramy listę sekcji
        sections = get_sections(id)
        subpage_list.append(Subpage(id=id, meta=meta_subpage, sections=sections, value=value))

    return subpage_list


def patch_subpage(id2, body=None):  # noqa: E501
    """updates a subpage

     # noqa: E501

    :param id2: id of subpage
    :type id2: int
    :param body: 
    :type body: dict | bytes

    :rtype: Subpage
    """
    if connexion.request.is_json:
        a = connexion.request.get_json()
        body = SubpageIdBody(a['value'], MetaSubpage.from_dict(a['meta']))  # noqa: E501
    a = get_subpage(id2)
    if body is not None:
        cur = database.conn.cursor()
        new_val_str = json.dumps(a.value | body.value)
        cur.execute("UPDATE Subpages SET value = %s WHERE id = %s", (new_val_str,id2))

        new_meta = a.meta | body.meta
        print(new_meta)
        try:
            cur.execute("UPDATE MetaSubpages SET name = %s, path = %s, title = %s, description = %s WHERE id = %s",
                (new_meta['name'],new_meta['path'],new_meta['title'],new_meta['description'],id2))
        except mysql.connector.errors.DatabaseError as e:
            raise ExceptionHandler.WrongInputException(e) from e

        database.conn.commit()
        cur.close()
        return get_subpage(id2)

    else: 
        return a



def patch_subpage_order(body):  # noqa: E501
    """modifies the order of subpages in array

     # noqa: E501

    :param body: Order of elements in container
    :type body: List[]

    :rtype: List[Subpage]
    """
    subpages = get_subpage_array()
    subpages_id = list(map(lambda s : s.id, subpages))

    if not set(map(lambda s : s['id'], body)).issubset(set(subpages_id)):
        raise connexion.exceptions.BadRequestProblem("Podana lista zawiera nieprawidłowe id")
    curr = database.conn.cursor(dictionary=True)
    zip_list = list(map(lambda s : (s['pos'],s['id']), body))
    curr.executemany("UPDATE Subpages SET pos = %s WHERE id = %s", zip_list)
    curr.close()
    database.conn.commit()
    return get_subpage_array()
