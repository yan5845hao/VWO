/**
 * Created by yanhao on 2015/9/19.
 */
angular.module('VWO',
    [
        'ionic'
    ])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider

            .state('header',{
                url: "/header",
                templateUrl: "templates/header/default.html"
            })

            .state('header.main',{
                url: "/main",
                templateUrl: "templates/product/list.html",
                controller:"ProductsController"
            })
            .state('header.detail',{
                url: "/detail",
                templateUrl: "templates/product/detail.html",
                controller:"DetailController"
            })
            .state('header.order',{
                url: "/order",
                templateUrl: "templates/order/order.html",
                controller:"OrderController"
            })
            .state('header.orders',{
                url: "/orders",
                templateUrl: "templates/order/list.html"
            })
            .state('header.addressSave',{
                url: "/address/save",
                templateUrl: "templates/address/save.html"
            })
            .state('header.address',{
                url: "/address",
                templateUrl: "templates/address/list.html",
                controller:"AddressController"
            })
            .state('main',{
                url: "/main",
                templateUrl: "templates/product/list.html"
            })

        $urlRouterProvider.otherwise('/header/main');
    });
