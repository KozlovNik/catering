# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import FeedBack, MenuItem, Category, SubCategory
from django.contrib import admin

admin.site.register(FeedBack)
admin.site.register(MenuItem)
admin.site.register(Category)
admin.site.register(SubCategory)
