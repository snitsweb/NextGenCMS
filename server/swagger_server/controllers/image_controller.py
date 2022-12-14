import connexion
import six

from werkzeug.datastructures import FileStorage
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.image_id_body import ImageIdBody  # noqa: E501
from swagger_server import util, __main__, const
from swagger_server.controllers.exceptions import ExceptionHandler
from swagger_server.database import database
import os

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def delete_image(id2):  # noqa: E501
    """deletes image with specific id

    admin send request to server with intentions of deleting image with specific id # noqa: E501

    :param id: id of deleted image
    :type id: int

    :rtype: None
    """
    cur = database.conn.cursor()
    cur.execute(f'DELETE FROM Images WHERE id = %s AND page = {const.DEFAULT_USER}', (id2,))
    database.conn.commit()
    cur.close()


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
    if a is None:
        raise ExceptionHandler.NotFoundException
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


def patch_image(id2, body=None):  # noqa: E501
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
    a = get_image(id2)

    if body is not None:
        a = Image.from_dict(a.to_dict() | body.to_dict())
        curr = database.conn.cursor()
        curr.execute("UPDATE Images SET alt = %s, title = %s WHERE id = %s", (a.alt, a.title, id2))
        database.conn.commit()
        curr.close()

    a.image = to_url(a.image)

    return a


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
    if file is None or not allowed_file(file.filename):
        raise connexion.exceptions.BadRequestProblem()
    file.save(BASE_DIR + "/images/" + str(const.DEFAULT_USER) +"/"+ file.filename)

    #zapis do bazy danych
    curr = database.conn.cursor(buffered=True)
    if alt is None:
        alt = ""
    if title is None:
        title = ""
    curr.execute("INSERT INTO Images (page, image, alt, title) VALUES (%s,%s,%s,%s)", 
        (str(const.DEFAULT_USER), f"swagger_server/images/{const.DEFAULT_USER}/{file.filename}", alt, title))
    curr.execute("SELECT LAST_INSERT_ID()")
    database.conn.commit()
    a = curr.fetchone()
    curr.close()
    return get_image(a[0])


def to_url(s : str) -> str:
    """
    funkcja zmieniająca adres obrazu na serwerze na url obrazu
    """
    return s.replace('swagger_server/images','files')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
