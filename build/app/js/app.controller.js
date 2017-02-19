(function(){
    function AppCtrl(){
        var appvm = this;
        appvm.scrollbarConfig = {
                autoHideScrollbar: true,
                // autoDraggerLength: false,
                // setHeight: 'calc(100% - 100px)',
                // setWidth: '280px',
                // setWidth: '390px',
                scrollInertia: 500,
                axis: 'y',
                theme: 'minimal-dark',
                scrollButtons: {
                    scrollAmount: 'auto',
                    enable: true
                }
            };

        appvm.scrollbarConfigContent = Object.create(appvm.scrollbarConfig);
        appvm.scrollbarConfigContent.setHeight = 'calc(100% - 40px)';
    }
    
    angular.module('myApp')
        .controller("AppCtrl", AppCtrl);
})();