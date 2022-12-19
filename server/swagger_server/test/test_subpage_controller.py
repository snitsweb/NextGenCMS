# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.subpage import Subpage  # noqa: E501
from swagger_server.models.subpage_body import SubpageBody  # noqa: E501
from swagger_server.models.subpage_id_body import SubpageIdBody  # noqa: E501
from swagger_server.test import BaseTestCase


class TestSubpageController(BaseTestCase):
    """SubpageController integration test stubs"""

    def test_create_subpage(self):
        """Test case for create_subpage

        creates a new subpage
        """
        body = SubpageBody()
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_subpage(self):
        """Test case for delete_subpage

        deletes a subpage
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage/{id}'.format(id=56),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_subpage(self):
        """Test case for get_subpage

        find subpage by ID
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage/{id}'.format(id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_subpage_array(self):
        """Test case for get_subpage_array

        returns array of subpages
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_subpage(self):
        """Test case for patch_subpage

        updates a subpage
        """
        body = SubpageIdBody()
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage/{id}'.format(id=56),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_subpage_order(self):
        """Test case for patch_subpage_order

        modifies the order of subpages in array
        """
        body = [[ 2, 1, 4, 3 ]]
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/subpage',
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
