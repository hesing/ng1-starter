(function() {

    function UiCtrl(alerting) {
        var uivm = this;

        uivm.name = 'ui';
    }

    angular.module('myApp')
        .controller('UiCtrl', UiCtrl);
})();

