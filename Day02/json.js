var person = new Object()
person.name = "Sam"
person.age = 12
person.eat = function(){
    console.log(this.name + " is eating")
}

var person2 = {
    name: "Sam",
    age : 12,
    eat: function(){
      console.log(this.name + " is eating")  
    }
}
console.log(person2.name)
