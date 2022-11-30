# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from photo_portfolio.models.image import Image  # noqa: E501
from photo_portfolio.models.image_id_body import ImageIdBody  # noqa: E501
from photo_portfolio.test import BaseTestCase


class TestImageController(BaseTestCase):
    """ImageController integration test stubs"""

    def test_delete_image(self):
        """Test case for delete_image

        deletes image with specific id
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/image/{id}'.format(id=56),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image(self):
        """Test case for get_image

        returns specific image
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/image/{id}'.format(id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image_array(self):
        """Test case for get_image_array

        get array of images
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/image',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_image(self):
        """Test case for patch_image

        modify metadata of image (alt and title)
        """
        body = ImageIdBody()
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/image/{id}'.format(id=56),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_image(self):
        """Test case for post_image

        uploads an image
        """
        data = dict(file='file_example',
                    alt='alt_example',
                    title='title_example')
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/image',
            method='POST',
            data=data,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
