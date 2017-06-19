class Car{
	constructor(model,color){
		this.model = model;
		this.color = color;
	}
	drive(miles){
		console.log("Driving " + this.model + " at " + miles + " ph");
	}
}

var c1 = new Car("Merc","White")
c1.drive(150)