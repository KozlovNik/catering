# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import FeedBack, Category, SubCategory, MenuItem
from .forms import FeedbackForm
from django.shortcuts import render


def index(request):
    return render(request, 'catering/index.html')


def contacts(request):
    return render(request, 'catering/contacts.html')


def business_lunch(request):
    return render(request, 'catering/business_lunch.html')


def delivery(request):
    return render(request, 'catering/delivery.html')


def banquet(request):
    return render(request, 'catering/banquet.html')


def discounts(request):
    return render(request, 'catering/discounts.html')


def menu(request):
    categories = Category.objects.all()
    context = {
        'categories': categories,
    }
    return render(request, 'catering/menu.html', context)


def feedback(request):
    form = FeedbackForm(request.POST or None)
    if form.is_valid():
        form.save()
    messages = FeedBack.objects.all().order_by('-date')[:5]
    context = {
        'form': form,
        'messages': messages,
    }
    return render(request, 'catering/feedback.html', context)
