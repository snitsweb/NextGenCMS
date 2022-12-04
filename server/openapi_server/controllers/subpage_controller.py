import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.subpage import Subpage  # noqa: E501
from openapi_server.models.subpage_body import SubpageBody  # noqa: E501
from openapi_server.models.subpage_id_body import SubpageIdBody  # noqa: E501
from openapi_server import util


def create_subpage(subpage_body=None):  # noqa: E501
    """creates a new subpage

    creates a new subpage based on MetaPage # noqa: E501

    :param subpage_body: 
    :type subpage_body: dict | bytes

    :rtype: Union[Subpage, Tuple[Subpage, int], Tuple[Subpage, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        subpage_body = SubpageBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_subpage(id):  # noqa: E501
    """deletes a subpage

     # noqa: E501

    :param id: id of subpage
    :type id: int

    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_subpage(id):  # noqa: E501
    """find subpage by ID

    returns a subpage based on ID # noqa: E501

    :param id: id of subpage
    :type id: int

    :rtype: Union[Subpage, Tuple[Subpage, int], Tuple[Subpage, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_subpage_array():  # noqa: E501
    """returns array of subpages

     # noqa: E501


    :rtype: Union[List[Subpage], Tuple[List[Subpage], int], Tuple[List[Subpage], int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_subpage(id, subpage_id_body=None):  # noqa: E501
    """updates a subpage

     # noqa: E501

    :param id: id of subpage
    :type id: int
    :param subpage_id_body: 
    :type subpage_id_body: dict | bytes

    :rtype: Union[Subpage, Tuple[Subpage, int], Tuple[Subpage, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        subpage_id_body = SubpageIdBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def patch_subpage_order(request_body):  # noqa: E501
    """modifies the order of subpages in array

     # noqa: E501

    :param request_body: Order of elements in container
    :type request_body: List[int]

    :rtype: Union[List[Subpage], Tuple[List[Subpage], int], Tuple[List[Subpage], int, Dict[str, str]]
    """
    return 'do some magic!'
