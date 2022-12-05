import connexion
import six

from swagger_server.models.social import Social  # noqa: E501
from swagger_server import util


def create_connection(alias, value):  # noqa: E501
    """creates a new social media connection

     # noqa: E501

    :param alias: alias of a connection
    :type alias: str
    :param value: value of a connection
    :type value: Dict[str, ]

    :rtype: Social
    """
    return 'do some magic!'


def delete_social_by_id(id):  # noqa: E501
    """deletes a social by ID

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_social_by_id(id):  # noqa: E501
    """finds a social by ID

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: Social
    """
    return 'do some magic!'


def get_socials():  # noqa: E501
    """returns a array of social bindings

     # noqa: E501


    :rtype: List[Social]
    """
    return 'do some magic!'
