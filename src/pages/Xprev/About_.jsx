import React from 'react';
// import '../stylesheets/BodyContainer.scss';

// function Body() {
// 	return (
// 		<div className="bodyContainer">
// 			{/* <h2>{title}</h2> */}
// 			{/* {children} */}

// 			<img src={logo} className="logoK" id="logoKID" alt="logo" />
// 			<img src={logoRev} className="logoW" id="logoWID" alt="logoRev" />
// 		</div>
// 	);
// }

// export default Body;


// const About = () => <h1>About Page</h1>;

// export default About;


// const About = (props) => {
export default function About(props) {

	console.log('');
	console.log('==================== COMPONENT: About.jsx ====================');

	// console.log('');
	console.log('props = ' + props);
	console.log(props);

	return (
		<>
			<div className="bodyContainer" id='bodyContainerID'>
				<h1>This is my About page</h1>
			</div>
		</>
	)
}

// export default About;