/**
 * Created by yanhao on 2015/9/19.
 */
angular.module('VWO')
    .controller('ProductsController',['$scope', '$state','$ionicListDelegate','$timeout',
        function($scope, $state,$ionicListDelegate,$timeout){

            $scope.detail = function(){
                $state.go('header.detail');
            }

        }
    ])
    .controller("DetailController",["$scope","$state",
        function($scope, $state){

            $scope.order = function(){
                $state.go('header.order');
            }

        }
    ])
    ;

