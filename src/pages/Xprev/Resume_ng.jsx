// #region ==================== MARK: IMPORTS ====================

// import React from 'react';
// import { useState } from 'react';
import { useRef } from "react";

import "../stylesheets/App.css";
import "../stylesheets/Resume.css";

import myData from "../data/MyData";
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
// import employerData from '../data/json/employers_https.json';

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

// const Resume = () => {
// // const Resume = (props) => {
// // const Resume = (employerData) => {
// // function Resume(employerData) {

// 	// console.log('');
// 	// console.log('props = ' + props);
// 	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

// 	// console.log('');
// 	// console.log('employerData = ' + employerData);
// 	// console.log('employerData.dateStart = ' + employerData.dateStart + '     employerData.dateEnd = ' + employerData.dateEnd);

// 	const [employers] = useState(employerData);

// 	// let thisStartMonth = props.dateStart.slice(0, -6);
// 	// let thisStartYear = props.dateStart.slice(6);

// 	// let thisEndMonth = props.dateEnd.slice(0, -6);
// 	// let thisEndYear = props.dateEnd.slice(6);

// 	// let thisDateStart = thisStartMonth + '/' + thisStartYear;
// 	// let thisDateEnd = thisEndMonth + '/' + thisEndYear;

// 	// const localImgLoc = '../assets/images/logos/';
// 	// const localImgLoc = 'public/assets/images/logos/';
// 	// const localImgLoc = 'public/logos/';
// 	// const localImgLoc = 'public/logos_pleaseCompress/';
// 	const localImgLoc = '/logos_pleaseCompress/';
// 	// const remoteImgLoc = 'https://www.shigimcp.com/assets/img/logos/';

// 	return (
// 		<>
// 			<div className='bodyContainer'>

// 				<div className='employerList'>

// 					{employers.map((thisEmployer) => (

// 						<div className='employerItem' key={thisEmployer.album_index}>

// 							<div>
// 								<img src={localImgLoc + thisEmployer.logo} className='logo' id='logoID' alt={thisEmployer.album_id} />
// 								{/* <img src={remoteImgLoc + thisEmployer.logo} className='logo' id='logoID' alt={thisEmployer.album_id} /> */}
// 							</div>

// 							<div className='employerInfoContainer'>
// 								<h1>{thisEmployer.employer}</h1>
// 								<h2>{thisEmployer.title}</h2>
// 								<p className='employerInfo'>
// 									{thisEmployer.info}
// 								</p>
// 							</div>

// 							<div>
// 								<p className='employerDates'>{thisEmployer.date_start} - {thisEmployer.date_end}</p>
// 							</div>

// 						</div>
// 					))}

// 				</div>

// 			</div>

// 		</>
// 	)
// }

// export default Resume;

// #endregion ==================== MARK: const Resume ====================

//#region ==================== MARK: CONSTANTS ====================

//#region -------------------- MARK: DATA --------------------

const employerData = myData[0];
const skillData = myData[3];

//#endregion -------------------- MARK: DATA --------------------

//#region -------------------- MARK: RESUME URLs --------------------

const remoteResumeLoc = "https://www.shigimcp.com/assets/resume/";

// const resumePDFurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2021.pdf';
// const resumeDOCXurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2021.docx';
// const resumeSimpleDOCXurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2021_simplified.docx';
// const resumeTXTurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2021.txt';
// const resumeZIPurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2021.zip';

const resumePDFurl = remoteResumeLoc + "smcpherson_resume_2021.pdf";
const resumeDOCXurl = remoteResumeLoc + "smcpherson_resume_2021.docx";
const resumeSimpleDOCXurl =
	remoteResumeLoc + "smcpherson_resume_2021_simplified.docx";
const resumeTXTurl = remoteResumeLoc + "smcpherson_resume_2021.txt";
const resumeZIPurl = remoteResumeLoc + "smcpherson_resume_2021.zip";

const resumePDFfilename = "smcpherson_resume_2021.pdf";
const resumeDOCXfilename = "smcpherson_resume_2021.docx";
const resumeSimpleDOCXfilename = "smcpherson_resume_2021_simplified.docx";
const resumeTXTfilename = "smcpherson_resume_2021.txt";
const resumeZIPfilename = "smcpherson_resume_2021.zip";

//#endregion -------------------- MARK: RESUME URLs --------------------

//#endregion ==================== MARK: CONSTANTS ====================

//#region ==================== EmployerItem ====================

// const remoteImgLoc = 'https://www.shigimcp.com/assets/img/';
const remoteImgLoc = "https://www.shigimcp.com/assets/img/resume/";

function EmployerItem(props) {
	// console.log('');
	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

	// let thisDateStart = props.dateStart.slice(0, -3);
	// let thisDateEnd = props.dateEnd.slice(0, -3);

	let thisStartMonth = props.dateStart.slice(0, -6);
	let thisStartYear = props.dateStart.slice(6);

	let thisEndMonth = props.dateEnd.slice(0, -6);
	let thisEndYear = props.dateEnd.slice(6);

	let thisDateStart = thisStartMonth + "/" + thisStartYear;
	let thisDateEnd = thisEndMonth + "/" + thisEndYear;

	// console.log('');
	// console.log('thisStartMonth = ' + thisStartMonth + '     thisStartYear = ' + thisStartYear);
	// console.log('thisEndMonth = ' + thisEndMonth + '     thisEndYear = ' + thisEndYear);
	// console.log('thisDateStart = ' + thisDateStart + '     thisDateEnd = ' + thisDateEnd);

	if (props.availability) {
		return (
			<div className="employerItem">
				{/* <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'Employer: ' + props.employer} /> */}
				{props.employerLogo ? (
					<img
						className="logo"
						src={remoteImgLoc + props.employerLogo}
						alt={"Employer: " + props.employer}
					/>
				) : (
					<img
						className="logo logoMissing"
						src={remoteImgLoc + "shigeru_logo_transparent.svg"}
						alt={"Employer: " + props.employer}
					/>
				)}

				<div className="employerInfoContainer">
					<h1>{props.employer}</h1>
					<h2>{props.title}</h2>

					{/* <div className='employerDates'>{props.dateStart} - {props.dateEnd}</div> */}
					{/* <div className='employerDates'>{Moment(props.dateStart).format('MM/YY')} - {Moment(props.dateEnd).format('MM/YY')}</div> */}
					{/* {props.dateEnd ? <div className='employerDates'>{Moment(props.dateStart).format('MM/YY')} - {Moment(props.dateEnd).format('MM/YY')}</div> : <div className='employerDates'>{Moment(props.dateStart).format('MM/YY')}</div>} */}
					{/* {props.dateEnd ? <div className='employerDates'>{thisDateStart} - {thisDateEnd}</div> : <div className='employerDates'>{thisDateEnd}</div>} */}
					{thisDateStart !== thisDateEnd ? (
						<div className="employerDates">
							{thisDateStart} - {thisDateEnd}
						</div>
					) : (
						<div className="employerDates">{thisDateEnd}</div>
					)}

					<ul>
						{props.info.split("\n").map((thisInfo, key) => {
							return (
								<li className="employerInfo" key={key}>
									{thisInfo}
								</li>
							);
						})}
					</ul>

					{props.otherType ? (
						<p
							dangerouslySetInnerHTML={{
								__html: props.otherHtml,
							}}
						></p>
					) : (
						""
					)}
					{props.software ? (
						<p>
							<b>Software:</b> {props.software}
						</p>
					) : (
						""
					)}
					{props.languages ? (
						<p>
							<b>Languages:</b> {props.languages}
						</p>
					) : (
						""
					)}
				</div>
			</div>
		);
	} else {
		return null;
	}
}

//#endregion ==================== EmployerItem ====================

//#region ==================== EmployerList ====================

function EmployerList() {
	const employerItems = employerData.map((employer) => (
		<EmployerItem
			key={employer.album_id}
			album_id={employer.album_id}
			employer={employer.employer}
			title={employer.title}
			dateStart={employer.date_start}
			dateEnd={employer.date_end}
			info={employer.info}
			otherInfo={employer.info_other}
			otherHtml={employer.other_html}
			otherType={employer.other_type}
			other={employer.other}
			software={employer.software}
			languages={employer.languages}
			employerLogoPath={employer.logopath}
			employerLogo={employer.logo}
			availability={employer.availability}
		/>
	));

	return <div className="employerList">{employerItems}</div>;
}

//#endregion ==================== EmployerList ====================

//#region ==================== MARK: SkillChartItem ====================

function SkillChartItem(props) {
	// if (props.skill) {
	if (props.skill && props.availability) {
		return (
			<div className="chartItem">
				<div className="chartCell">
					<p>{props.skill}</p>
				</div>

				<div className="chartCell">
					{props.notes.split("\n").map((thisInfo, key) => {
						return <p key={key}>{thisInfo}</p>;
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}

//#endregion ==================== MARK: SkillChartItem ====================

//#region ==================== MARK: SkillChart ====================

function SkillChart(props) {
	const skillItems = skillData
		.filter((thisCategory) => thisCategory.category === props.category)
		.map((skill) => (
			<SkillChartItem
				key={skill.index}
				category={skill.category}
				skill={skill.skill}
				level={skill.level}
				level_difference={skill.level_difference}
				exp={skill.exp}
				notes={skill.notes}
				availability={skill.availability}
			/>
		));

	return (
		<>
			<h2 className="skillCatHed">{props.category}</h2>

			<div className="skillChart">{skillItems}</div>
		</>
	);
}

//#endregion ==================== MARK: SkillChart ====================

//#region ==================== MARK: SkillSet ====================

function SkillSet() {
	return (
		<>
			<SkillChart category="discipline" />
			<SkillChart category="software" />
			<SkillChart category="dev" />
			<SkillChart category="3d" />
			{/* <SkillChart category='info' /> */}
		</>
	);
}

//#endregion ==================== MARK: SkillSet ====================

// export const Resume = (props) => {
const Resume = (props) => {
	console.log('');
	console.log('==================== COMPONENT: Resume.jsx ====================');

	// console.log('');
	console.log('props = ' + props);
	console.log(props);

	// localStorage.setItem('navLoc', locID);

	//#region ==================== MARK: ASSETS _Ref ====================

	const dialogModal_Ref = useRef(null);
	const dialogHotspot_Ref = useRef(null);
	const dialogBox_Ref = useRef(null);

	//#endregion ==================== MARK: ASSETS _Ref ====================

	return (
		<>
			<div className="employerContainer">
				<EmployerList />

				<div className="eduContainer">
					<h1 className="sectHed">Education</h1>

					<img
						className="logo"
						id="eduLogoID"
						src={remoteImgLoc + "logo_cu_seas.svg"}
						alt={
							"Education: Columbia University, School of Engineering and Applied Science"
						}
					/>

					<div className="eduInfo">
						<h1>Columbia University</h1>
						<h2>School of Engineering and Applied Science</h2>
						{/* <p className='eduDate'><b>BS Mechanical Engineering</b> - May 1990</p> */}
						<p className="eduDate">BS Mechanical Engineering</p>
					</div>
				</div>

				<div className="skillContainer">
					<h1 className="sectHed">Skills</h1>
					<SkillSet />
				</div>
			</div>

			<div
				className={
					props.resumeModalOpen === true
						? "dialogModal dialogModalOpen"
						: "dialogModal dialogModalClosed"
				}
				id="dialogModalID"
				ref={dialogModal_Ref}
				>

				<div
					className="dialogHotspot"
					id="dialogHotspotID"
					onClick={() => {
						props.setResumeModalOpen(!props.resumeModalOpen);
					}}
					ref={dialogHotspot_Ref}
				></div>

				<div className="dialogBox" id="dialogBoxID" ref={dialogBox_Ref}>
					<button
						className="dialogCloseBTN"
						onClick={() => {
							props.setResumeModalOpen(!props.resumeModalOpen);
						}}
					>
						X
					</button>

					<div className="dialogHed" id="dialogHedID">
						<p>Choose your format...</p>
					</div>

					<div className="dialogMenu" id="dialogMenuID">
						{/* <a href={resumePDFurl} download target='_blank' rel='noreferrer'>*.pdf</a>
                        <a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>*.docx</a>
                        <a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>*.docx</a>
                        <a href={resumeTXTurl} download target='_blank' rel='noreferrer'>*.txt</a> */}

						<a
							href={resumePDFurl}
							download
							target="_blank"
							rel="noreferrer"
						>
							{resumePDFfilename}
						</a>
						<a
							href={resumeDOCXurl}
							download
							target="_blank"
							rel="noreferrer"
						>
							{resumeDOCXfilename}
						</a>
						<a
							href={resumeSimpleDOCXurl}
							download
							target="_blank"
							rel="noreferrer"
						>
							{resumeSimpleDOCXfilename}
						</a>
						<a
							href={resumeTXTurl}
							download
							target="_blank"
							rel="noreferrer"
						>
							{resumeTXTfilename}
						</a>
					</div>

					<div className="dialogHed dialogHed02" id="dialogHed02ID">
						<p>or download ALL...</p>
					</div>

					<div
						className="dialogMenu dialogMenu02"
						id="dialogMenu02ID"
					>
						<a
							href={resumeZIPurl}
							download
							target="_blank"
							rel="noreferrer"
						>
							{resumeZIPfilename}
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume;
