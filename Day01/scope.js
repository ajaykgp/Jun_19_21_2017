//var is function scoped
//let is block scoped
//const is readonly and block scoped

let string1 = "es6"
string1 = 12.56

var string2 = "var keyword"
string2 = true


function hello(){
	const h = "const variable";
	//h = true
	var a = 10;
	if(a == 10){
		let aString = "hello there";	
	}
	//console.log(aString);
}

//hello()