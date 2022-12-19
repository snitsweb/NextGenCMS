# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class ImageBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, file: str=None, alt: str=None, title: str=None):  # noqa: E501
        """ImageBody - a model defined in Swagger

        :param file: The file of this ImageBody.  # noqa: E501
        :type file: str
        :param alt: The alt of this ImageBody.  # noqa: E501
        :type alt: str
        :param title: The title of this ImageBody.  # noqa: E501
        :type title: str
        """
        self.swagger_types = {
            'file': str,
            'alt': str,
            'title': str
        }

        self.attribute_map = {
            'file': 'file',
            'alt': 'alt',
            'title': 'title'
        }
        self._file = file
        self._alt = alt
        self._title = title

    @classmethod
    def from_dict(cls, dikt) -> 'ImageBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The image_body of this ImageBody.  # noqa: E501
        :rtype: ImageBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def file(self) -> str:
        """Gets the file of this ImageBody.


        :return: The file of this ImageBody.
        :rtype: str
        """
        return self._file

    @file.setter
    def file(self, file: str):
        """Sets the file of this ImageBody.


        :param file: The file of this ImageBody.
        :type file: str
        """
        if file is None:
            raise ValueError("Invalid value for `file`, must not be `None`")  # noqa: E501

        self._file = file

    @property
    def alt(self) -> str:
        """Gets the alt of this ImageBody.


        :return: The alt of this ImageBody.
        :rtype: str
        """
        return self._alt

    @alt.setter
    def alt(self, alt: str):
        """Sets the alt of this ImageBody.


        :param alt: The alt of this ImageBody.
        :type alt: str
        """

        self._alt = alt

    @property
    def title(self) -> str:
        """Gets the title of this ImageBody.


        :return: The title of this ImageBody.
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title: str):
        """Sets the title of this ImageBody.


        :param title: The title of this ImageBody.
        :type title: str
        """

        self._title = title
