import connexion
import six

from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.image_id_body import ImageIdBody  # noqa: E501
from swagger_server import util, __main__, const

from swagger_server.database import database


def delete_image(id):  # noqa: E501
    """deletes image with specific id

    admin send request to server with intentions of deleting image with specific id # noqa: E501

    :param id: id of deleted image
    :type id: int

    :rtype: None
    """
    cur = database.conn.cursor()
    cur.execute(f'DELETE FROM Images WHERE id = %s AND page = {const.DEFAULT_USER}', (id,))
    database.conn.commit()
    cur.close()
    return None


def get_image(id2):  # noqa: E501
    """returns specific image

    returns image requested by admin/user # noqa: E501

    :param id: id of requested image
    :type id: int

    :rtype: Image
    """
    cur = database.conn.cursor(dictionary=True)
    cur.execute(f'SELECT * FROM Images WHERE id = %s AND page = {const.DEFAULT_USER}', (id2,))
    a = cur.fetchone()
    res = Image.from_dict(a)
    # zamiana adresu lokalnego na url, który może być dostępny przez klienta
    res.image = to_url(res.image)
    return res


def get_image_array():  # noqa: E501
    """get array of images

    returns array of images with specified position # noqa: E501

    :rtype: List[Image]
    """
    cur = database.conn.cursor(dictionary=True)
    cur.execute(f'SELECT * FROM Images WHERE page = {const.DEFAULT_USER}')
    fetch = cur.fetchall()
    image_list = list(map(lambda x : Image.from_dict(x),fetch))
    # zamiana adresu lokalnego na url, który może być dostępny przez klienta
    for img in image_list:
        img.image = to_url(img.image)
    return image_list


def patch_image(id, body=None):  # noqa: E501
    """modify metadata of image (alt and title)

     # noqa: E501

    :param id: 
    :type id: int
    :param body: 
    :type body: dict | bytes

    :rtype: Image
    """
    if connexion.request.is_json:
        body = ImageIdBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def post_image(file=None, alt=None, title=None):  # noqa: E501
    """uploads an image

    user sends image in binary, which is stored on server. Returns Image object with address and metadata (Photo object) # noqa: E501

    :param file: 
    :type file: strstr
    :param alt: 
    :type alt: str
    :param title: 
    :type title: str

    :rtype: Image
    """
    return 'do some magic!'


def to_url(s : str) -> str:
    """
    funkcja zmieniająca adres obrazu na serwerze na url obrazu
    """
    return 'do some magic!'

def check_image_in_page(id) -> bool:
    """
    funkcja sprawdzająca czy zdjęcie o danym id należy do strony
    """
    return True
