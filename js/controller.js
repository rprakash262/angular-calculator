(function(){
	var app = angular.module("myModule");

	app.controller("calCtrl", function($scope){
		var input = "";
		var firstInput = "";
		var secondInput = "";
		var operation;
		var result = ""

		$scope.inputNum = function(inputNum) {
			if ($scope.input == undefined) {
				input = String(inputNum);
				$scope.input = input;
			} else {
				input = String($scope.input) + String(inputNum);
				$scope.input = input;
			}
		}

		$scope.add = function() {	
			firstInput = $scope.input;
			$scope.input = "";
			operation = "add";
		}

		$scope.subtract = function() {	
			firstInput = $scope.input;
			$scope.input = "";
			operation = "subtract";
		}

		$scope.multiply = function() {	
			firstInput = $scope.input;
			$scope.input = "";
			operation = "multiply";
		}

		$scope.divide = function() {	
			firstInput = $scope.input;
			$scope.input = "";
			operation = "divide";
		}

		$scope.eval = function() {
			secondInput = $scope.input;

			if(operation == "add") {
				result = Number(firstInput) + Number(secondInput);
				$scope.input = Number(result);
			}

			if(operation == "subtract") {
				result = Number(firstInput) - Number(secondInput);
				$scope.input = Number(result);
			}

			if(operation == "multiply") {
				result = Number(firstInput) * Number(secondInput);
				$scope.input = Number(result);
			}

			if(operation == "divide") {
				result = Number(firstInput) / Number(secondInput);
				$scope.input = Number(result);
			}
		}

		$scope.reset = function() {
			input = "";
			firstInput = "";
			secondInput = "";
			operation;
			result = ""
			$scope.input = "";
		}

		$scope.delete = function() {

			var input1 = String($scope.input);
			input1 = input1.substring(0, input1.length - 1);
			$scope.input = input1;
		}

		$scope.counter = -1;
		$scope.divValue = "";
		$scope.$watch("textVal", function(newVal, oldVal) {
			// console.log("New Value: " + newVal);
			// console.log("Old Value: " + oldVal);
			$scope.counter++;
		})
		$scope.showDiv = function() {
			$scope.divValue = "Value is entered";
		}
		$scope.$watch("divValue", function() {
			console.log("div value changed");
		})
		$scope.randomNum = Math.random();
		document.querySelector("button").addEventListener("click", function() {
			$scope.randomNum = Math.random();
			console.log("button clicked");
		}, false);
	});

})();