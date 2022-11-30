# coding: utf-8

import sys
from setuptools import setup, find_packages

NAME = "photo_portfolio_project"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
    "connexion",
    "swagger-ui-bundle>=0.0.2"
]

setup(
    name=NAME,
    version=VERSION,
    description="Foto Portfolio Project",
    author_email="mateusz.teplicki@gmail.com",
    url="",
    keywords=["Swagger", "Foto Portfolio Project"],
    install_requires=REQUIRES,
    packages=find_packages(),
    package_data={'': ['swagger/swagger.yaml']},
    include_package_data=True,
    entry_points={
        'console_scripts': ['photo_portfolio=photo_portfolio.__main__:main']},
    long_description="""\
    Plik openapi definiujący RESTowe zapytania aplikacji do szybkiego tworzenia portfolio dla fotografów 
    """
)
