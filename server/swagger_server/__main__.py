#!/usr/bin/env python3

import connexion

from swagger_server import encoder
from swagger_server.routes.router import configure_route
from swagger_server.controllers.exceptions import add_excpetion_handler
from swagger_server.database import database
from flask_cors import CORS






def main():
    app = connexion.FlaskApp(__name__, specification_dir='./swagger/')
    CORS(app.app)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Foto Portfolio Project'}, pythonic_params=True)
    
    # Utworzenie połącznia z bazą danych
    database.connect()

    #Utworzenie przekierowań 
    configure_route(app)
    add_excpetion_handler(app)

    app.run(port=8080)

    


if __name__ == '__main__':
    main()
