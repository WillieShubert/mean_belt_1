var app = angular.module('app');

app.factory('usersFactory', function($http){
  console.log('user factory loaded')
  var factory = {};
  factory.createUser = function(newUser, callback){
    console.log(newUser);
    $http.post('/add_user', newUser).then(function(created_user){
      console.log(created_user);
      console.log('Got back from the server!');
      callback(created_user);
    })
  }
  return factory;
});
