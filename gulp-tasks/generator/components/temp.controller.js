(function() {

    function <%= upCaseName %>Ctrl(alerting) {
        var <%= name %>vm = this;

        <%= name %>vm.name = '<%= name %>';
    }

    angular.module('myApp')
        .controller('<%= upCaseName %>Ctrl', <%= upCaseName %>Ctrl);
})();

