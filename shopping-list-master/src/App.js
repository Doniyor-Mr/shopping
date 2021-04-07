import React from 'react';
import './App.css';
import { List } from './List';

class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
			items: [
				{
        			id: 1,
      				text: 'bananas',
      				done: false
      			},
				{
        			id: 2,
      				text: 'milk',
      				done: false
      			},
				{
        			id: 3,
      				text: 'bread',
      				done: false
      			},
				{
        			id: 4,
      				text: 'cheese',
      				done: false
      			}
			],
      		text: "",
			ascending: true
    	};
    	this.handleNewText = this.handleNewText.bind(this);
    	this.addItem = this.addItem.bind(this);
    	this.handleCheckOff = this.handleCheckOff.bind(this);
    	this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.sortList = this.sortList.bind(this);
  	}
	
  	handleNewText(event) {
    	this.setState({
      		text: event.target.value
    	});
  	}
	
  	addItem(event) {
    	event.preventDefault();
    	var newItem = {
      		id: Date.now(),
      		text: this.state.text,
      		done: false
    	};
    	this.setState((prevState) => ({
      		items: prevState.items.concat(newItem),
      		text: ""
    	}));
  	}
	
  	handleCheckOff(itemId) {
    	var checkedItem = this.state.items.map(item => {
      		if (itemId === item.id) {
        		item.done = !item.done;
			}
      		return item;
    	});
    	this.setState({
      		items: [].concat(checkedItem)
    	});
  	}
	
  	handleDeleteItem(itemId) {
    	var deletedItem = this.state.items.filter(item => {
      		return item.id !== itemId;
    	});
    	this.setState({
      		items: [].concat(deletedItem)
    	});
  	}
	
	sortList(event) {
		let newList = this.state.items.sort((a, b) => {
    		if (this.state.ascending && a.text > b.text) {
        		return 1;
    		} else {
        		return -1;
    		}
		});
    	this.setState({
			ascending: !this.state.ascending,
      		items: newList
    	});
	}
	
	render() {
  		return (
			<div className="col-lg-6">
        		<form>
          			<input type="text" name="item" id="textBox" className="form-control" onChange={this.handleNewText} value={this.state.text} autocomplete="off" />
            		<button id="addButton" className="btn" onClick={this.addItem} disabled={!this.state.text}>{"Add Item"}</button>
        		</form>
				<div id="postIt">
					<h1>Shopping List</h1>
					<List items={this.state.items} onItemCheckedOff={this.handleCheckOff} onDeleteItem={this.handleDeleteItem} />
					<button id="sortButton" className="btn" onClick={this.sortList}>{"Alphabetize"}</button>
				</div>
			</div>
    	);
  	}	
}

export default App;