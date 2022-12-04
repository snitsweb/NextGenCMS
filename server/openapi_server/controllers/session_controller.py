import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server import util


def get_session(login, pasword):  # noqa: E501
    """login to admin panel

    if login and password are correct, returns a JWT token to authorize REST api # noqa: E501

    :param login: 
    :type login: str
    :param pasword: 
    :type pasword: str

    :rtype: Union[str, Tuple[str, int], Tuple[str, int, Dict[str, str]]
    """
    return 'do some magic!'
