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
    cur.execute(f'SELECT * FROM Layouts WHERE id = (SELECT layout FROM Pages WHERE Pages.id = {const.DEFAULT_USER})')
    a = cur.fetchone()
    cur.close()
    return [Layout(alias=a[2],id=a[0],is_template=a[1],value=json.loads(a[3]))]


def get_template_array():  # noqa: E501
    """return array of template layouts

    admin can choose the best layout for page from the existing ones # noqa: E501


    :rtype: List[Layout]
    """
    cur = database.conn.cursor()
    cur.execute(f'SELECT * FROM Layouts WHERE is_template=True')
    a = cur.fetchall()
    a = list(map(lambda x : Layout(id=int(x[0]),is_template=bool(x[1]), alias=str(x[2]), value=json.loads(x[3])) , a))
    cur.close()
    return a


def patch_layout(body=None):  # noqa: E501
    """updates a layout

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Layout
    """
    if connexion.request.is_json:
        body = MetaLayout.from_dict(connexion.request.get_json())  # noqa: E501
    
    a = get_layout()[0]
    
    if body is not None:
        cur = database.conn.cursor()
        if body.alias is not None:
            cur.execute("UPDATE Layouts SET alias = %s WHERE id = %s", (body.alias,a.id))
        if body.value is not None:
            new_val_str = json.dumps(a.value.to_dict() | body.value.to_dict())
            cur.execute("UPDATE Layouts SET value = %s WHERE id = %s", (new_val_str,a.id))
        database.conn.commit()
        cur.close()
        return get_layout()[0]

    else:  
        return a


def put_layout(body=None):  # noqa: E501
    """creates a new layout

    creates a new layout based on alias and value (old layout is deleted) # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Layout
    """
    if connexion.request.is_json:
        body = MetaLayout.from_dict(connexion.request.get_json())  # noqa: E501
    if body is not None:
        cur = database.conn.cursor()
        cur.execute("INSERT INTO Layouts (alias, value, is_template) VALUES (%s, %s, False)", (body.alias, json.dumps(body.value)))
        cur.execute("SELECT LAST_INSERT_ID()")
        id = cur.fetchone()
        cur.execute(f"SELECT layout FROM Pages WHERE Pages.id = {const.DEFAULT_USER}")
        old_id = cur.fetchone()
        cur.execute(f"UPDATE Pages SET layout = {id[0]} WHERE id = {const.DEFAULT_USER}")
        cur.execute(f"DELETE FROM Layouts WHERE id = {old_id[0]}")
        cur.commit()
        cur.close()

    return get_layout()


def put_template_based_layout(id2, alias):  # noqa: E501
    """creates new layout based on template layout

    creates new layout based on template layout, and assign it to a page (old template is removed) # noqa: E501

    :param id: ID of template layout
    :type id: int
    :param alias: alias of a layout
    :type alias: str

    :rtype: Layout
    """
    cur = database.conn.cursor()
    cur.execute("SELECT * FROM Layouts WHERE id = %s AND is_template = True",(id2,))
    a = cur.fetchone()
    a_layout = Layout(alias=a[2],id=a[0],is_template=a[1],value=json.loads(a[3]))
    cur.execute("INSERT INTO Layouts (alias, value, is_template) VALUES (%s, %s, False)", (alias, json.dumps(a_layout.value)))
    cur.execute("SELECT LAST_INSERT_ID()")
    last_id = cur.fetchone()
    cur.execute(f"SELECT layout FROM Pages WHERE Pages.id = {const.DEFAULT_USER}")
    old_id = cur.fetchone()
    cur.execute(f"UPDATE Pages SET layout = {last_id[0]} WHERE id = {const.DEFAULT_USER}")
    cur.execute(f"DELETE FROM Layouts WHERE id = {old_id[0]}")
    database.conn.commit()
    cur.close()
    
    return get_layout()
