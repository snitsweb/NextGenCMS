import connexion
import six
from swagger_server.database import database
import json

from swagger_server.models.layout import Layout  # noqa: E501
from swagger_server.models.meta_layout import MetaLayout  # noqa: E501
from swagger_server import util, const

"""
testowy przykład, jak to działa
"""
def get_layout():  # noqa: E501
    """returns a layout assigned to a page

     # noqa: E501


    :rtype: List[Layout]
    """
    cur = database.conn.cursor()
    cur.execute(f'SELECT * FROM Layout WHERE id = {const.DEFAULT_USER}')
    a = cur.fetchone()
    return [Layout(alias=a[2],id=a[0],is_template=a[1],value=json.loads(a[3]))]


def get_template_array():  # noqa: E501
    """return array of template layouts

    admin can choose the best layout for page from the existing ones # noqa: E501


    :rtype: List[Layout]
    """
    return 'do some magic!'


def patch_layout(body=None):  # noqa: E501
    """updates a layout

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Layout
    """
    if connexion.request.is_json:
        body = MetaLayout.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def put_layout(body=None):  # noqa: E501
    """creates a new layout

    creates a new layout based on alias and value (old layout is deleted) # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Layout
    """
    if connexion.request.is_json:
        body = MetaLayout.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def put_template_based_layout(id, alias):  # noqa: E501
    """creates new layout based on template layout

    creates new layout based on template layout, and assign it to a page (old template is removed) # noqa: E501

    :param id: ID of template layout
    :type id: int
    :param alias: alias of a layout
    :type alias: str

    :rtype: Layout
    """
    return 'do some magic!'
