(function() {

    function DmCtrl($scope, $timeout, alerting, DmService) {
        let dmvm = this;

        dmvm.treeData = new kendo.data.HierarchicalDataSource({
            data: DmService.treeData
        });

        function rejectDrop(e){
            if (e.destinationNode) {
                e.setValid(false);
            } else {
                e.setStatusClass("k-denied");
            }             
        }

        dmvm.onDragOrDrop = function(e) {
            var sourceNode = this.dataItem(e.sourceNode);
            var destinationNode = this.dataItem($(e.dropTarget).closest("[role=treeitem]"));
            if (destinationNode && !destinationNode.hasChildren  && destinationNode.uid != sourceNode.uid) {
                    rejectDrop(e);

            } else if(destinationNode && destinationNode.hasChildren && sourceNode.docType === 'folder'){
                    let targetsRoot = $(e.dropTarget).parentsUntil(".k-treeview", ".k-item").length > 5;
                    if (targetsRoot) {
                        rejectDrop(e); 
                    }
                }
        };

        function makeItem() {
            let txt = kendo.toString(new Date(), "HH:mm:ss");
            return { id: 1, text: txt };
        };

        var toggleTreeView = function(state) {
            dmvm.toggleDocMenu = false
            $scope.tree.element.find(".k-item").each(function() {
                $scope.tree[state]($(this));
            });
        };

        dmvm.expandTreeView = function() {
            toggleTreeView('expand');
        };

        dmvm.collapseTreeView = function() {
            toggleTreeView('collapse');
        };

        dmvm.addAfter = function(item) {
            let array = item.parent();
            let index = array.indexOf(item);
            let newItem = makeItem();
            array.splice(index + 1, 0, newItem);
        };

        dmvm.addBelow = function() {
            // can't get this to work by just modifying the data source
            // therefore we're using tree.append instead.
            let newItem = makeItem();
            $scope.tree.append(newItem, $scope.tree.select());
        };

        dmvm.remove = function(item) {
            let array = item.parent();
            let index = array.indexOf(item);
            array.splice(index, 1);

            dmvm.selectedItem = undefined;

        }

        function setSelectOptions(commonSelectOptions, selectedSelectOptions) {
            dmvm[commonSelectOptions] = {
                dataTextField: "name",
                dataValueField: "id",
                valuePrimitive: false,
                // autoBind: false,
                dataSource: DmService.dataSource
                    // use to add & disable tag items ( prepopulation in select field)
                    // tagTemplate: '#if(data.isParent){#<span class="parentSpan">#:data.name#</span>#}else{#<span>#:data.name#</span>#}#',
                    // dataBound: function(e) {
                    //     let self = this;
                    //     let parentItems = self.wrapper.find(".parentSpan");

                //     $scope.$apply(() => {
                //         dmvm[selectedSelectOptions] = e.sender.dataSource._pristineData.filter((res) => {
                //             return res.isParent;
                //         });
                //     });

                //     $timeout(() => {
                //         let parentItems = self.wrapper.find(".parentSpan");
                //         for (let j = 0; j < parentItems.length; j++) {
                //             $(parentItems[j]).closest('li').addClass('parentTag');
                //         }
                //     });
                // }
            };
        }

        setSelectOptions('industryOptions', 'selectedIndustryOptions');
        setSelectOptions('assuranceOptions', 'selectedAssuranceOptions');
        setSelectOptions('finReportingOptions', 'selectedfinReportingOptions');
    }

    angular.module('myApp')
        .controller('DmCtrl', DmCtrl);
})();
