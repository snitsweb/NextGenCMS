# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.layout import Layout  # noqa: E501
from openapi_server.models.meta_layout import MetaLayout  # noqa: E501
from openapi_server.test import BaseTestCase


class TestLayoutController(BaseTestCase):
    """LayoutController integration test stubs"""

    def test_get_layout(self):
        """Test case for get_layout

        returns a layout assigned to a page
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/layout',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_template_array(self):
        """Test case for get_template_array

        return array of template layouts
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/layout/template',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_layout(self):
        """Test case for patch_layout

        updates a layout
        """
        meta_layout = {"alias":"alias","value":{"background_color":"background_color","author":"author","nav_bar":"left","font":"font"}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/layout',
            method='PATCH',
            headers=headers,
            data=json.dumps(meta_layout),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_put_layout(self):
        """Test case for put_layout

        creates a new layout
        """
        meta_layout = {"alias":"alias","value":{"background_color":"background_color","author":"author","nav_bar":"left","font":"font"}}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/layout',
            method='PUT',
            headers=headers,
            data=json.dumps(meta_layout),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_put_template_based_layout(self):
        """Test case for put_template_based_layout

        creates new layout based on template layout
        """
        query_string = [('id', 56),
                        ('alias', 'alias_example')]
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/layout/template',
            method='PUT',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
