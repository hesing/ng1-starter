function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
            .state('about', {
                url: '/about',
                title: 'About',
                templateUrl: 'app/components/about/about.html',
                controller: 'AboutCtrl as aboutvm',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                                name: 'appCss',
                                insertBefore: 'appStyles',
                                files: [
                                    'app/components/about/about.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                insertBefore: '#vendors',
                                files: [

                                ]
                            }, 
                            {
                                name: 'appFiles',
                                insertBefore: '#appScripts',
                                files: [
                                    'app/components/about/about.controller.js'
                                ]
                            }
                            // {
                            //     name: 'breadcrumb',
                            //     insertBefore: '#vendors',
                            //     serie: true,
                            //     files: [
                            //         'app/components/app/common/screenfull/screenfull.js',
                            //         'app/components/app/common/breadcrumb/uiBreadcrumbs.js'
                            //     ]
                            // }
                        ]);
                    }
                }
            });

};

export default AboutConfig;
