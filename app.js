var App = () => (<div><GroceryList groceryItems={['Verduras', 'Frutas']}/></div>);

class GroceryList extends React.Component {

	constructor(props) {
		super(props);
	}

	consoleClick(event) { console.log(event) }

	render(){ 
		return (
		<ul onClick={this.consoleClick}>
			<GroceryItem item={this.props.groceryItems[0]}/>
			<GroceryItem item={this.props.groceryItems[1]}/>
		</ul>);
	}
};

class GroceryItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			'done': false
		};
		this.crossItemOnHover = this.crossItemOnHover.bind(this);
	}

	crossItemOnHover(event) {
		this.setState({'done': !this.state.done});
	}

	render() {
		const style = {textDecoration: this.state.done ? 'line-through' : 'none'}
		return (<li style={style} onMouseEnter={this.crossItemOnHover}>{this.props.item}</li>);
	}
} 




ReactDOM.render(<App/>, document.getElementById('app'));