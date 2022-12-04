import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.social import Social  # noqa: E501
from openapi_server import util


def create_connection(alias, value):  # noqa: E501
    """creates a new social media connection

     # noqa: E501

    :param alias: alias of a connection
    :type alias: str
    :param value: value of a connection
    :type value: Dict[str, ]

    :rtype: Union[Social, Tuple[Social, int], Tuple[Social, int, Dict[str, str]]
    """
    return 'do some magic!'


def delete_social_by_id(id):  # noqa: E501
    """deletes a social by ID

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_social_by_id(id):  # noqa: E501
    """finds a social by ID

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: Union[Social, Tuple[Social, int], Tuple[Social, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_socials():  # noqa: E501
    """returns a array of social bindings

     # noqa: E501


    :rtype: Union[List[Social], Tuple[List[Social], int], Tuple[List[Social], int, Dict[str, str]]
    """
    return 'do some magic!'
