# plik do obsługi bazy danych
import mysql.connector
from configparser import ConfigParser
import os, time
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


def connect(max_attempts = 60, attempt_num = 1):
    """ Connect to the MySQL database server """
    global conn

    # read connection parameters
    params = config()
    print(params)

    # connect to the MySQL server

    print("Waiting for database to become available...")

    while True:
        try:
            # Try to connect to the database
            conn = mysql.connector.connect(
                **params
            )
            print("\nDatabase is up, starting the application...")
            cur = conn.cursor()
        
	        # execute a statement
            print('MySQL database version:')
            cur.execute('SELECT version()')
            # display the MySQL database server version
            db_version = cur.fetchone()
            print(db_version)

            break
        except mysql.connector.Error as err:
            if attempt_num > max_attempts:
                print(f"\nError: Unable to connect to the database after {max_attempts} attempts")
                exit(1)
            else:
                print(".", end="")
                time.sleep(1)
                attempt_num += 1

        
