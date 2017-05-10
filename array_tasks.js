var arrayTasks = {

	concat: function (arr1, arr2) {
		for (var item of arr2){
			arr1.push(item);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squared_array = [];

		for (var item of arr){
			squared_array.push(item * item);
		}

		return squared_array;
	},

	sum: function (arr) {
		total = 0;

		for (var item of arr){
			total += item;
		}	
		return total;
	},

	findDuplicates: function (arr) {
		
		var duplicates = [];
		var duplicate_duplicates = [];
		var numbers = [];

		for (var item of arr){
			if (duplicates.includes(item)){
				duplicate_duplicates.push(item);
			}
			else if (numbers.includes(item)){
				duplicates.push(item);
				console.log("Logging duplicated: ", item);
			}
			else{
				numbers.push(item);
				console.log("Logging nums: ", item);
			}
		}
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		
		var numbers = [];

		for (var item of arr)
			if (item  !== valueToRemove){
				numbers.push(item)
			}
			return numbers;
		},

		findIndexesOf: function (arr, itemToFind) {
			var indexList = [];

			for (var item of arr){
				if (item === itemToFind){
					var index = arr.indexOf(item);
				}

				while (~index) {
					indexList.push(index);
					index = arr.indexOf(item, index + 1);
				}
				return indexList;
			}
		},

			sumOfAllEvenNumbersSquared: function (arr) {
				var total = 0;

				for (var item of arr){
					if (item % 2 == 0) {
						total += (item * item);
					}
				}

				return total;
			}


	}

	module.exports = arrayTasks
