#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'BC Libraries'
SITENAME = u'Boston College Libraries'
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

DEFAULT_PAGINATION = 00

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


PLUGIN_PATHS = ['plugins']
PLUGINS = []

WITH_FUTURE_DATES = False

STATIC_PATHS = [
    'extra/favicon.ico',
]

    #path-specific metadata
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

DIRECT_TEMPLATES = (('index', 'news/index', 
					'exhibits/index', 'exhibits/burns/index', 'exhibits/backwall/index', 'exhibits/bapst/index', 'exhibits/lvl1/index',
					'exhibits/lvl3/index', 'exhibits/lobby/index', 'exhibits/reading/index', 'exhibits/stokes/index', 
					'exhibits/tiponeill/index', 'exhibits/tml/index', 'exhibits/virtual/index', 'exhibits/spaces/index',
					'facpub/index', 'facpub/contact/index', 'facpub/mailer/index', 'newsletter/index' ))

#PAGINATED_DIRECT_TEMPLATES = (('index', 'news/index', 'exhibits/index', 'facpub/index', 'facpub/contact/index', 'facpub/mailer/index', 'newsletter/index' ))#

TEMPLATE_PAGES = {
	'facpub/index.html': 'facpub/index.html',
	'facpub/contact/index.html': 'facpub/contact/index.html'
}