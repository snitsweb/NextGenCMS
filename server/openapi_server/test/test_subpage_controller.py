# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.subpage import Subpage  # noqa: E501
from openapi_server.models.subpage_body import SubpageBody  # noqa: E501
from openapi_server.models.subpage_id_body import SubpageIdBody  # noqa: E501
from openapi_server.test import BaseTestCase


class TestSubpageController(BaseTestCase):
    """SubpageController integration test stubs"""

    def test_create_subpage(self):
        """Test case for create_subpage

        creates a new subpage
        """
        subpage_body = openapi_server.SubpageBody()
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage',
            method='POST',
            headers=headers,
            data=json.dumps(subpage_body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_subpage(self):
        """Test case for delete_subpage

        deletes a subpage
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage/{id}'.format(id=56),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_subpage(self):
        """Test case for get_subpage

        find subpage by ID
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage/{id}'.format(id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_subpage_array(self):
        """Test case for get_subpage_array

        returns array of subpages
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_subpage(self):
        """Test case for patch_subpage

        updates a subpage
        """
        subpage_id_body = openapi_server.SubpageIdBody()
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage/{id}'.format(id=56),
            method='PATCH',
            headers=headers,
            data=json.dumps(subpage_id_body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_subpage_order(self):
        """Test case for patch_subpage_order

        modifies the order of subpages in array
        """
        request_body = [2,1,4,3]
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage',
            method='PATCH',
            headers=headers,
            data=json.dumps(request_body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
