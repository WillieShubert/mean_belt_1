var app = angular.module('app');

app.factory('PollsFactory', function($http){
  var factory = {};

  factory.showPolls = function(callback){
    $http.get('/polls').then(function(all_polls){
      callback(all_polls.data);
    })
  }
  factory.createPoll = function(newPoll, callback){
    console.log(newPoll);
    $http.post('/polls', newPoll).then(function(created_poll){
      console.log(created_poll);
      console.log('Got back from the server!');
      callback(created_poll);
    })
  }
  return factory;
});
