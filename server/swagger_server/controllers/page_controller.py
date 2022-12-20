import connexion
import six

from swagger_server.models.meta_page import MetaPage  # noqa: E501
from swagger_server.models.page import Page  # noqa: E501
from swagger_server import util, const
from swagger_server.database import database
from swagger_server.controllers.exceptions import ExceptionHandler
from swagger_server.controllers import subpage_controller, layout_controller, social_controller


def create_page(login, pasword):  # noqa: E501
    """creates a new page

    creates a blank project with one blank subpage - requires creating new account (user must provide login and password) # noqa: E501

    :param login: 
    :type login: str
    :param pasword: 
    :type pasword: str

    :rtype: Page
    """
    return 'do some magic!'


def get_page(id_page):  # noqa: E501
    """returns the requested page

    returns page that user/admin sent request for # noqa: E501

    :param id: id of page
    :type id: int

    :rtype: Page
    """
    id = id_page
    token_info = {'sub': '1'}
    curr = database.conn.cursor(dictionary=True, buffered=True)
    curr.execute(f"SELECT * FROM Pages WHERE id = {id}",)
    a = curr.fetchone()
    if a is None:
        raise ExceptionHandler.NotFoundException

    curr.execute(f"SELECT * FROM MetaPages WHERE page = {id}")
    curr.close()
    meta_query= curr.fetchone()
    if meta_query is None:
        raise connexion.exceptions.ConnexionException()
    meta = MetaPage.from_dict(meta_query)
    layout = layout_controller.get_layout(token_info)[0]
    socials = social_controller.get_socials(token_info)
    subpages = subpage_controller.get_subpage_array(token_info)

    return Page(id=id, meta=meta, layout=layout, socials=socials, subpages=subpages)

    


def patch_meta_page(body, token_info):  # noqa: E501
    """modifies a metadata of a page

     # noqa: E501

    :param body: Meta information of page
    :type body: dict | bytes

    :rtype: MetaPage
    """
    if connexion.request.is_json:
        body = connexion.request.get_json()  # noqa: E501
    return 'do some magic!'
