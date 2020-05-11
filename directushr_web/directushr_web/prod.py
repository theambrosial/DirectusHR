from .settings import *

DEBUG = False
ALLOWED_HOSTS = []
DATABASES = {

       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'vikka$DHR_db',
           'USER': 'vikka',
           'PASSWORD': '',
           'HOST': 'vikka.mysql.pythonanywhere-services.com',
           'PORT': '3306',
    'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",

       }

}

