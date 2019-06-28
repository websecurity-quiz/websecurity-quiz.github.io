(function(document) {
    'use strict';
    var app = document.querySelector('#app');

    // Sets app default base URL
    app.baseUrl = '/';

    app.displayInstalledToast = function() {
        // Check to make sure caching is actually enabled—it won't be in the dev environment.
        if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
            Polymer.dom(document).querySelector('#caching-complete').show();
        }
    };

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {
        console.log('Our app is ready to rock!');
    });

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
    });



    // Scroll page to top and expand header
    app.scrollPageToTop = function() {
        // app.$.headerPanelMain.scrollToTop(true);
    };

    app.reset = function() {
        app.exam = exam.sort(function() {
            return 0.5 - Math.random();
        }).slice(0, 7);
        var examUI = Polymer.dom(document).querySelector('exam-view');
        if (examUI) {
            examUI.reset();
        }
    }
    app.reset();
})(document);
