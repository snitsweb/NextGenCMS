import connexion
import six

from swagger_server.models.subpage import Subpage  # noqa: E501
from swagger_server.models.subpage_body import SubpageBody  # noqa: E501
from swagger_server.models.subpage_id_body import SubpageIdBody  # noqa: E501
from swagger_server import util


def create_subpage(body=None):  # noqa: E501
    """creates a new subpage

    creates a new subpage based on MetaPage # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Subpage
    """
    if connexion.request.is_json:
        body = SubpageBody.from_dict(connexion.request.get_json())  # noqa: E501
    
    return 'do some magic!'


def delete_subpage(id):  # noqa: E501
    """deletes a subpage

     # noqa: E501

    :param id: id of subpage
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_subpage(id):  # noqa: E501
    """find subpage by ID

    returns a subpage based on ID # noqa: E501

    :param id: id of subpage
    :type id: int

    :rtype: Subpage
    """
    return 'do some magic!'


def get_subpage_array():  # noqa: E501
    """returns array of subpages

     # noqa: E501


    :rtype: List[Subpage]
    """
    return 'do some magic!'


def patch_subpage(id, body=None):  # noqa: E501
    """updates a subpage

     # noqa: E501

    :param id: id of subpage
    :type id: int
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
