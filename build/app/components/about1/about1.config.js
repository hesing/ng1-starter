function About1Config($stateProvider) {
  'ngInject';

  $stateProvider
            .state('about1', {
                url: '/about1',
                title: 'About1',
                templateUrl: 'app/components/about1/about1.html',
                controller: 'About1Ctrl as about1vm',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                                name: 'appCss',
                                insertBefore: 'appStyles',
                                files: [
                                    'app/components/about1/about1.css'
                                ]
                            },
                            // {
                            //     name: 'vendors',
                            //     insertBefore: '#vendors',
                            //     files: [

                            //     ]
                            // }, 
                            {
                                name: 'appFiles',
                                insertBefore: '#appScripts',
                                files: [
                                    'app/components/about1/about1.controller.js'
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

export default About1Config;
