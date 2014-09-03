# -*- coding: utf-8 -*-
"""
Get CSS and Javascript lists for Pelican
========================================

Add CSS and Javascript lists on a page-by-page or article-by-article basis in Pelican. Stolen almost wholesale
from https://github.com/wrobstory/pelican_dynamic!
"""
from pelican import signals


def format_resource(gen, metadata_string):
    return metadata_string.replace(" ", "").split(',')


def get_metadata(page_generator, metadata):
    if 'scripts' in metadata.keys():
        metadata['scriptlist'] = format_resource(page_generator, metadata['scripts'])
    if 'css' in metadata.keys():
        metadata['csslist'] = format_resource(page_generator, metadata['css'])


def register():
    signals.page_generator_context.connect(get_metadata)
    signals.article_generator_context.connect(get_metadata)