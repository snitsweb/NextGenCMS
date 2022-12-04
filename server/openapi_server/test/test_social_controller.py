# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.social import Social  # noqa: E501
from openapi_server.test import BaseTestCase


class TestSocialController(BaseTestCase):
    """SocialController integration test stubs"""

    def test_create_connection(self):
        """Test case for create_connection

        creates a new social media connection
        """
        query_string = [('alias', 'alias_example')]
        headers = { 
            'Accept': 'application/json',
            'value': None,
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/social',
            method='POST',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_social_by_id(self):
        """Test case for delete_social_by_id

        deletes a social by ID
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/social/{id}'.format(id=5),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_social_by_id(self):
        """Test case for get_social_by_id

        finds a social by ID
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/social/{id}'.format(id=5),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_socials(self):
        """Test case for get_socials

        returns a array of social bindings
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/social',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
