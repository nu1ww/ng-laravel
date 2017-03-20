app.controller('userController', function($scope,$http,$location) {

    $scope.doLogin= function (loginForm) {

        $http({
            method: 'POST',
            url: baseUrl+'auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { email: $scope.login.username,
                password: $scope.login.password}
        }).success(function (response) {

            console.log(response);
            $location.path('/dashboard');

        }).error(function (data,status,header) {
            console.log(data,status,header);
            alert(data);
        });
    }

});
