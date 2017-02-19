angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true
        });

        $stateProvider
            .state('home', {
                url: '/',
                title: 'Home',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                                name: 'appCss',
                                insertBefore: 'appStyles',
                                files: [
                                    'app/components/home/home.css'
                                ]
                            },
                            // {
                            //     name: 'vendors',
                            //     insertBefore: '#vendors',
                            //     files: [
                            //         'app/components/app/common/pagination/paginate.js',
                            //         'app/components/app/common/clipboard/angular-clipboard.js',

                            //     ]
                            // }, 
                            {
                                name: 'appFiles',
                                insertBefore: '#appScripts',
                                files: [
                                    'app/components/home/HomeCtrl.js'
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
            })
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
                                name: 'appFiles',
                                insertBefore: '#appScripts',
                                files: [
                                    'app/components/about/about.controller.js',
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
            })
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

        $urlRouterProvider.otherwise('home');
    });
