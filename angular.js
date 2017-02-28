angular.module('ngRepeat',[]).controller('repeatController', function($scope) {
  $scope.people = [
    {name:'John', age:25},
    {name:'Jessie', age:30},
    {name:'Johanna', age:28},
    {name:'Joy', age:15},
    {name:'Mary', age:28},
    {name:'Peter', age:95},
    {name:'Sebastian', age:50},
    {name:'Erika', age:27},
    {name:'Patrick', age:40},
    {name:'Samantha', age:60}
  ];
});