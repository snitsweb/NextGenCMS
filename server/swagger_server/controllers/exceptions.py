from connexion import FlaskApp
import connexion

class ExceptionHandler:
    class NotFoundException(RuntimeError):
        """Not found."""

    def not_found_handler(error):
        return {
            "detail": str(error),
            "status": 404,
            "title": "Not found"
        }, 404

def add_excpetion_handler(app : FlaskApp):
    app.add_error_handler(ExceptionHandler.NotFoundException, ExceptionHandler.not_found_handler)
    