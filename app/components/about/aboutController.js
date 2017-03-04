'use strict';

AboutController.$inject = ['$scope', 'dataService'];

function AboutController($scope, dataService) {
    $scope.currentState = "about-controller";
    dataService.getDetails().then(function (res) {
        $scope.text = res.data;
    }, function (error) {
        $scope.error = error;
    });

    $scope.fruits = [
      { name: 'apple',    selected: true },
      { name: 'orange',   selected: false },
      { name: 'pear',     selected: true },
      { name: 'naartjie', selected: false }
    ];
    
    // selected fruits
    $scope.selection = [];
    
    // helper method
    $scope.selectedFruits = function selectedFruits() {
      return filterFilter($scope.fruits, { selected: true });
    };
    
    // watch fruits for changes
    $scope.$watch('fruits|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (fruit) {
        return fruit.name;
      });
    }, true);
}
module.exports = AboutController;
