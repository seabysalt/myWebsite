import React, { Component } from 'react';
import './styles/CSS/App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Home from './container/Home';
import Contact from './container/Contact';

class App extends Component {
	startAtTop = () => window.scrollTo(0, 0);

	componentDidMount() {
		this.startAtTop();
	}

	render() {
		return (
			<BrowserRouter history={this.props.history}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />

					<Redirect from="*" to="/" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
