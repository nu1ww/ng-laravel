<!doctype html>
<html ng-app="myApp">
<head>
    <title>Test App</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-cookies.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-route.js"></script>
    <script> var baseUrl="{{url('/')}}/";   </script>
    <script src="js/app.js"></script>

    {{--App Controllers --}}
    <script src="js/model.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/controllers/globalController.js"></script>


</head>
<body ng-controller="globalController">


<div ng-view></div>
</body>
</html>
