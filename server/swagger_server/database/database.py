# plik do obsługi bazy danych
import mysql.connector
from configparser import ConfigParser
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def config(filename=BASE_DIR+'/database/database.ini', section='mysql'):
    # create a parser
    parser = ConfigParser()
    # read config file
    parser.read(filename)

    # get section, default to mysql
    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception(
            "Section {0} not found in the {1} file".format(section, filename)
        )

    return db


def connect():
    """ Connect to the MySQL database server """
    global conn
    try:
        # read connection parameters
        params = config()

        # connect to the MySQL server
        print('Connecting to the MySQL database...')
        conn = mysql.connector.connect(**params)
        
		
        # create a cursor
        cur = conn.cursor()
        
	# execute a statement
        print('MySQL database version:')
        cur.execute('SELECT version()')

        # display the MySQL database server version
        db_version = cur.fetchone()
        print(db_version)
       
	# close the communication with the MySQL
        cur.close()
    except (Exception, mysql.DatabaseError) as error:
        print(error)