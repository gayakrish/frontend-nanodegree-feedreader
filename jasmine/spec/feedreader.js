/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions,
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This test checks that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and
         * checks that it has a URL defined and not empty.
         */
         it('each feed has a URL defined and URL is not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });


        /* This test loops through each feed in the allFeeds object and
         * checks that it has a name defined and not empty.
         */
         it('each feed has a name defined and name is not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });


    /* This test suite tests the menu visibility. */
    describe('The menu', function() {

        /* This test checks if the menu element is hidden by default.*/
         it('is hidden by default' , function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* This test checks if the menu changes visibility when the menu
          * icon is clicked. It has two expectations:
          * does the menu display when clicked and does it hide when clicked again.
          */
          it('is displayed or hidden when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* This test suite tests the initial entries after the loadFeed is called */
        /* This test checksthat when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container.*/
    describe('Initial Entries', function() {

       beforeEach(function(done){
            loadFeed(0, done);
        });

        it('has atleast one element with the feed container', function(){
            expect($('.feed').find('.entry-link .entry').length).toBeGreaterThan(0);
        });
    });

    /* This test suite tests the new feeds loaded */

        /* This test checks that when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function(){
        let feedContent1, feedContent2;

        beforeEach(function(done){
            loadFeed(0, function(){
                feedContent1 = $('.feed').html();
                loadFeed(1, function() {
                    feedContent2 = $('.feed').html();
                    done();
                });
            });
        });

        it('has new feed content', function() {
            expect(feedContent1).not.toBe(feedContent2);
        });
    });
}());
