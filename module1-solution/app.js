(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
 
  $scope.lunchChecker = function () {
    var count = noOfItems($scope.items);
    $scope.message = sayMessage(count);
  };

  function noOfItems(items) {
    var count = 0;
    if(items) {
      var array = items.split(',');
      for (var i in array) {
        if(array[i].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  };

  function sayMessage(count) {
    if (count == 0) {
      return 'Number of items cannot be blank. Please enter Dishes';
    }
    else if (count <= 3) {
      return 'Enjoy!';
    }
    else {
      return 'Too Much!';
    }
  }
}
})();
