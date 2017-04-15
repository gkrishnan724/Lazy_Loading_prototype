/**
 * Created by gopal on 14/4/17.
 */
angular.module('MyModule').controller('View2Controller',function($scope,$log){
    $log.info('View2Controller Initialized');
    $scope.Myskills = ['HTML','CSS','Bootstrap','Materialize','AngularJS'];
});