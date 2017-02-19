(function() {

    function DmContextMenuCtrl(){
      var dmContextMenuVm = this;
      dmContextMenuVm.name = "Hemanna  aaaa";
    } 

    var dmContextMenu = {
        templateUrl: 'app/components/dm/context-menu/context-menu.html',
        controller: DmContextMenuCtrl,
        controllerAs: 'dmContextMenuVm'
      };

    angular.module('myApp')
        .component('dmContextMenu', dmContextMenu)
        .controller('DmContextMenuCtrl', DmContextMenuCtrl);
})();
