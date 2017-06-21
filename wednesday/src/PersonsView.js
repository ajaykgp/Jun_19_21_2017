import React, { Component } from 'react';

class PersonsView extends Component {
  constructor(props){
	super(props)
	this.removeButtonClicked = this.removeButtonClicked.bind(this)
  }
  removeButtonClicked(){
  	this.props.removeButtonHandler()
  }
  checkboxChanged(person){
  	this.props.markPersonForRemovalHandler(person.name)
  }
  getRows(){
	  var self = this
	  var rows = [];
	  this.props.persons.forEach((person) => {
		  var row = <tr key={`row_ ${person.name}`}>
		  	<td>{person.name}</td>
			<td>{person.age}</td>
		  	<td><input type="checkbox" onChange={self.checkboxChanged.bind(self,person)}/></td>
		  </tr>;
		  rows.push(row)
	  })
	  return rows;
  }
  render() {
	  if(this.props.persons.length > 0)
		  return (
			<div style={{textAlign:"center"}}>  
			<table>
				<tbody>
					{this.getRows()}
				</tbody>
			</table>
			<br/>
			<button type="button" onClick={this.removeButtonClicked}>Remove</button>				
			</div>		
		 );
	  else
		  return <div></div>  
  }
}

export default PersonsView;
