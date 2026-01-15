// #region ==================== MARK: IMPORTS ====================

// import React from 'react';
import { useState } from 'react';
// import { useRef } from "react";

import "../stylesheets/Resume_.css";

// import myData from "../data/MyData";
// import employers from '../data/MyData';
// import work from '../data/MyData';
// import about from '../data/MyData';
// import skills from '../data/MyData';

// import employers from '../data/json/employers_http.json';
// import employers from '../data/json/employers_https.json';
// import work from '../data/json/work.json';
// import about from '../data/json/about.json';
// import skills from '../data/json/skills.json'

// import employerData from '../data/EmployerData';
import employerData from '../data/json/employers_https.json';

// const employerData = employers.map((employer) => employer);
// const employerData = JSON.parse(JSON.stringify(employers));
// const employers = JSON.stringify(employerData);
// const employerData = JSON.stringify(employers);

// import logoKiehls from '../assets/images/logos/logo_kiehls.svg';
// import logoIchiban from '../assets/images/logos/logo_ichiban.svg';

// #endregion ==================== MARK: IMPORTS ====================

// #region ==================== MARK: myData ====================

// console.log('==========  Resume.jsx  ==========');

// // console.log('');
// console.log('employers.length = ' + employers.length);
// console.log('employers = ' + employers);
// console.log(employers);

// // console.log('');
// console.log('employerData.length = ' + employerData.length);
// console.log('employerData = ' + employerData);
// console.log(employerData);

// try {
// 	const employerDataX = JSON.parse(employers);
// } catch (error) {
// 	console.error('Error parsing JSON:', error);
// }

// #endregion ==================== MARK: myData ====================

// #region ==================== MARK: const Resume ====================

const Resume = () => {
// const Resume = (props) => {
// const Resume = (employerData) => {
// function Resume(employerData) {

	// console.log('');
	// console.log('props = ' + props);
	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

	// console.log('');
	// console.log('employerData = ' + employerData);
	// console.log('employerData.dateStart = ' + employerData.dateStart + '     employerData.dateEnd = ' + employerData.dateEnd);

	const [employers] = useState(employerData);

	// let thisStartMonth = props.dateStart.slice(0, -6);
	// let thisStartYear = props.dateStart.slice(6);

	// let thisEndMonth = props.dateEnd.slice(0, -6);
	// let thisEndYear = props.dateEnd.slice(6);

	// let thisDateStart = thisStartMonth + '/' + thisStartYear;
	// let thisDateEnd = thisEndMonth + '/' + thisEndYear;

	// const localImgLoc = '../assets/images/logos/';
	// const localImgLoc = 'public/assets/images/logos/';
	// const localImgLoc = 'public/logos/';
	// const localImgLoc = 'public/logos_pleaseCompress/';
	const localImgLoc = '/logos_pleaseCompress/';
	// const remoteImgLoc = 'https://www.shigimcp.com/assets/img/logos/';

	return (
		<>
			{/* <div className='bodyContainer'> */}
			<div className='employerContainer'>

				<div className='employerList'>

					{employers.map((thisEmployer) => (

						<div className='employerItem' key={thisEmployer.album_index}>

							<div>
								<img src={localImgLoc + thisEmployer.logo} className='logo' id='logoID' alt={thisEmployer.album_id} />
								{/* <img src={remoteImgLoc + thisEmployer.logo} className='logo' id='logoID' alt={thisEmployer.album_id} /> */}
							</div>

							<div className='employerInfoContainer'>
								<h1>{thisEmployer.employer}</h1>
								<h2>{thisEmployer.title}</h2>
								<p className='employerInfo'>
									{thisEmployer.info}
								</p>
							</div>

							<div>
								<p className='employerDates'>{thisEmployer.date_start} - {thisEmployer.date_end}</p>
							</div>

						</div>
					))}

				</div>

			</div>

		</>
	)
}

export default Resume;

// #endregion ==================== MARK: const Resume ====================
