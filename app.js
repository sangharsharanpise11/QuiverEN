'use strict';

(function () {
    function init() {
        console.log("in app.js");

        var router = new Router([
            new Route('home', 'QuiverENHome.html', true),            
            new Route('quiverIt', 'QuiverIt.html'),
            // new Route('features', 'features.html'),            
            // new Route('support', 'support.html'),
            // new Route('contact','contact.html'),
            // new Route('package','Package.html')
        ]);
    }
    init();
}());