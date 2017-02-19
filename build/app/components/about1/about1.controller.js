(function() {

    function About1Ctrl(alerting) {
        var about1vm = this;

        about1vm.name = 'about1';
    }

    angular.module('myApp')
        .controller('About1Ctrl', About1Ctrl);
})();

