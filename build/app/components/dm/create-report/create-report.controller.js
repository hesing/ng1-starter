(function() {

	function CreateReportCtrl($scope, $timeout, DmService){
		let createReportVm = this;

        createReportVm.selectOptions = {
            dataTextField: "name",
            dataValueField: "id",
            valuePrimitive: false,
            // autoBind: false,
            dataSource: DmService.dataSource,
            tagTemplate: '#if(data.isParent){#<span class="parentSpan">#:data.name#</span>#}else{#<span>#:data.name#</span>#}#',
            dataBound: function(e) {
                let self = this;
                let parentItems = self.wrapper.find(".parentSpan");

                $timeout(() => {
                    createReportVm.selectedOptions = e.sender.dataSource._pristineData.filter((res) => {
                        return res.isParent;
                    });
                });

                $timeout(() => {
                    let parentItems = self.wrapper.find(".parentSpan");
                    for (let j = 0; j < parentItems.length; j++) {
                        $(parentItems[j]).closest('li').addClass('parentTag');
                    }
                });
            }
        };
	}

    angular.module('myApp')
        .controller('CreateReportCtrl', CreateReportCtrl);
})();
