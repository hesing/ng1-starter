(function() {

    function FsaCtrl($http, alerting, $timeout, FsaService) {
        var fsavm = this;

        fsavm.mainGridOptions = {
            dataSource: FsaService.dataSource,
            // pageable: true,
            // height: 550,
            // toolbar: ["create"],
            columns: [
                { field: 'DisplayId', width: 100, title: 'Title', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'Code', width: 90, title: 'Code', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'Title', width: 160, title: 'Id', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'Type', width: 115, title: 'Type', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'Classification', width: 115, title: 'Classification', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'Sign', width: 115, title: 'Sign', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'IsEnabled', width: 80, title: 'In Use', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'IsMandatory', width: 80, title: 'Mandatory', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'DefaultAssertion', width: 120, title: 'Default Assertions', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'MandatoryAssertion', width: 120, title: 'Mandatory Assertions', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'Cycles', width: 400, title: 'Cycles', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { field: 'ScopeTags', width: 400, title: 'Scope', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} },
                { commandName: 'edit', width: 60, title: 'Title', headAttrNonBindableValue: true, headerAttributes: {class: 'text-uppercase'} }
            ],
            editable: { createAt: "top" }
        };

        fsavm.title = "Home - I am from home controller";
        alerting.addAlert('info', 'Home controller loaded');

        fsavm.save = function() {
            console.log("Save called");

            // $timeout(function(){
            //     fsavm.isBtnDisabled = false;
            // }, 10000); // 10sec
            $http.get('https://reqres.in/api/users?delay=10')
                .then((res) => {
                    console.log(res);
                    fsavm.isBtnDisabled = false;
                });
        };

        fsavm.addRow = function() {
            console.log("Add row called");
        };

        console.log(FsaService);
    }

    angular.module("myApp")
        .controller('FsaCtrl', FsaCtrl);
})();
