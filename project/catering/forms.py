from django.forms import ModelForm
from .models import FeedBack


class FeedbackForm(ModelForm):
    class Meta:
        model = FeedBack
        exclude = ['date']
        labels = {
            'usr_name': 'Ваше имя',
            'email': 'Адрес электронной почты',
            'message': 'Ваш отзыв'
        }
