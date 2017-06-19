var arr1 = [];
var arr2 = [1,2,3,45,"hello",true]

for (var i = 0; i < arr2.length; i++) {
	console.log(arr2[i])
}

var capitals = [];

capitals["India"] = "New Delhi";
capitals["USA"] = "Washington DC"
capitals["SL"] = "Colombo"


for(var key in capitals){
	console.log(key + ": " + capitals[key]);
}
