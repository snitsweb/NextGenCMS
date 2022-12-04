import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.id_subpage_section_body import IdSubpageSectionBody  # noqa: E501
from openapi_server.models.image import Image  # noqa: E501
from openapi_server.models.section import Section  # noqa: E501
from openapi_server import util


def create_section(id_subpage, id_subpage_section_body=None):  # noqa: E501
    """creates a new section on a subpage

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_subpage_section_body: 
    :type id_subpage_section_body: dict | bytes

    :rtype: Union[Section, Tuple[Section, int], Tuple[Section, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        id_subpage_section_body = IdSubpageSectionBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_image_from_section(id_subpage, id_section, id_image):  # noqa: E501
    """deletes an image from section

     # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param id_image: id of image
    :type id_image: int

    :rtype: Union[List[Image], Tuple[List[Image], int], Tuple[List[Image], int, Dict[str, str]]
    """
    return 'do some magic!'


def delete_section_by_id(id_subpage, id_section):  # noqa: E501
    """deletes a section by ID

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_section: path of a subpage
    :type id_section: int

    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_section_by_id(id_subpage, id_section):  # noqa: E501
    """finds a section by ID

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param id_section: path of a subpage
    :type id_section: int

    :rtype: Union[Section, Tuple[Section, int], Tuple[Section, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_sections(id_subpage):  # noqa: E501
    """returns a array of sections of subpage

     # noqa: E501

    :param id_subpage: 
    :type id_subpage: int

    :rtype: Union[List[Section], Tuple[List[Section], int], Tuple[List[Section], int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_image_order(id_subpage, id_section, request_body):  # noqa: E501
    """modifies the order of photos in section or add all photos from ID array to this section

     # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param request_body: Order of elements in container
    :type request_body: List[int]

    :rtype: Union[List[Image], Tuple[List[Image], int], Tuple[List[Image], int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_section_order(id_subpage, request_body):  # noqa: E501
    """modifies the order of sections in subpage

     # noqa: E501

    :param id_subpage: path of a subpage
    :type id_subpage: int
    :param request_body: Order of elements in container
    :type request_body: List[int]

    :rtype: Union[List[Section], Tuple[List[Section], int], Tuple[List[Section], int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_section_value(id_subpage, id_section, request_body=None):  # noqa: E501
    """modifies a value of section

    modifies a value of section - new value object does not replace old, but method combines both of them (@see patch method) # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param request_body: value of section
    :type request_body: Dict[str, ]

    :rtype: Union[Section, Tuple[Section, int], Tuple[Section, int, Dict[str, str]]
    """
    return 'do some magic!'


def post_image_to_section(id_subpage, id_section, value):  # noqa: E501
    """add one image to a section

     # noqa: E501

    :param id_subpage: id of a subpage
    :type id_subpage: int
    :param id_section: id of section
    :type id_section: int
    :param value: id of image
    :type value: int

    :rtype: Union[List[Image], Tuple[List[Image], int], Tuple[List[Image], int, Dict[str, str]]
    """
    return 'do some magic!'
