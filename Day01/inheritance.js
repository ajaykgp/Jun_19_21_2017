class Employee{
	constructor(name,salary){
		this.name = name
		this.salary = salary
	}
	work(){
		console.log(`${this.name} is sleeping`);
	}
}
class Manager extends Employee{
	constructor(name,salary,level){
		super(name,salary)
		this.level = level
	}
	work(){
		super.work()
		console.log(`${this.name} is snoring`);
	}
}
var m1 = new Manager("Sam",121212,12)
m1.work()