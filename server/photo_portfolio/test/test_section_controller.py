# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from photo_portfolio.models.id_subpage_section_body import IdSubpageSectionBody  # noqa: E501
from photo_portfolio.models.image import Image  # noqa: E501
from photo_portfolio.models.section import Section  # noqa: E501
from photo_portfolio.test import BaseTestCase


class TestSectionController(BaseTestCase):
    """SectionController integration test stubs"""

    def test_create_section(self):
        """Test case for create_section

        creates a new section on a subpage
        """
        body = IdSubpageSectionBody()
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section'.format(id_subpage=56),
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_image_from_section(self):
        """Test case for delete_image_from_section

        deletes an image from section
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section/{id_section}/images/{id_image}'.format(id_subpage=56, id_section=56, id_image=56),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_section_by_id(self):
        """Test case for delete_section_by_id

        deletes a section by ID
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section/{id_section}'.format(id_subpage=56, id_section=56),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_section_by_id(self):
        """Test case for get_section_by_id

        finds a section by ID
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section/{id_section}'.format(id_subpage=56, id_section=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_sections(self):
        """Test case for get_sections

        returns a array of sections of subpage
        """
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section'.format(id_subpage=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_image_order(self):
        """Test case for patch_image_order

        modifies the order of photos in section or add all photos from ID array to this section
        """
        body = [[ 2, 1, 4, 3 ]]
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section/{id_section}/images'.format(id_subpage=56, id_section=56),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_section_order(self):
        """Test case for patch_section_order

        modifies the order of sections in subpage
        """
        body = [[ 2, 1, 4, 3 ]]
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section'.format(id_subpage=56),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_section_value(self):
        """Test case for patch_section_value

        modifies a value of section
        """
        body = None
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section/{id_section}/value'.format(id_subpage=56, id_section=56),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_image_to_section(self):
        """Test case for post_image_to_section

        add one image to a section
        """
        query_string = [('value', 56)]
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/subpage/{id_subpage}/section/{id_section}/images'.format(id_subpage=56, id_section=56),
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
