from flask import send_file
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def configure_route(app):

    @app.route('/files/<page>/<filename>')
    def send_image(page,filename):
        return send_file(BASE_DIR + '/images/' + str(page) + '/' + str(filename))