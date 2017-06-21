import React, { Component } from 'react';
import PersonForm from './PersonForm';
import PersonsView from './PersonsView';


class App extends Component {
  constructor(props){
	super(props)
	this.state = {
		persons: []
	}
	this.addPerson = this.addPerson.bind(this)
	this.removePersons = this.removePersons.bind(this)
	this.markPersonForRemoval = this.markPersonForRemoval.bind(this)		
  }
  markPersonForRemoval(name){
  	var persons = this.state.persons
	var person = persons.find((item) => item.name == name)  
	person.markedForRemoval =  !person.markedForRemoval
	this.setState({
		persons
	})  
  }
  removePersons(){
  	var persons = this.state.persons
	var personsToBeRetained = 
	  	persons.filter((item) => item.markedForRemoval == false)  
	this.setState({
		persons: personsToBeRetained
	})  
  }
  addPerson(name,age){
  	var persons = this.state.persons
	if(persons.find((item) => item.name == name) == undefined){
		var markedForRemoval = false  
		persons.push({name,age,markedForRemoval})
		this.setState({persons})   
	} 
  }		
  render() {
    return (
      <div style={{textAlign:"center"}}>
			<h1 style={{textAlign:"center",marginTop:"10px"}}>Lab 01</h1>
			<hr/>
			<PersonForm  addPersonHandler={this.addPerson}></PersonForm>
			<hr/>
			<PersonsView
			 	markPersonForRemovalHandler={this.markPersonForRemoval}
				removeButtonHandler={this.removePersons} persons={this.state.persons}></PersonsView>
	  </div>
    );
  }
}

export default App;
