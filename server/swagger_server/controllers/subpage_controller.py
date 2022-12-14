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
    if connexion.request.is_json:
        body = SubpageBody.from_dict(connexion.request.get_json())  # noqa: E501

    user = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("INSERT INTO Subpages (page, value) VALUES (%s, %s, %s)", (user, "{}"))
    curr.execute("SELECT LAST_INSERT_ID()")
    id = curr.fetchone()
    if body is None:
        body = SubpageBody()
    body_dict = body.to_dict()
    body_no_none = {k: v if v is not None else '' for k, v in body_dict}
    curr.execute("INSERT INTO MetaSubpages (subpage, name, path, title, description) VALUES (%s, %s, %s)", 
        (id, body_no_none['name'], body_no_none['path'], body_no_none['title'], body_no_none['description']))
    database.conn.commit()
    curr.close()
    return get_subpage(id)


def delete_subpage(id2):  # noqa: E501
    """deletes a subpage

     # noqa: E501

    :param id2: id of subpage
    :type id2: int

    :rtype: None
    """
    return 'do some magic!'


def get_subpage(id2):  # noqa: E501
    """find subpage by ID

    returns a subpage based on ID # noqa: E501

    :param id2: id of subpage
    :type id2: int

    :rtype: Subpage
    """
    user = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT * FROM Subpages WHERE page = %s AND id = %s", (user, id2))
    res = curr.fetchone()
    if res is None:
        raise ExceptionHandler.NotFoundException()
    value = json.loads(res[2])
    curr.close()
    
    #pobieramy MetaSubpage
    curr = database.conn.cursor(dictionary=True)
    curr.execute("SELECT * FROM MetaSubpages WHERE id = %s", (id2,))
    res = curr.fetchone()
    curr.close()
    meta_subpage = MetaSubpage.from_dict(res)

    # pobieramy listę sekcji
    sections = get_sections(id2)
    return Subpage(id=id2, page=user, meta=meta_subpage, sections=sections, value=value)


def get_subpage_array():  # noqa: E501
    """returns array of subpages

     # noqa: E501


    :rtype: List[Subpage]
    """
    user = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT * FROM Subpages WHERE page = %s ", (user,))
    res_list = curr.fetchall()
    if res_list is None:
        return []
    subpage_list = []
    for res in res_list:
        if res is None:
            raise ExceptionHandler.NotFoundException()
        id = res[0]
        value = json.loads(res[2])
        curr.close()
        
        #pobieramy MetaSubpage
        curr = database.conn.cursor(dictionary=True)
        curr.execute("SELECT * FROM MetaSubpages WHERE id = %s", (id,))
        res = curr.fetchone()
        curr.close()
        meta_subpage = MetaSubpage.from_dict(res)

        # pobieramy listę sekcji
        sections = get_sections(id)
        subpage_list.append(Subpage(id=id, page=user, meta=meta_subpage, sections=sections, value=value))

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
        body = SubpageIdBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def patch_subpage_order(body):  # noqa: E501
    """modifies the order of subpages in array

     # noqa: E501

    :param body: Order of elements in container
    :type body: List[]

    :rtype: List[Subpage]
    """
    return 'do some magic!'
