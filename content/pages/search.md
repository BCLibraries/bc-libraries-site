Title: Searching
Date: 2010-12-03 10:20
Modified: 2010-12-05 19:30
Category: Python
Tags: pelican, publishing
Slug: search
Authors: Alexis Metaireau, Conan Doyle
Summary: Short version for index and feeds
CSS: foo, bar, baz, bib

<div id="block_search">
    <h2>Begin Your Search Here</h2>

    <!-- SOME SEARCH BAR I FOUND -->
    <div id="newsearch" class="row" data-ng-app="myApp" data-ng-controller="AutoComplete">
        <div class="row">
            <div class="col-xs-12">
                <ul id="myTab" class="nav nav-tabs test">
                    <li class="active"><a href="#">All</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Web site</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="input-group input-group-md">
                <div data-searchbox></div>
                    <!-- /btn-group --> <span class="input-group-btn"><button class="btn btn-default"
                                                                              type="submit"><span
                        class="glyphicon glyphicon-search"></span>
                </button></span>
                </div>
            </div>
        </div>
    </div>


<div data-results></div>
