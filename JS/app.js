var app = angular.module('MyModule',["ngRoute","oc.lazyLoad"]);

app.config(['$routeProvider','$ocLazyLoadProvider',
    function($routeProvider,$ocLazyLoadProvider){

        $ocLazyLoadProvider.config({
           debug: true
        });

        $routeProvider
            .when('/view1',{
                templateUrl: 'Templates/view1.html',
                controller: 'View1Controller',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('JS/LazyLoad_Controllers/View1Controller.js');
                    }]
                }
            })
            .when('/view2',{
                templateUrl: 'Templates/view2.html',
                controller: 'View2Controller',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('JS/LazyLoad_Controllers/View2Controller.js');
                    }]
                }
            })
            .otherwise({
                redirectTo: '/view1'
            })

}]);

angular.module('MyModule').controller('Main',function($scope,$log,$location){
    $log.info('MainController Initialized');
    $scope.path = $location.path() === '/view1'?'view1':'view2';
    console.log($scope.path);
});
