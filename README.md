# Project Overview

This project is aimed at testing the web-based application that reads RSS feeds, using the [Jasmine](http://jasmine.github.io/) framework.

## How to run the tests

1. Download the zip file using the 'Clone' or 'Download' option in https://github.com/gayakrish/frontend-nanodegree-feedreader
2. Extract the zip files and open index.html in the browser
3. After the feeds are loaded, at the bottom of the page you will be able to see the results of the test cases run in Jasmine

## Test cases
1. To test that 'allFeeds' is defined and not empty
2. To test that each feed in the `allFeeds` object has a URL defined and that the URL is not empty.
3. To test that each feed in the `allFeeds` object and has a name defined and that the name is not empty.
4. To test that the Menu element is hidden by default.
5. To test that the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
6. To test that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
7. To test that when a new feed is loaded by the `loadFeed` function that the content actually changes.
