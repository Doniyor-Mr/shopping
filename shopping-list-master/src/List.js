import React from "react";
import "./List.css"

export class List extends React.Component {
  	render() {		
    	return (
			<div>
      			<ul id="groceries">
        			{this.props.items.map(item => (
          				<ShoppingItems key={item.id} id={item.id} text={item.text} completed={item.done} onItemCheckedOff={this.props.onItemCheckedOff} onDeleteItem={this.props.onDeleteItem} />
        			))}
      			</ul>
			</div>
    	);
  	}
}

class ShoppingItems extends React.Component {
	
  	constructor(props) {
    	super(props);
		//bind funtions to component
    	this.checkOffItem = this.checkOffItem.bind(this);
    	this.deleteItem = this.deleteItem.bind(this);
  	}
	
  	checkOffItem (event) {
    	this.props.onItemCheckedOff(this.props.id);
  	}
	
  	deleteItem(event) {
    	this.props.onDeleteItem(this.props.id);
  	}
	
  	render() {
    	var itemClass = "groceryItem" + (this.props.completed ? "done" : "undone");
    	return (
      		<li className={itemClass} ref={li => this._listItem = li }>
				<button type="button" className="btn deleteButton btn-sm" onClick={this.deleteItem}>X</button>
        		<label className="checkbox">
          			<input type="checkbox" onChange={this.checkOffItem} /> 
					<span></span>
					{this.props.text}
        		</label>
      		</li>
    	);
  	}
}