(function() {

    function AboutCtrl(alerting) {
        var aboutvm = this;

        aboutvm.name = 'about';
    }

    angular.module('myApp')
        .controller('AboutCtrl', AboutCtrl);
})();

