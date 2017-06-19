function Car(theModel,theColor) {
	this.model = theModel;
	this.color = theColor;
	this.drive = function(miles){
		console.log("Driving " + this.model + " at " + miles + "kmph");
	}
}

var c1 = new Car("BMW","Black")
console.log(c1.model + " " + c1.color)
c1.drive(20);

var c2 = new Car("Santro","Blue")
console.log(c2.model + " " + c2.color)
c2.drive(8)