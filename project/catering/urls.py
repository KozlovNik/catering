# -*- coding: utf-8 -*-
from django.conf.urls import url
from catering import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^contacts/$', views.contacts, name='contacts'),
    url(r'^business-lunch/$', views.business_lunch, name='business-lunch'),
    url(r'^delivery/$', views.delivery, name='delivery'),
    url(r'^banquet/$', views.banquet, name='banquet'),
    url(r'^discounts/$', views.discounts, name='discounts'),
    url(r'^feedback/$', views.feedback, name='feedback'),
]
