# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from photo_portfolio.test import BaseTestCase


class TestSessionController(BaseTestCase):
    """SessionController integration test stubs"""

    def test_get_session(self):
        """Test case for get_session

        login to admin panel
        """
        headers = [('login', 'login_example'),
                   ('pasword', 'pasword_example')]
        response = self.client.open(
            '/MATEUSZTEPLICKI/foto_portfolio_project/1.0.0/session',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
