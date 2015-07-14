#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'BC Libraries'
SITENAME = u'Boston College University Libraries'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

THEME="themes/bc"

CSS_FILE = 'style.css'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

USE_FOLDER_AS_CATEGORY = True

ARTICLE_URL = '{category}/{date:%Y}/{date:%b}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{date:%Y}/{date:%b}/{slug}/index.html'

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


PLUGIN_PATHS = ['plugins']
PLUGINS = ['custom-scripts']

STATIC_PATHS = [
    'extra/favicon.ico',
]

    #path-specific metadata
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
}