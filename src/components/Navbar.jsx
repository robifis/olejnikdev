import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbarLinks'>
				<Link to='/'>
					<button className='link-button'>Home</button>
				</Link>
				<Link to='/about'>
					<button className='link-button'>About</button>
				</Link>
				<a
					href='https://drive.google.com/file/d/18cRJiGr-sIURP9wQRU2Ufri6aDvcOqtB/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'>
					<button className='link-button'>CV</button>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
