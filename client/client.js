vat app = angular.module('app',[]);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){
  $scope.cat = {};
  $scope.cats = [];
  var fetchCats = function(){
    return $http.get('/cats').then(function(respose){
      if(response.status !== 200){
        throw new Error('failed to fetch cats from the API');
      }
      $scope.cat = {};
      $scope.cats = response.data;
      return response.data;
    })
  };
  $scope.add = function(cat){
    return $http.post('/add', cat).then(fetchCats());
  };
  fetchCats();
}]);
