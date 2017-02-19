(function () {

    var alerts = function (alerting) {
        return {
            restrict: "AE",
            templateUrl: "app/common/alert/alert.html",
            scope: true,
            replace: true,
            controller: function ($scope) {
                $scope.removeAlert = function (alert) {
                    alerting.removeAlert(alert);
                };
            },
            link: function (scope) {
                scope.currentAlerts = alerting.currentAlerts;
            }
        };
    };

    angular.module("myApp").directive("alerts", alerts);

})();