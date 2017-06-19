function work(...args){
	console.log(args);
	for(var i=0;i<args.length;i++){
		console.log(args[i]);
	}
}
/*
function work(){
	console.log(arguments);
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
*/

work("Eating");
work(24,7);
work(false)