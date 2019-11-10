# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class FeedBack(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    usr_name = models.CharField(max_length=40)
    email = models.EmailField(max_length=50)
    message = models.TextField(max_length=1500)

    def __unicode__(self):
        return "Отзыв № {}".format(self.id)

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class SubCategory(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name = "Подкатегория"
        verbose_name_plural = "Подкатегории"


class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.CharField(max_length=400, blank=True, null=True)
    price = models.IntegerField()
    quantity = models.CharField(max_length=50)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name = "Блюдо"
        verbose_name_plural = "Блюда"
