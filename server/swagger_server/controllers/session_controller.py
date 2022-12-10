import connexion
import six

from swagger_server import util


def get_session(login, pasword):  # noqa: E501
    """login to admin panel

    if login and password are correct, returns a JWT token to authorize REST api # noqa: E501

    :param login: 
    :type login: str
    :param pasword: 
    :type pasword: str

    :rtype: str
    """
    return 'do some magic!'
