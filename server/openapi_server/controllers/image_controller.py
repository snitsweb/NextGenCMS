import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.image import Image  # noqa: E501
from openapi_server.models.image_id_body import ImageIdBody  # noqa: E501
from openapi_server import util


def delete_image(id):  # noqa: E501
    """deletes image with specific id

    admin send request to server with intentions of deleting image with specific id # noqa: E501

    :param id: id of deleted image
    :type id: int

    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_image(id):  # noqa: E501
    """returns specific image

    returns image requested by admin/user # noqa: E501

    :param id: id of requested image
    :type id: int

    :rtype: Union[Image, Tuple[Image, int], Tuple[Image, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_image_array():  # noqa: E501
    """get array of images

    returns array of images with specified position # noqa: E501


    :rtype: Union[List[Image], Tuple[List[Image], int], Tuple[List[Image], int, Dict[str, str]]
    """
    return 'do some magic!'


def patch_image(id, image_id_body=None):  # noqa: E501
    """modify metadata of image (alt and title)

     # noqa: E501

    :param id: 
    :type id: int
    :param image_id_body: 
    :type image_id_body: dict | bytes

    :rtype: Union[Image, Tuple[Image, int], Tuple[Image, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        image_id_body = ImageIdBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def post_image(file, alt=None, title=None):  # noqa: E501
    """uploads an image

    user sends image in binary, which is stored in database. Returns Image object with address and metadata (Photo object) # noqa: E501

    :param file: 
    :type file: str
    :param alt: 
    :type alt: str
    :param title: 
    :type title: str

    :rtype: Union[Image, Tuple[Image, int], Tuple[Image, int, Dict[str, str]]
    """
    return 'do some magic!'
