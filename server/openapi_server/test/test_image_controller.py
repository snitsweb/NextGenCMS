# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.image import Image  # noqa: E501
from openapi_server.models.image_id_body import ImageIdBody  # noqa: E501
from openapi_server.test import BaseTestCase


class TestImageController(BaseTestCase):
    """ImageController integration test stubs"""

    def test_delete_image(self):
        """Test case for delete_image

        deletes image with specific id
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/image/{id}'.format(id=56),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image(self):
        """Test case for get_image

        returns specific image
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/image/{id}'.format(id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image_array(self):
        """Test case for get_image_array

        get array of images
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/image',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_image(self):
        """Test case for patch_image

        modify metadata of image (alt and title)
        """
        image_id_body = openapi_server.ImageIdBody()
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/image/{id}'.format(id=56),
            method='PATCH',
            headers=headers,
            data=json.dumps(image_id_body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    @unittest.skip("multipart/form-data not supported by Connexion")
    def test_post_image(self):
        """Test case for post_image

        uploads an image
        """
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer special-key',
        }
        data = dict(file='/path/to/file',
                    alt='alt_example',
                    title='title_example')
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.1.0/image',
            method='POST',
            headers=headers,
            data=data,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
