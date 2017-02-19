(function() {

	function DocPropertyCtrl($scope, $timeout, DmService, $stateParams){
		let docPropertyVm = this;

        docPropertyVm.selectedDoc = DmService.getDocData(+$stateParams.id);

        docPropertyVm.selectOptions = {
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
                    docPropertyVm.selectedOptions = e.sender.dataSource._pristineData.filter((res) => {
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
        .controller('DocPropertyCtrl', DocPropertyCtrl);
})();
