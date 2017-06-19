var arr = [];
arr["name"] = "Sam"
arr["age"] = 12
arr["country"] = "India"
arr["city"] = "Pune"

var queryString = "?"
for(var key in arr){
	queryString += key + "=" + arr[key] + "&" 
}
//Remove the trailing &
queryString = queryString.substring(0,queryString.length - 1)
console.log(queryString);

function add(...numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i]
	}
	console.log("Total: " + sum);
}
add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

function greatest(...numbers) {
	var max;
	if(numbers.length > 0)
		max = numbers[0]
	for (var i = 0; i < numbers.length; i++) {
		if(max && max < numbers[i])
			max = numbers[i]
	}
	console.log("Max: " + max);
}

greatest(1,5,34,324,324,235,2353)
greatest(21,65)
greatest(1,55,83,9,667)
