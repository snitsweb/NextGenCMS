import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.meta_page import MetaPage  # noqa: E501
from openapi_server.models.page import Page  # noqa: E501
from openapi_server import util


def create_page(login, pasword):  # noqa: E501
    """creates a new page

    creates a blank project with one blank subpage - requires creating new account (user must provide login and password) # noqa: E501

    :param login: 
    :type login: str
    :param pasword: 
    :type pasword: str

    :rtype: Union[Page, Tuple[Page, int], Tuple[Page, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_page(id):  # noqa: E501
    """returns the requested page

    returns page that user/admin sent request for # noqa: E501

    :param id: id of page
    :type id: int

    :rtype: Union[Page, Tuple[Page, int], Tuple[Page, int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_meta_page(request_body):  # noqa: E501
    """modifies a metadata of a page

     # noqa: E501

    :param request_body: Meta information of page
    :type request_body: Dict[str, ]

    :rtype: Union[MetaPage, Tuple[MetaPage, int], Tuple[MetaPage, int, Dict[str, str]]
    """
    return 'do some magic!'
