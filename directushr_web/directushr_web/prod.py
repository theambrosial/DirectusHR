from .settings import *

DEBUG = False
ALLOWED_HOSTS = []
DATABASES = {

       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'lndscpd_dev',
           'USER': 'harpatel',
           'PASSWORD': 'harpatel123',
           'HOST': 'lddbinstance.cyif2hgx4jxv.ap-south-1.rds.amazonaws.com',
           'PORT': '5441',

       }

}

