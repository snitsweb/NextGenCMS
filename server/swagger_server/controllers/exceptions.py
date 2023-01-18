from connexion import FlaskApp
import connexion

class ExceptionHandler:
    class NotFoundException(RuntimeError):
        """Not found."""

    class WrongInputException(RuntimeError):
        """Wrong input."""
        def __init__(self, message):
            super().__init__(message)

    class ForbiddenException(RuntimeError):
        """Forbidden."""
        def __init__(self, message):
            super().__init__("Operation forbidden: " + message)

    def not_found_handler(error):
        return {
            "detail": str(error),
            "status": 404,
            "title": "Not found"
        }, 404
    
    def wrong_input_handler(error):
        return {
            "detail": str(error),
            "status": 400,
            "title": "Wrong input"
        }, 400
    
    def forbidden_handler(error):
        return {
            "detail": str(error),
            "status": 403,
            "title": "Forbidden"
        }, 403

def add_excpetion_handler(app : FlaskApp):
    app.add_error_handler(ExceptionHandler.NotFoundException, ExceptionHandler.not_found_handler)
    app.add_error_handler(ExceptionHandler.WrongInputException, ExceptionHandler.wrong_input_handler)
    app.add_error_handler(ExceptionHandler.ForbiddenException, ExceptionHandler.forbidden_handler)
    