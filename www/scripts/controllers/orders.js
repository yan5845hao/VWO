/**
 * Created by yanhao on 2015/9/21.
 */
angular.module('VWO')
    .controller('OrderController',['$scope', '$state','$ionicListDelegate','$timeout',
        function($scope, $state,$ionicListDelegate,$timeout){

            $scope.order = function(){
                $state.go('header.orders');
            }

            $scope.address = function(){
                $state.go('header.address');
            }

        }
    ])
    .controller("OrdersController",["$scope","$state",
        function($scope, $state){

            //$scope.order = function(){
            //    $state.go('header.order');
            //}

        }
    ])
;