# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.meta_page import MetaPage  # noqa: E501
from openapi_server.models.page import Page  # noqa: E501
from openapi_server.test import BaseTestCase


class TestPageController(BaseTestCase):
    """PageController integration test stubs"""

    def test_create_page(self):
        """Test case for create_page

        creates a new page
        """
        headers = { 
            'Accept': 'application/json',
            'login': 'login_example',
            'pasword': 'pasword_example',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/page',
            method='POST',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_page(self):
        """Test case for get_page

        returns the requested page
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/page/{id}'.format(id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_meta_page(self):
        """Test case for patch_meta_page

        modifies a metadata of a page
        """
        request_body = None
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/page/meta',
            method='PATCH',
            headers=headers,
            data=json.dumps(request_body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
