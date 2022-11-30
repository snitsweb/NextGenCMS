# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from photo_portfolio.models.layout import Layout  # noqa: E501
from photo_portfolio.models.meta_layout import MetaLayout  # noqa: E501
from photo_portfolio.test import BaseTestCase


class TestLayoutController(BaseTestCase):
    """LayoutController integration test stubs"""

    def test_get_layout(self):
        """Test case for get_layout

        returns a layout assigned to a page
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/layout',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_template_array(self):
        """Test case for get_template_array

        return array of template layouts
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/layout/template',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_layout(self):
        """Test case for patch_layout

        updates a layout
        """
        body = MetaLayout()
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/layout',
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_put_layout(self):
        """Test case for put_layout

        creates a new layout
        """
        body = MetaLayout()
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/layout',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_put_template_based_layout(self):
        """Test case for put_template_based_layout

        creates new layout based on template layout
        """
        query_string = [('id', 56),
                        ('alias', 'alias_example')]
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/layout/template',
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
