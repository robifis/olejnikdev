import React from 'react';

const About = () => {
	return (
		<div className='layout about-container'>
			<h1 className='heroTitle'>About Me</h1>
			<div className='qna'>
				<h3 className='question'>Q: Who are you exactly?</h3>
				<p className='answer'>
					A: I am Bobby, a{' '}
					<a href='https://en.wikipedia.org/wiki/Bobby_Olejnik' target='_blank'>
						former professional footballer
					</a>{' '}
					turned web developer. Whilst I have always enjoyed playing football, I have always kept one one on
					the world of tech with the idea to one day be able to step into this wonderful and exciting field.
					Feel free to take a look at{' '}
					<a
						href='https://drive.google.com/file/d/18cRJiGr-sIURP9wQRU2Ufri6aDvcOqtB/view?usp=sharing'
						target='_blank'>
						my CV
					</a>. Alternatively, here are the links to my Social Media Channels:{' '}
					<a href='https://www.instagram.com/bobbyolejnik/?hl=en' target='_blank'>
						Instagram
					</a>,{' '}
					<a href='https://twitter.com/bobbyolejnik?lang=en' target='_blank'>
						Twitter
					</a>{' '}
					as well as my{' '}
					<a href='https://github.com/robifis' target='_blank'>
						GitHub Account
					</a>. If you want to get in touch with directly then please don't hesitate to contact me either via{' '}
					<a href='mailto:bobby@olejnik.dev' target='_blank'>
						email
					</a>{' '}
					or over the phone: +447450113553.
				</p>
				<h3 className='question'>Q: Why web development?</h3>
				<p className='answer'>
					A: Web development is an amazingly powerful tool to have in your toolbox. I believe that the only
					limiting factor is your imagination and it also enables you to create something from nothing with
					just a few lines of code. Many of the worlds most successful people have started with nothing more
					than a computer and an understanding of code, no matter what language or framework. Web development
					is going to be a skill that will be even more in demand over the coming months and years, as the
					recent COVID '19 pandemic has shown.
				</p>
				<h3 className='question'>Q: But aren't football and technology worlds apart?</h3>
				<p className='answer'>
					A: Sure, maybe upon initial inspection, but if you dig deeper and look at the soft-skills that one
					has to learn when playing football it becomes very clear that quite a few that are transferrable and
					applicable in both work environments. Some of the skills that are relevant for both are things like
					being able to adapt to a constantly changing environment/team, working under immense pressure, good
					communication skills, being able to give a presentation or talk in front of a team, just to name a
					few. One of my greatest passions is to do meaningful work. I want to be part of a team that shares
					my passion of improving the lives of others.
				</p>
				<h3 className='question'>Q: So what exactly are you skills?</h3>
				<p className='answer'>
					A: I have been lucky that football is a sport where there is quite a lot of spare time during the
					week, which has allowed me to consume courses and build sample projects mainly in React. My main
					skill-set is primarily focused on the front-end, with a big focus on JavaScript, React and React
					dependant frameworks such as GatsbyJS and NextJS. Another key area in web development is, of course,
					version control such as git, which I am very well versed in too. Whilst I absolutely love working on
					the front-end there is something amazing about creating logical solutions in backend with
					NodeJS(Express).
				</p>
				<h3 className='question'>Q: Do you just sit in front of the computer all day then?</h3>
				<p className='answer'>
					A: Whilst I love being in front of a computer creating things, I do have a life outside with many
					different hobbies. I enjoy photography, going to the gym and running (I am a Carnivore), I enjoy
					fixing computers and mobile phones too and selling them on as well as public speaking. However, one
					of my biggest passions is travelling. I love exploring new countries, cultures and ways of living. I
					am also lucky to be able to speak 3 languages fluently due to my heritage (German, English and
					Polish).
				</p>
			</div>
		</div>
	);
};

export default About;
