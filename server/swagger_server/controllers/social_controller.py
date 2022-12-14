import connexion
import six

from swagger_server.models.social import Social  # noqa: E501
from swagger_server import util, const
import json
from swagger_server.database import database
from swagger_server.controllers.exceptions import ExceptionHandler


def create_connection(alias, value):  # noqa: E501
    """creates a new social media connection

     # noqa: E501

    :param alias: alias of a connection
    :type alias: str
    :param value: value of a connection
    :type value: Dict[str, ]

    :rtype: Social
    """
    curr = database.conn.cursor()
    curr.execute("INSERT INTO Socials (page, alias, value) VALUES (%s, %s, %s)", (const.DEFAULT_USER, alias, json.dumps(value)))
    curr.execute("SELECT LAST_INSERT_ID()")
    id = curr.fetchone()
    database.conn.commit()
    curr.close()
    return get_social_by_id(id[0])


def delete_social_by_id(id):  # noqa: E501
    """deletes a social by ID

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    page = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("DELETE FROM Socials WHERE page = %s AND id = %s", (page, id))
    database.conn.commit()
    curr.close()
    return 'do some magic!'


def get_social_by_id(id):  # noqa: E501
    """finds a social by ID

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: Social
    """
    page = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT * FROM Socials WHERE page = %s AND id = %s", (page, id))
    res = curr.fetchone()
    if res is None:
        raise ExceptionHandler.NotFoundException
    curr.close()
    return Social(id=res[0],page=res[1],alias=res[2],value=json.loads(res[3]))


def get_socials():  # noqa: E501
    """returns a array of social bindings

     # noqa: E501


    :rtype: List[Social]
    """
    page = const.DEFAULT_USER
    curr = database.conn.cursor()
    curr.execute("SELECT * FROM Socials WHERE page = %s AND id = %s", (page, id))
    res_arr = curr.fetchall()
    curr.close()
    if res_arr == None:
        arr = []
    else:
        arr = list(map(lambda res : Social(id=res[0],page=res[1],alias=res[2],value=json.loads(res[3])), res_arr) )
    
    return arr
