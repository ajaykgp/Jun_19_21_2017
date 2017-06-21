import $ from "jquery";

import React, { Component } from 'react';

class PersonForm extends Component {
  constructor(props){
	super(props)
	this.addButtonClicked = this.addButtonClicked.bind(this)
	this.state = {
	  countries: []
  	}
  }
  componentDidMount(){
	  var self = this
	  if(this.state.countries.length == 0){
	  	$.ajax({
	  		url : "/data.json",
			dataType: "json",
			method: "GET",
			success(response){
				self.setState({
					countries: response.countries
				})
			}
	  	})
	  }
  }
  addButtonClicked(){
	  var name = this.nameTB.value;
	  var age = this.ageTB.value;
	  this.props.addPersonHandler(name,age)
  }
  getCountries(){
	  var countries = this.state.countries;
	  var options = [];
	  if(countries.length > 0){
	  	countries.forEach((country) => {
	  		var option = <option>{country}</option> 
			options.push(option)
	  	})
	  }
	  return options;
  }
  render() {
    return (
      <div>
			<input type="text" placeholder="Name" ref={(ip) => this.nameTB = ip}/><br/>
			<input type="number" placeholder="Age" ref={(ip) => this.ageTB = ip}/><br/>
			<select>
				<option>COUNTRY</option>
				{this.getCountries()}
			</select>
			<br/>
			<button type="button" onClick={this.addButtonClicked}>Add</button>
	  </div>
    );
  }
}

export default PersonForm;
