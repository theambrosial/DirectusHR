import json
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ai3kc4tv%)fk=*467-m!1^iuc)7q@ybj)@a#gz(j%_z#=jm8pi'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'rest_framework.authtoken',
    'user_app',
    'client_app',
    'crm_app',
    'candidate_app',
    'recruiter_app',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'directushr_web.urls'
AUTH_USER_MODEL = 'user_app.SiteUser'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'react-ui', 'build')],     #change
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'directushr_web.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
 'default': {
     'ENGINE': 'django.db.backends.postgresql',
     'NAME': 'DHR_db',
     'USER': 'yash',
     'PASSWORD': 'vikas123',
     'HOST': '127.0.0.1',
     'PORT': '5432',
 }
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

REACT_BUILD_DIR = os.path.join(BASE_DIR, 'react-ui', 'build')


# path = os.path.join(REACT_BUILD_DIR, "asset-manifest.json")
# with open(path) as f:
#     data = json.load(f)
#
# files_list=[]
# js_file_1 = os.path.join(BASE_DIR, "static_local","js","mainreact-django.normal-chunk.js")
# js_file_2 = os.path.join(BASE_DIR, "static_local","js","2react-django.normal-chunk.js")
# js_file_3 = os.path.join(BASE_DIR, "static_local","js","react-django.ui.js")
# css_file_1 = os.path.join(BASE_DIR, "static_local","css","2react-django.chunk.css")
# css_file_2 = os.path.join(BASE_DIR, "static_local","css","mainreact-django.chunk.css")
# files_list.append(js_file_1)
# files_list.append(js_file_2)
# files_list.append(js_file_3)
# files_list.append(css_file_1)
# files_list.append(css_file_2)
#
# content_list = []
# for item in data['files']:
#     content_list.append(item)
#
# for item_file in files_list:
#
#     with open(item_file , 'r',encoding="utf-8") as file :
#         filedata = file.read()
#
#     # Replace the target string
#     for it in content_list:
#         filedata = filedata.replace(data['files'].get(it)[1:], it.replace('/media/','/img/'))
#
#     # Write the file out again
#     with open(item_file, 'w',encoding="utf-8") as file:
#         file.write(filedata)



STATIC_URL = '/static/'
STATICFILES_DIRS = [
    # os.path.join(BASE_DIR, "static_local"),   #old
    os.path.join(BASE_DIR, "react-ui", "build", "static"),    #change

]
STATIC_ROOT = os.path.join(BASE_DIR, "static_cdn", "static_root")

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "static_cdn", "media_root")

CORS_URLS_REGEX = r'^/api.*'
CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_WHITELIST = (
    '*',
    'your-domain.com',
    'your-bucket-here.s3-us-west-2.amazonaws.com',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
}




EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
# EMAIL_HOST_USER = 'harshkumarpathak01@gmail.com'
# EMAIL_HOST_PASSWORD = 'ipv6netuser'

EMAIL_HOST_USER = 'mailtest.dhr@gmail.com'
EMAIL_HOST_PASSWORD = 'dhr@@101'
