# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class FeedBack(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    usr_name = models.CharField(max_length=40)
    email = models.EmailField(max_length=50)
    message = models.TextField()
