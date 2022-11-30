import connexion
import six

from photo_portfolio.models.meta_page import MetaPage  # noqa: E501
from photo_portfolio.models.page import Page  # noqa: E501
from photo_portfolio import util


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


def get_page(id):  # noqa: E501
    """returns the requested page

    returns page that user/admin sent request for # noqa: E501

    :param id: id of page
    :type id: int

    :rtype: Page
    """
    return 'do some magic!'


def patch_meta_page(body):  # noqa: E501
    """modifies a metadata of a page

     # noqa: E501

    :param body: Meta information of page
    :type body: dict | bytes

    :rtype: MetaPage
    """
    if connexion.request.is_json:
        body = Dict.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
