/**
 * Created by yanhao on 2015/9/21.
 */
angular.module('VWO')
    .controller('AddressController',['$scope', '$state','$ionicListDelegate','$timeout',
        function($scope, $state,$ionicListDelegate,$timeout){

            $scope.save = function(){
                $state.go('header.addressSave');
            }

        }
    ])
    .controller("AddressSaveController",["$scope","$state",
        function($scope, $state){

            //$scope.order = function(){
            //    $state.go('header.order');
            //}

        }
    ])
;