app.controller('UsersController', ['$scope','usersFactory', function($scope, usersFactory, $location){
  console.log('Loaded User controller')
  $scope.createUser = function(){
    var user = $scope.newUser.name;
    pollsFactory.createUser(user, function(data){
      if(data.errors){
        console.log(data.errors)
      }else{
        pollsFactory.showPolls(function(data){
          console.log(data)
          $scope.newUser = data;
        })
      }
    });
  }
}]);
