var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
// Routes to load your partial pages
  $routeProvider
    // when someone enters a url 'localhost:8000/#/new', load the following partial
    .when('/', {templateUrl: './partials/login.html',})
    .when('/create', {templateUrl: './partials/newPoll.html',})
    // when someone enters a url 'localhost:8000/#/edit', load the following partial
    // the _id property will be passed into the $routeParams object
    .when('/poll/:_id', {templateUrl: './../partials/poll.html',})
    .when('/dashboard', {templateUrl: './../partials/dashboard.html',})
    // when someone uses any other route than above, redirectTo the following partial
    .otherwise({redirectTo: '/'});
});
