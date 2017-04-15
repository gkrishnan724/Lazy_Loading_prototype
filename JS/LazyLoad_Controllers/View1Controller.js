/**
 * Created by gopal on 14/4/17.
 */
angular.module('MyModule').controller('View1Controller',function($scope,$log,$http) {
    $log.info('View1Controller Initialized');
    $scope.Display = function (user) {
        $scope.Loading = 1;
        $http.get("http://api.github.com/users/" + user)
            .then(function (response) {
                $scope.Loading = 0;
                $scope.Data = response.data;
                $scope.bio = $scope.Data.bio;
                $scope.avatar = $scope.Data.avatar_url;
                console.log($scope.Data);
            })
    }
});