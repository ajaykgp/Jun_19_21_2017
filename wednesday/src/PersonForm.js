import React, { Component } from 'react';

class PersonForm extends Component {
  constructor(props){
	super(props)
	this.addButtonClicked = this.addButtonClicked.bind(this)
  }
  addButtonClicked(){
	  var name = this.nameTB.value;
	  var age = this.ageTB.value;
	  this.props.addPersonHandler(name,age)
  }
  render() {
    return (
      <div>
			<input type="text" placeholder="Name" ref={(ip) => this.nameTB = ip}/><br/>
			<input type="number" placeholder="Age" ref={(ip) => this.ageTB = ip}/><br/>
			<button type="button" onClick={this.addButtonClicked}>Add</button>
	  </div>
    );
  }
}

export default PersonForm;
