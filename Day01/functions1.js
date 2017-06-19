//Function Hoisting
eat();
eat("Roti")
eat("Roti","Rice",2,"ice creams")

sleep(12);
sleep("all the time")
sleep(24,7,365,"days")
sleep(false)


function eat(){
	return "time for lunch"
}


function sleep(hours) {
	console.log("Sleeping " + hours + " hours");
}
