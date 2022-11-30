import connexion
import six

from photo_portfolio.models.layout import Layout  # noqa: E501
from photo_portfolio.models.meta_layout import MetaLayout  # noqa: E501
from photo_portfolio import util


def get_layout():  # noqa: E501
    """returns a layout assigned to a page

     # noqa: E501


    :rtype: List[Layout]
    """
    return 'do some magic!'


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
