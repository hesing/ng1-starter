(function() {

    function MydemoCtrl(alerting) {
        var mydemovm = this;

        mydemovm.name = 'Hemant Kumar singh';
    }

    angular.module('myApp')
        .controller('MydemoCtrl', MydemoCtrl);
})();

