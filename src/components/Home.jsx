import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const [
		image,
		setImage,
	] = useState(
		'https://res.cloudinary.com/balls-to-code/image/upload/c_limit,f_auto,q_auto:eco,w_800/v1598958707/Developer-removebg_ebmtq9.png',
	);

	const [
		heroText,
		setHeroText,
	] = useState('Front End Web Developer');

	const photo = {
		backgroundImage    : `url(${image})`,
		backgroundPosition : 'center',
		backgroundClip     : 'border-box',
		backgroundSize     : 'cover',
		transition         : 'all 0.3s ease-in-out',
		outline            : 'hidden',
	};

	const changeImage = () => {
		setImage(
			'https://res.cloudinary.com/balls-to-code/image/upload/f_auto,q_auto:eco/v1598978566/Personal%20Images/Bobby_Olejnik_Mansfield_Town_vs_Northampton_ilIQdemwEGHl-removebg-preview_qf2awr.png',
		);
		setHeroText('Former Professional Footballer');
	};

	const changeBack = () => {
		setImage(
			'https://res.cloudinary.com/balls-to-code/image/upload/c_limit,f_auto,q_auto:eco,w_800/v1598958707/Developer-removebg_ebmtq9.png',
		);
		setHeroText('Front End Web Developer');
	};
	return (
		<div className='layout home-container'>
			<div className='info'>
				<div className='content'>
					<h1 className='heroTitle'>
						Hi, I am
						<span className='name'> Bobby</span>
					</h1>
					<h3 className='heroSub'>{heroText}</h3>
					<Link to='/about'>
						<button className='cta button'>About</button>
					</Link>
					<a
						target='_blank'
						href='https://drive.google.com/file/d/18cRJiGr-sIURP9wQRU2Ufri6aDvcOqtB/view?usp=sharing'>
						<button className='cta-alt button'>CV</button>
					</a>
				</div>
			</div>
			<div className='photo'>
				<div style={photo} className='content' onMouseEnter={changeImage} onMouseLeave={changeBack} />
			</div>
		</div>
	);
};

export default Home;
