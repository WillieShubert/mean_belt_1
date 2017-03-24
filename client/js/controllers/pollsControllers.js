var app = angular.module('app');

app.controller('pollsController',['pollsController', function(pollsFactory, $scope, $location){
  console.log('PollsController loaded');

  $scope.polls = [];

  pollsFactory.showPolls(function(data){
    console.log(data);
    $scope.polls = data;
  })
  $scope.createPoll = function(){
    var poll = $scope.newPoll;
    pollsFactory.createPoll(poll, function(data){
      if(data.errors){
        console.log(data.errors)
      }else{
        pollsFactory.showPolls(function(data){
          $scope.polls = data;
        })
      }
    });
  }
}]);
