var name = "Ram"
var age = 12

var oldPerson = {
    name: name,
    age: age,
    eat: function(){
        //bla bla
    }
}
var person = {
    name,
    age,
    eat(){
        console.log(this.name + " is eating")
    }
}
person.eat()