import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.layout import Layout  # noqa: E501
from openapi_server.models.meta_layout import MetaLayout  # noqa: E501
from openapi_server import util


def get_layout():  # noqa: E501
    """returns a layout assigned to a page

     # noqa: E501


    :rtype: Union[List[Layout], Tuple[List[Layout], int], Tuple[List[Layout], int, Dict[str, str]]
    """
    return 'do some magic!'


def get_template_array():  # noqa: E501
    """return array of template layouts

    admin can choose the best layout for page from the existing ones # noqa: E501


    :rtype: Union[List[Layout], Tuple[List[Layout], int], Tuple[List[Layout], int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_layout(meta_layout=None):  # noqa: E501
    """updates a layout

     # noqa: E501

    :param meta_layout: 
    :type meta_layout: dict | bytes

    :rtype: Union[Layout, Tuple[Layout, int], Tuple[Layout, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        meta_layout = MetaLayout.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def put_layout(meta_layout=None):  # noqa: E501
    """creates a new layout

    creates a new layout based on alias and value (old layout is deleted) # noqa: E501

    :param meta_layout: 
    :type meta_layout: dict | bytes

    :rtype: Union[Layout, Tuple[Layout, int], Tuple[Layout, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        meta_layout = MetaLayout.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def put_template_based_layout(id, alias):  # noqa: E501
    """creates new layout based on template layout

    creates new layout based on template layout, and assign it to a page (old template is removed) # noqa: E501

    :param id: ID of template layout
    :type id: int
    :param alias: alias of a layout
    :type alias: str

    :rtype: Union[Layout, Tuple[Layout, int], Tuple[Layout, int, Dict[str, str]]
    """
    return 'do some magic!'
