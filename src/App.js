import React from 'react';
import './main.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App (){
	return (
		<div>
			<div className='body'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
