//onClick={doSomething}
var eat = function(){
	console.log("Eating");
}
eat()

//Higher order function
function doSomething(arg){
	arg();
}
doSomething(eat); 
//doSomething(eat());
doSomething(sleep);

function sleep(){
	console.log("Sleeping");
}
