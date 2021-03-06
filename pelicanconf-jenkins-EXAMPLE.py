#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'BC Libraries'
SITENAME = u'Boston College Libraries'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

THEME = "themes/bc"

CSS_FILE = 'style.css'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

CACHE_CONTENT = True
CONTENT_CACHING_LAYER = 'reader'
LOAD_CONTENT_CACHE = True

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
# RELATIVE_URLS = True


PLUGIN_PATHS = ['plugins']
PLUGINS = ['sitemap', ]

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.3,
        'indexes': 0.5,
        'pages': 0.9
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'daily'
    }
}
WITH_FUTURE_DATES = False

STATIC_PATHS = [
    'extra/favicon.ico',
]

# path-specific metadata
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

DIRECT_TEMPLATES = (('index', 'news/index',
                     'exhibits/index', 'exhibits/burns/index', 'exhibits/backwall/index', 'exhibits/bapst/index',
                     'exhibits/lvl1/index',
                     'exhibits/lvl3/index', 'exhibits/lobby/index', 'exhibits/reading/index', 'exhibits/stokes/index',
                     'exhibits/tiponeill/index', 'exhibits/tml/index', 'exhibits/virtual/index',
                     'exhibits/spaces/index',
                     'facpub/index', 'facpub/contact/index', 'facpub/mailer/index', 'newsletter/index', 'search/index',
                     'feedback/index'))

# PAGINATED_DIRECT_TEMPLATES = (('index', 'news/index', 'exhibits/index', 'facpub/index', 'facpub/contact/index', 'facpub/mailer/index', 'newsletter/index' ))#

TEMPLATE_PAGES = {
    'facpub/index.html': 'facpub/index.html',
    'facpub/contact/index.html': 'facpub/contact/index.html'
}


def has_category(articles_list, list):
    """
    Filter out articles with categories not in list

    ex. articles | has_category(['news','announcements'])

    :param articles_list:
    :param list:
    :return: list:
    """
    return [article for article in articles_list if article.category.name in list]


def has_year(articles_list, year):
    """
    Filter out articles not from year

    ex. articles | has_year('2015')

    :param articles_list:
    :param year:
    :return: list:
    """
    return [article for article in articles_list if article.date.strftime('%Y') == year]


def not_oneoff(articles_list):
    """
    Filter out articles that are one-offs

    ex. articles | not_oneoff

    :param articles_list:
    :return:
    """
    return [article for article in articles_list if not (hasattr(article, 'oneoff')) or article.oneoff != 'yes']


def most_recent_news(articles_list, count):
    news_articles = [a for a in articles_list if a.category.name == 'news' and is_not_expired(a)][:count]
    for a in news_articles:
        if not a.destination:
            a.destination = a.url
    return news_articles

def current_stories(articles_list, count):
    return [a for a in articles_list if a.category.name == 'stories' and is_not_expired(a)][:count]

def current_facpubs(articles_list, count):
    return [a for a in articles_list if a.category.name == 'facpub' and is_not_oneoff(a)][:count]

def is_not_expired(article):
    return not (hasattr(article, 'expired')) or article.expired != 'yes'

def is_not_oneoff(article):
    return not (hasattr(article, 'oneoff')) or article.oneoff == 'no'



# These are filters we can use in templates
JINJA_FILTERS = {
    'has_category': has_category,
    'has_year': has_year,
    'not_oneoff': not_oneoff,
    'most_recent_news': most_recent_news,
    'current_stories': current_stories,
    'current_facpubs': current_facpubs
}

# Custom build variables
LOCAL_BUILD = False
JENKINS_BUILD = True