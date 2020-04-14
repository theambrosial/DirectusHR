from .settings import *

DEBUG = True
ALLOWED_HOSTS = ['*']

DATABASES = {
 'default': {
     'ENGINE': 'django.db.backends.postgresql',
     'NAME': 'DHR_db',
     'USER': 'postgres',
     'PASSWORD': 'vikas123',
     'HOST': '127.0.0.1',
     'PORT': '5432',
 }
}