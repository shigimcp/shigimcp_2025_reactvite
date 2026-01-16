//#region ==================== MARK: IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Suspense } from 'react';
// import { useCallback } from 'react';
// import { useLocation } from 'react-router-dom';

// import { isBrowser } from "react-device-detect";

// REF: https://www.youtube.com/watch?v=PMXUCNzthQU&t=508s => https://www.npmjs.com/package/ua-parser-js => https://github.com/faisalman/ua-parser-js => https://docs.uaparser.dev/api/main/overview.html
import { UAParser } from 'ua-parser-js';

import { gsap } from 'gsap';

// REF: https://metafizzy.co => https://isotope.metafizzy.co => https://packery.metafizzy.co => https://imagesloaded.desandro.com => https://github.com/desandro/imagesloaded => https://www.npmjs.com/package/imagesloaded
import Isotope from 'isotope-layout';
import Packery from 'isotope-packery';
// import { Packery } from 'packery';
// import packeryMode from 'isotope-packery';
// import imagesloaded from 'imagesloaded';
// import { imagesloaded } from 'imagesloaded';
import imagesLoaded from 'imagesloaded';

import FadeLoader from 'react-spinners/FadeLoader';

// import ReactPlayer from 'react-player/vimeo';
import ReactPlayer from 'react-player'

// import '../stylesheets/Global.css';
import '../stylesheets/App.css';
import '../stylesheets/Work.css';

// import myData from '../data/MyData';

import employers from '../data/json/employers_https.json';
import work from '../data/json/work.json';
// import about from '../data/json/about.json';
// import skills from '../data/json/skills.json'

// import Navbar from '../components/Navbar';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

//#region - - - - - - - - - - - EA - - - - - - - - - - -

import EAAR_18951 from '../assets/images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';
import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
import NMMN_11155 from '../assets/images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import BCBG_02342 from '../assets/images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../assets/images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';
import JCNR_07074 from '../assets/images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../assets/images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../assets/images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../assets/images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
import JBJA_10263 from '../assets/images/ea/banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263';

//#endregion - - - - - - - - - - - EA - - - - - - - - - - -


//#region - - - - - - - - - - - KIEHLS - - - - - - - - - - -

// import KU_0000 from '../assets/images/kiehls/anims/KU-0000_HOMEPAGE_ANIMS_WK01_products_snow';

//#endregion - - - - - - - - - - - KIEHLS - - - - - - - - - - -

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------

//#endregion ==================== MARK: IMPORTS ====================


//#region ==================== MARK: CONSTANTS n VARS ====================

const remoteLoc = 'https://www.shigimcp.com/assets/img/';
const videoLoc = 'https://vimeo.com/';

const ua = new UAParser().getResult();

// console.log('ua = ' + ua);
// console.log(ua);

// if (ua.device.type === undefined) {
// 	// setBrowserDetect('desktop');
// 	let browserDetect = 'desktop';
// } else {
// 	// setBrowserDetect(ua.device.type);
// 	let browserDetect = ua.device.type;
// }

let workNavWidth;
let workNavHeight;


//#region -------------------- MARK: workNavTL: desktop vs mobile --------------------

// if (ua.device.type === undefined) {

// 	workNavTL
// 		// .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')

// 		.fromTo(['.employerNav'], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		.fromTo(['.typeNav'], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')
// 	;

// 	// workNavTL.pause();

// } else {

// 	workNavTL
// 		// .fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// .fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
// 		// // .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')

// 		.fromTo(['.employerNav'], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		.fromTo(['.typeNav'], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
// 		// .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
// 	;
// }

//#endregion -------------------- MARK: workNavTL: desktop vs mobile --------------------


//#region -------------------- MARK: DATA --------------------

// console.log('');
// // console.log('myData = ' + myData);
// console.log('myData = ');
// console.log(myData);

// let employerData = myData[0];
// let workData = myData[1];

let employerData = employers;
let workData = work;

// console.log('');
// // console.log('employerData = ' + employerData);
// console.log('employerData = ');
// console.log(employerData);
// // console.log(employerData[0].employer);

// console.log('');
// // console.log('workData = ' + workData);
// console.log('workData = ');
// console.log(workData);

//#endregion -------------------- MARK: DATA --------------------


//#region -------------------- MARK: FILTER ARRAY: filterEmployer (and... push "All" for employerNav) --------------------

const filterEmployer = employerData.filter(isInGallery => isInGallery.isInGallery);

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

// filterEmployer.unshift(
// filterEmployer.push(
// 	{
// 		"album_index": '00',
// 		// "album_id": "*",
// 		// "employer": "*",
// 		"album_id": "all",
// 		"employer": "All",
// 		"title": "Digital Designer / Front-End Developer",
// 		"date_start": "present",
// 		"date_end": "present",
// 		"info": "View ALL work",
// 		"info_other": "",
// 		"other_html": "",
// 		"other_type": "",
// 		"other": "",
// 		"software": "",
// 		"languages": "",
// 		// "logopath": "0elements/shigeru_logo.svg",
// 		// "logo": "shigeru_logo_transparent.svg",
// 		"logopath": "#",
// 		"logo": "#",
// 		"slpath": "other/sl",
// 		"thpath": "other/th",
// 		"flpath": "https://www.shigimcp.com/img/other/",
// 		"flpath_stage": "https://www.shigimcp.com/Xstage/shigimcp_2019/img/other/",
// 		"chippath": "#",
// 		"chip": "#",
// 		"availability": true,
// 		"isInGallery": true
// 	}
// )

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

//#endregion -------------------- MARK: FILTER ARRAY: filterEmployer (and... push "All" for employerNav) --------------------


//#region -------------------- MARK: FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------

const filterType = [
	// { key: '0000', id: 'allCheck', value: 'all', label: 'All' },
	{ key: '0000', id: 'websiteCheck', value: 'website', label: 'Website' },
	{ key: '0001', id: 'mobileCheck', value: 'mobile', label: 'Mobile' },
	{ key: '0002', id: 'videoCheck', value: 'video', label: 'Video' },
	{ key: '0003', id: 'bannerCheck', value: 'banner', label: 'Banners' },
	{ key: '0004', id: 'printCheck', value: 'print', label: 'Print' },
	// { key: '0005', id: 'allCheck', value: '*', label: 'All' }
];

// console.log('');
// console.log('filterType = ' + filterType);
// console.log('filterType = ');
// console.log(filterType);

//#endregion -------------------- MARK: FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------


//#region -------------------- MARK: HTML5 BANNERS: bannerContent[] --------------------

const bannerContent = {
	EAAR_18951: EAAR_18951,
	NMPF_04852: NMPF_04852,
	NMMN_11155: NMMN_11155,
	BCBG_02342: BCBG_02342,
	BCBG_05500: BCBG_05500,
	JCNR_07074: JCNR_07074,
	BSPS_26897: BSPS_26897,
	NMTG_26903: NMTG_26903,
	JCVR_26963: JCVR_26963,
	JBJA_10263: JBJA_10263,
};

//#endregion -------------------- MARK: HTML5 BANNERS: xContent[] --------------------

//#endregion ==================== MARK: CONSTANTS n VARS ====================


//#region ==================== MARK: TIMELINES ====================

//#region -------------------- MARK: TIMELINES: workNavIN --------------------');

// console.log('-------------------- MARK: TIMELINES: workNavIN --------------------');

const workNavIN = new gsap.timeline();
// const workNavIN = new gsap.timeline({ paused: true });
// const workNavIN = new gsap.timeline().pause();

// workNavIN
// 	// .fromTo(['.employerNav'], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
// 	.fromTo(['.employerNav'], { y: 0, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 });

// 	// .to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 })
// 	// .to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 })
// ;

// workNavIN
// 	// .fromTo([workNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')
// 	// .fromTo([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')

// 	.fromTo(['.workNavContainer'], { y: 0, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame00')
// 	// .fromTo(['.employerNav'], { y: 0, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame00')
// ;

// console.log('workNavIN = ' + workNavIN);

//#endregion -------------------- MARK: TIMELINES: workNavIN --------------------');


//#region -------------------- MARK: TIMELINES: workNavTL --------------------');

// console.log('-------------------- MARK: TIMELINES: workNavTL --------------------');

// const workNavTL = new gsap.timeline();
// const workNavTL = new gsap.timeline({ paused: true });
const workNavTL = new gsap.timeline().pause();

// workNavTL
// 	.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 })
// 	.to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 })
// ;

// if (ua.device.type === undefined) {

// 	workNavTL
// 		// .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')

// 		.fromTo(['.employerNav'], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		.fromTo(['.typeNav'], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')
// 	;

// 	// workNavTL.pause();

// } else {

// 	workNavTL
// 		// .fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		// .fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
// 		// // .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')

// 		.fromTo(['.employerNav'], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
// 		.fromTo(['.typeNav'], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
// 		// .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
// 	;
// }

//#endregion -------------------- MARK: TIMELINES: workNavTL --------------------');

//#endregion ==================== MARK: TIMELINES ====================



// const Work = (props) => {
// export default function Work() {
// export default function Work(props) {
// export default function Work({chipVisibility}) {
// export default function Work({chipvisibility, handlechiptoggle}) {
// export default function Work({isChipVisible, setIsChipVisible}) {
// export default function Work({isChipVisible, setIsChipVisible, toggleVisibility}) {
export default function Work({isChipVisible, setIsChipVisible, filterKey, setFilterKey}) {

// const Work = ({chipVisibility, setChipVisibility}) => {
// export default function Work({chipVisibility}) {
// export default function Work({chipvisibility}) {
// export default function Work({chipVisibility, setChipVisibility}) {
// export default function Work({chipVisibility, handleChipToggle}) {
// export default function Work({chipVisibility, chipContainer_Ref, galleryContainer_Ref}) {
// export default function Work({chipVisibility, setChipVisibility}) {
// export default function Work({chipVisibility, setChipVisibility, handleChipToggle}) {

	// const locationWork = useLocation();
	// const { chipvisibility } = locationWork.state;
	// const { setchipvisibility } = locationWork.state.setChipVisibility;
	// const { chipVisibility } = locationWork.state.chipVisibility;
	// const { setChipVisibility } = locationWork.state.setChipVisibility;

	// const chipvisibility = locationWork.state;
	// const chipvisibility = locationWork.state.chipVisibility;
	// const setchipvisibility = locationWork.state.setChipVisibility;
	// const chipVisibility = locationWork.state.chipVisibility;
	// const setChipVisibility = locationWork.state.setChipVisibility;

	// const chipstate = locationWork.state;
	// const chipvisibility = locationWork.state.chipVisibility;
	// const chipvisibility = locationWork.state.chipvisibility;

	// const chipvisibility = props.chipvisibility;

	//#region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Work.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// console.log('');
	// console.log('isBrowser = ' + isBrowser);
	// // console.log(isBrowser);

	// console.log('isMobile = ' + isMobile);
	// // console.log(isMobile);

	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// console.log('typeof chipvisibility = ' + typeof chipvisibility);
	// // console.log('typeof setchipvisibility = ' + typeof setchipvisibility);
	// console.log('typeof handlechiptoggle = ' + typeof handlechiptoggle);

	// // console.log('');
	// console.log('chipVisibility = ' + chipVisibility);
	// console.log(chipVisibility);
	// console.log('setChipVisibility = ' + setChipVisibility);
	// console.log(setChipVisibility);
	// console.log('handleChipToggle = ' + handleChipToggle);
	// console.log(handleChipToggle);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);

	// // console.log('');
	// console.log('locationWork = ' + locationWork);
	// console.log(locationWork);

	// // console.log('');
	// console.log('locationWork.state = ' + locationWork.state);
	// console.log(locationWork.state);

	// // console.log('');
	// console.log('locationWork.state.chipVisibility = ' + locationWork.state.chipVisibility);
	// console.log(locationWork.state.chipVisibility);

	// // console.log('');
	// console.log('locationWork.state.chipvisibility = ' + locationWork.state.chipvisibility);
	// console.log(locationWork.state.chipvisibility);

	// // console.log('');
	// console.log('locationWork.state.chipstate = ' + locationWork.state.chipstate);
	// console.log(locationWork.state.chipstate);

	// // console.log('');
	// console.log('locationWork.state.chipState = ' + locationWork.state.chipState);
	// console.log(locationWork.state.chipState);

	// // console.log('');
	// console.log('locationWork.state.chipState.chipvisibility = ' + locationWork.state.chipState.chipvisibility);
	// console.log(locationWork.state.chipState.chipvisibility);

	// // console.log('');
	// console.log('locationWork.state.setChipVisibility = ' + locationWork.state.setChipVisibility);
	// console.log(locationWork.state.setChipVisibility);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);

	// console.log('');
	// console.log('setchipvisibility = ' + setchipvisibility);
	// console.log(setchipvisibility);

	// // console.log('');
	// console.log('chipstate = ' + chipstate);
	// console.log(chipstate);

	// // console.log('');
	// console.log('document.childNodes = ' + document.childNodes);
	// console.log(document.childNodes);

	// // console.log('');
	// console.log('isChipVisible = ' + isChipVisible);
	// // console.log(isChipVisible);

	// // console.log('');
	// console.log('setIsChipVisible = ' + setIsChipVisible);
	// // console.log(setIsChipVisible);

	// // console.log('');
	// console.log('toggleVisibility = ' + toggleVisibility);
	// // console.log(toggleVisibility);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	//#region ==================== MARK: imagesLoaded ====================

	// var imagesLoaded = require('imagesloaded');
	// var imagesLoaded = import.meta.glob('imagesloaded');
	// var imagesLoaded = import.meta.globEager('imagesloaded');

	// var galleryImages = imagesLoaded(document.querySelector('#galleryContainerID'), function(instance) {
	// 	console.log('all images are loaded');
	// 	console.log('galleryImages = ' + galleryImages);
	// 	console.log('instance = ' + instance);
	// });

	// console.log('galleryImages = ' + galleryImages);
	// // console.log('instance = ' + instance);


	// var chipImages = imagesLoaded(document.querySelector('#isotopeChipsID'), function(instance) {
	// 	console.log('all images are loaded');
	// 	console.log('chipImages = ' + chipImages);
	// 	console.log('instance = ' + instance);
	// });

	// console.log('chipImages = ' + chipImages);
	// // console.log('instance = ' + instance);

	//#endregion ==================== MARK: imagesLoaded ====================


	//#region ==================== MARK: CONSTs / FUNCTIONs ====================

	//#region -------------------- MARK: CONST: handleChipToggle --------------------

	// const handleChipToggle = () => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	// console.log('');
	// 	// console.log('-------------------- CONST: handleChipToggle --------------------');
	// 	// console.log('chipVisibility_PRE = ' + chipVisibility);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------

	// 	// workNavIN.play();
	// 	workNavIN.reverse();

	// 	setFilterKey('null');
	// 	// setChipVisibility(!chipVisibility);
	// 	// setChipVisibility(true);
	// 	setIsChipVisible(true);


	// 	//#region -------------------- FINDIN' OUT MORE SH*T --------------------

	// 	// // console.log('');
	// 	// console.log('chipVisibility_POST = ' + chipVisibility);

	// 	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------
	// }

	//#endregion -------------------- MARK: CONST: handleChipToggle --------------------


	//#region -------------------- MARK: CONST: handleFilterKeyChange - setFilterKey / activeEmplDiv_Ref / activeTypeDiv_Ref --------------------

	// const handleFilterKeyChange = key => () => setFilterKey(key);

	const handleFilterKeyChange = key => (keyJSONnode) => {
	// function handleFilterKeyChange(keyJSONnode) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: CONST: handleFilterKeyChange - setFilterKey / activeEmplDiv_Ref / activeTypeDiv --------------------');

		// console.log('key = ' + key);
		// console.log(key);

		// console.log('');
		// console.log('keyJSONnode = ' + keyJSONnode);
		// console.log(keyJSONnode);

		// console.log('');
		// console.log('keyJSONnode.target = ' + keyJSONnode.target);
		// console.log(keyJSONnode.target);
		// console.log('keyJSONnode.target.parentNode.id = ' + keyJSONnode.target.parentNode.id);
		// // console.log('keyJSONnode.target.parentNode.ref = ' + keyJSONnode.target.parentNode.ref);
		// console.log('keyJSONnode.target.parentNode.className = ' + keyJSONnode.target.parentNode.className);
		// console.log('keyJSONnode.target.parentNode.parentNode.id = ' + keyJSONnode.target.parentNode.parentNode.id);

		// console.log('');
		// console.log('keyJSONnode.currentTarget = ' + keyJSONnode.currentTarget);
		// console.log(keyJSONnode.currentTarget);
		// console.log('keyJSONnode.currentTarget.id = ' + keyJSONnode.currentTarget.id);
		// console.log('keyJSONnode.currentTarget.getAttribute(data-navprop) = ' + keyJSONnode.currentTarget.getAttribute('data-navprop'));
		// console.log(keyJSONnode.currentTarget.getAttribute('data-navprop'));

		// console.log('');
		// console.log('keyJSONnode.currentTarget.parentNode = ' + keyJSONnode.currentTarget.parentNode);
		// console.log(keyJSONnode.currentTarget.parentNode);
		// console.log('keyJSONnode.currentTarget.parentNode.id = ' + keyJSONnode.currentTarget.parentNode.id);

		// console.log('isLoading = ' + isLoading);

		// console.log('');
		// console.log('employerNav_Ref = ' + employerNav_Ref);
		// console.log(employerNav_Ref);
		// console.log('employerNav_Ref.querySelector([data-navprop=ctm]) = ' + employerNav_Ref.querySelector('[data-navprop="ctm"]'));
		// console.log(employerNav_Ref.querySelector('[data-navprop="ctm"]'));
		// console.log('document.querySelector([data-navprop=ctm]) = ' + document.querySelector('[data-navprop="ctm"]'));
		// console.log(document.querySelector('[data-navprop="ctm"]'));

		// console.log('employerNav_Ref.current = ' + employerNav_Ref.current);
		// console.log('employerNav_Ref.current.id = ' + employerNav_Ref.current.id);
		// console.log('employerNav_Ref.current.offsetWidth = ' + employerNav_Ref.current.offsetWidth);
		// console.log('employerNav_Ref.current.offsetHeight = ' + employerNav_Ref.current.offsetHeight);
		// console.log('employerNav_Ref.current.id = ' + employerNav_Ref.current.id);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		// clearContent();

		// workNavIN.play();

		setFilterKey(key);

		// setGalleryVisibility(true);

		// setGalChipToggle(!galChipToggle);
		// setGalChipToggle(false);

		// setChipVisibility(!chipVisibility);
		// setChipVisibility(chipVisibility => !chipVisibility);
		// setChipVisibility(false);
		setIsChipVisible(false);

		// handleChipToggle();

		let thisLocX;
		let thisLocY;
		let thisLocW;
		let thisLocH;

		let activeDivDims = getDimensions(keyJSONnode.currentTarget);
		// let activeDivDims = getDimensions(employerNav_Ref.current);
		// let activeDivDims = getDimensions(key);


		//#region -------------------- FINDIN' OUT MORE SH*T --------------------

		// console.log('');

		// console.log('filterKey = ' + filterKey);
		// console.log(filterKey);

		// console.log('keyJSONnode.currentTarget.getAttribute(data-navprop) = ' + keyJSONnode.currentTarget.getAttribute('data-navprop'));

		// console.log('activeDivDims: activeEmplDiv_Ref / activeEmplDiv_Ref = ' + activeDivDims);
		// console.log(activeDivDims);

		//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------


		//#region -------------------- OLD: if/then/else... --------------------

		// if (keyJSONnode.currentTarget.parentNode.id === 'isotopeChipsID') {
		// 	// console.log("* - * - * CHIP!!! * - * - *");
		// 	document.querySelector('[data-navprop=' + key + ']').click();
		// }
		// else if (keyJSONnode.currentTarget.parentNode.id === 'employerNavID') {
		// // if (keyJSONnode.currentTarget.parentNode.id === 'employerNavID' || keyJSONnode.currentTarget.parentNode.id === 'chipContainerID') {
		// // if (keyJSONnode.currentTarget.parentNode.id === 'employerNavID' && keyJSONnode.target.parentNode.className != 'chipItem') {
		// // if (keyJSONnode.currentTarget.parentNode.id === 'employerNavID' && keyJSONnode.currentTarget.className === 'workNavItemLogo') {
		// // if (keyJSONnode.currentTarget.className === 'workNavItemLogo') {

		// 	// if (keyJSONnode.currentTarget.className === 'workNavItemLogo') {
		// 	// 	// thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.5);
		// 	// 	// thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.2);
		// 	// 	thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.2) - 5;
		// 	// } else {
		// 	// 	thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.3);
		// 	// }

		// 	thisLocX = activeDivDims[0] - 5;
		// 	// thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.2) + 15;
		// 	thisLocY = activeDivDims[1];
		// 	// thisLocW = activeDivDims[2];
		// 	thisLocW = activeDivDims[2] + 10;
		// 	thisLocH = activeDivDims[3];

		// 	// // console.log('');
		// 	// console.log('employerNav_Ref = ' + employerNav_Ref);
		// 	// console.log(employerNav_Ref);
		// 	// console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
		// 	// console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

		// 	gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
		// 	gsap.to([activeTypeDiv_Ref.current], { x: 0, y: 0, width: 0, height: thisLocH, duration: 0 });

		// // } else {
		// // } else if (keyJSONnode.target.parentNode.className == 'chipItem') {
		// } else if (keyJSONnode.currentTarget.parentNode.id === 'typeNavID') {

		// 	// thisLocX = activeDivDims[0] - (typeNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.5);
		// 	// thisLocX = activeDivDims[0] - (typeNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.2);
		// 	thisLocX = activeDivDims[0];
		// 	thisLocY = activeDivDims[1];
		// 	thisLocW = activeDivDims[2];
		// 	thisLocH = activeDivDims[3];

		// 	// console.log('');
		// 	// console.log('typeNav_Ref');
		// 	// console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
		// 	// console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

		// 	gsap.to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
		// 	gsap.to([activeEmplDiv_Ref.current], { x: 0, y: 0, width: 0, height: thisLocH, duration: 0 });
		// }

		//#endregion -------------------- OLD: if/then/else... --------------------


		switch (true) {

			// case keyJSONnode.currentTarget.parentNode.id === 'isotopeChipsID':
			case keyJSONnode.currentTarget.parentNode.id === 'chipContainerID':

				// console.log("* - * - * CHIP!!! * - * - *");
				document.querySelector('[data-navprop=' + key + ']').click();

				break;

			case keyJSONnode.currentTarget.parentNode.id === 'employerNavID':

				// thisLocX = activeDivDims[0];
				thisLocX = activeDivDims[0] - 5;
				// thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.2) + 15;
				thisLocY = activeDivDims[1];
				// thisLocW = activeDivDims[2];
				thisLocW = activeDivDims[2] + 10;
				thisLocH = activeDivDims[3];

				gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
				gsap.to([activeTypeDiv_Ref.current], { x: 0, y: 0, width: 0, height: thisLocH, duration: 0 });

				break;

			case keyJSONnode.currentTarget.parentNode.id === 'typeNavID':

				thisLocX = activeDivDims[0];
				thisLocY = activeDivDims[1];
				thisLocW = activeDivDims[2];
				thisLocH = activeDivDims[3];

				gsap.to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
				gsap.to([activeEmplDiv_Ref.current], { x: 0, y: 0, width: 0, height: thisLocH, duration: 0 });

				break;

			default:

				console.log('DEFAULT');

				break;
		}
	};

	//#endregion -------------------- MARK: CONST: handleFilterKeyChange - setFilterKey / activeEmplDiv_Ref / activeTypeDiv_Ref --------------------


	//#region -------------------- MARK: FUNCTION: getDimensions(thisObject) --------------------

	function getDimensions(thisObject) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: FUNCTION: getDimensions(thisObject) --------------------');

		// console.log('');
		// console.log('thisObject (key) = ' + thisObject);
		// console.log('thisObject (keyJSONnode.currentTarget) = ' + thisObject);
		// console.log(thisObject);

		// console.log('employerNav_Ref = ' + employerNav_Ref);
		// console.log(employerNav_Ref);

		// console.log('employerNav_Ref.current = ' + employerNav_Ref.current);
		// console.log(employerNav_Ref.current);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		// let thisObject_x = document.getElementById(thisObject.id).offsetLeft;
		// let thisObject_y = document.getElementById(thisObject.id).offsetTop;
		// let thisObject_w = document.getElementById(thisObject.id).offsetWidth;
		// let thisObject_h = document.getElementById(thisObject.id).offsetHeight;

		let thisObject_x = thisObject.offsetLeft;
		let thisObject_y = thisObject.offsetTop;
		let thisObject_w = thisObject.offsetWidth;
		let thisObject_h = thisObject.offsetHeight;

		// let thisObject_x = thisObject.left;
		// let thisObject_y = thisObject.top;
		// let thisObject_w = thisObject.width;
		// let thisObject_h = thisObject.height;


		//#region -------------------- FINDIN' OUT MORE SH*T --------------------

		// console.log('thisObject_x = ' + thisObject_x);
		// console.log('thisObject_y = ' + thisObject_y);
		// console.log('thisObject_w = ' + thisObject_w);
		// console.log('thisObject_h = ' + thisObject_h);

		//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------


		return [thisObject_x, thisObject_y, thisObject_w, thisObject_h];
	}

	//#endregion -------------------- MARK: FUNCTION: getDimensions(thisContainer) --------------------


	//#region -------------------- MARK: FUNCTION: resizeContent(thisContent) --------------------

	function resizeContent(thisContent) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- resizeContent(thisContent) --------------------');
		// console.log('thisContent = ' + thisContent);
		// console.log(thisContent);

		// console.log('');
		// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);
		// console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		let newVidWidth;
		let newVidHeight;
		// let vidScale;
		// let vidScale = 0.5;
		let vidScale = 0.8;
		// let vidScale = 1.5;

		switch (true) {

			case thisContent.mwidth >= window.innerWidth && thisContent.mwidth >= thisContent.mheight:

				// console.log('This content is TOO WIDE & LANDSCAPE');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = window.innerWidth * vidScale;
				newVidHeight = thisContent.mheight * (newVidWidth / thisContent.mwidth);

				break;

			case thisContent.mwidth >= window.innerWidth && thisContent.mwidth <= thisContent.mheight:

				// console.log('This content is TOO WIDE & PORTRAIT');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = window.innerWidth * vidScale;
				newVidHeight = thisContent.mheight * (newVidWidth / thisContent.mwidth);

				break;

			case thisContent.mheight >= window.innerHeight && thisContent.mwidth >= thisContent.mheight:

				// console.log('This content is TOO TALL & LANDSCAPE');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = thisContent.mwidth * (newVidHeight / thisContent.mheight);
				newVidHeight = window.innerHeight * vidScale;

				break;

			case thisContent.mheight >= window.innerHeight && thisContent.mwidth <= thisContent.mheight:

				// console.log('This content is TOO TALL & PORTRAIT');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = thisContent.mwidth * (newVidHeight / thisContent.mheight);
				newVidHeight = window.innerHeight * vidScale;

				break;

			default:

				// console.log('DEFAULT');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				if (window.innerWidth / window.innerHeight <= thisContent.mwidth / thisContent.mheight) {

					// console.log('thisContent.mwidth / thisContent.mheight = ' + thisContent.mwidth / thisContent.mheight);
					// console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

					// console.log('This content FITS and I want it to behave LANDSCAPE');

					newVidWidth = window.innerWidth * 0.75;
					newVidHeight = thisContent.mheight * (newVidWidth / thisContent.mwidth);

				} else {

					// console.log('thisContent.mwidth / thisContent.mheight = ' + thisContent.mwidth / thisContent.mheight);
					// console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

					// console.log('This content FITS and I want it to behave PORTRAIT');

					newVidHeight = window.innerHeight * 0.75;
					newVidWidth = thisContent.mwidth * (newVidHeight / thisContent.mheight);
				}

				break;
		}


		// console.log('');
		// console.log('newVidWidth = ' + newVidWidth + '     newVidHeight = ' + newVidHeight);

		return ([newVidWidth, newVidHeight]);
	}

	//#endregion -------------------- MARK: FUNCTION: resizeContent(thisContent) --------------------


	//#region -------------------- MARK: FUNCTION: clearContent() --------------------

	function clearContent() {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: FUNCTION: clearContent() --------------------');

		// console.log(bannerContainer_Ref.current.parentNode);
		// console.log(bannerContainer_Ref.current);
		// console.log(bannerContainer_Ref.current.children);
		// console.log(document.getElementById('bannerContainerID').children);
		// // console.log(bannerContainer_Ref.current.children.tl);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		setBannerShow(null);
		// bannerContainer_Ref.current.removeChild(children);
		// bannerContainer_Ref.current.children.remove();
		// bannerContainer_Ref.current.children = null;
		// document.getElementById('bannerContainerID').children.remove();

		setBanneriFrameOpen(false);
		banneriFrame_Ref.current.src = '';
		bannerContainer_Ref.current.style.left = 0 + 'px';
		bannerContainer_Ref.current.style.top = 0 + 'px';
		gsap.set([bannerContainer_Ref.current], { scale: 0, transformOrigin: '0 0', immediateRender: true });

		setWebiFrameOpen(false);
		webiFrame_Ref.current.src = '';

		setVideoOpen(false);
		setLoadedVideo(null);
	}

	//#endregion -------------------- MARK: FUNCTION: clearContent() --------------------


	//#region -------------------- MARK: FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------

	let newContent;
	let iframeSRC;

	function loadContent(thisEvent, thisWorkItem) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------');

		// // console.log('');
		// console.log('thisEvent = ' + thisEvent);
		// console.log(thisEvent);
		// // console.log('');
		// console.log('thisEvent.target = ' + thisEvent.target);
		// console.log(thisEvent.target);
		// // console.log('');
		// console.log('thisEvent.currentTarget = ' + thisEvent.currentTarget);
		// console.log(thisEvent.currentTarget);

		// console.log('');
		// console.log('thisWorkItem = ' + thisWorkItem);
		// console.log(thisWorkItem);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// let thisLocX;
		// let thisLocY;
		// let thisLocW;
		// let thisLocH;

		let currentTargetDims = getDimensions(thisEvent.currentTarget);

		// console.log('');
		// console.log('currentTargetDims loadContent: ANIMATE or STANDARD = ' + currentTargetDims);
		// console.log(currentTargetDims);


		let targetDims = getDimensions(thisEvent.target);

		// console.log('');
		// console.log('targetDims loadContent: HTML5 = ' + targetDims);
		// console.log(targetDims);


		switch (thisWorkItem.format) {

			case 'banner': {
				//#region -------------------- ASSIGN NEW CONTENT: banner --------------------

				// console.log('');
				// console.log('-------------------- ASSIGN NEW CONTENT: banner --------------------');
				// console.log('I AM A BANNER: ' + thisWorkItem.format);


				let bannerScale = thisEvent.target.offsetWidth / thisWorkItem.mwidth;

				// console.log('bannerScale = ' + bannerScale);

				clearContent();


				if (thisWorkItem.format_src === 'animate' || thisWorkItem.format_src === 'standard') {

					//#region - - - - - - - - - - - IF 'animate'... - - - - - - - - - - -

					// console.log('I am an ANIMATE or STANDARD banner: ' + thisWorkItem.format_src);

					// iframeSRC = remoteLoc + thisWorkItem.album_id + '/banners/' + thisWorkItem.link;
					iframeSRC = remoteLoc + thisWorkItem.album_id + '/banners/' + thisWorkItem.link + '/index.html';

					// console.log('iframeSRC = ' + iframeSRC);

					banneriFrame_Ref.current.src = iframeSRC;
					banneriFrame_Ref.current.style.left = currentTargetDims[0] + 'px';
					banneriFrame_Ref.current.style.top = currentTargetDims[1] + 'px';
					banneriFrame_Ref.current.style.width = targetDims[2] / bannerScale + 'px';
					banneriFrame_Ref.current.style.height = targetDims[3] / bannerScale + 'px';

					gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

					setBanneriFrameOpen(true);

					//#endregion - - - - - - - - - - - IF 'animate'... - - - - - - - - - - -

				} else if (thisWorkItem.format_src === 'html5') {

					//#region - - - - - - - - - - - ELSE IF 'html5'... - - - - - - - - - - -

					// console.log('I am an HTML5 banner: ' + thisWorkItem.format_src);

					newContent = React.createElement(bannerContent[thisWorkItem.link2]);

					// console.log('newContent = ' + newContent);
					// console.log(newContent);

					// gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: currentTargetDims[2], height: currentTargetDims[3], transformOrigin: '0 0', immediateRender: true });
					// gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: currentTargetDims[2], height: currentTargetDims[3], scale: bannerScale, transformOrigin: '0 0', immediateRender: true });
					// gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: targetDims[2], height: targetDims[3], scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

					bannerContainer_Ref.current.src = newContent;
					bannerContainer_Ref.current.style.left = currentTargetDims[0] + 'px';
					bannerContainer_Ref.current.style.top = currentTargetDims[1] + 'px';
					bannerContainer_Ref.current.style.width = targetDims[2] / bannerScale + 'px';
					bannerContainer_Ref.current.style.height = targetDims[3] / bannerScale + 'px';

					gsap.set([bannerContainer_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

					setBannerShow(newContent);

					//#endregion - - - - - - - - - - - ELSE IF 'html5'... - - - - - - - - - - -
				}

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: banner --------------------
			}

			case 'html5':
			case 'website':
			case 'mobile': {
				//#region -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------

				console.log('');
				console.log('-------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------');
				console.log('I AM either HTML5, WEBSITE or MOBILE: ' + thisWorkItem.format);
				console.log('thisWorkItem = ' + thisWorkItem);
				console.log(thisWorkItem);
				// console.log('thisWorkItem.format_src = ' + thisWorkItem.format_src);
				// console.log(thisWorkItem.format_src);


				clearContent();

				iframeSRC;

				switch (true) {

					case thisWorkItem.format_src === 'external':

						iframeSRC = thisWorkItem.link2;

						// // console.log('');
						// console.log('iframeSRC = ' + iframeSRC);
						// console.log(iframeSRC);

						webiFrame_Ref.current.src = iframeSRC;
						webiFrame_Ref.current.style.width = thisWorkItem.mwidth + 'px';
						webiFrame_Ref.current.style.height = thisWorkItem.mheight + 'px';
						webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkItem.mwidth) / 2 + 'px';

						setWebiFrameOpen(true);

						break;

					case thisWorkItem.format_src === 'video':

						iframeSRC = videoLoc + thisWorkItem.link2;

						// // console.log('');
						// console.log('iframeSRC = ' + iframeSRC);
						// console.log(iframeSRC);

						// let newVidWidth;
						// let newVidHeight;

						// // let vidScale = 0.5;
						// let vidScale = 0.8;


						//#region -------------------- SEE: resizeContent(thisContent) --------------------

						// switch (true) {

						//     case thisWorkItem.mwidth >= window.innerWidth && thisWorkItem.mwidth >= thisWorkItem.mheight:

						//         // console.log('This content is TOO WIDE & LANDSCAPE');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidWidth = window.innerWidth * vidScale;
						//         newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         break;

						//     case thisWorkItem.mwidth >= window.innerWidth && thisWorkItem.mwidth <= thisWorkItem.mheight:

						//         // console.log('This content is TOO WIDE & PORTRAIT');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidWidth = window.innerWidth * vidScale;
						//         newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         break;

						//     case thisWorkItem.mheight >= window.innerHeight && thisWorkItem.mwidth >= thisWorkItem.mheight:

						//         // console.log('This content is TOO TALL & LANDSCAPE');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidHeight = window.innerHeight * vidScale;
						//         newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);

						//         break;

						//     case thisWorkItem.mheight >= window.innerHeight && thisWorkItem.mwidth <= thisWorkItem.mheight:

						//         // console.log('This content is TOO TALL & PORTRAIT');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidHeight = window.innerHeight * vidScale;
						//         newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);

						//         break;

						//     default:

						//         // console.log('VIDEO: DEFAULT');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         // newVidWidth = thisWorkItem.mwidth;
						//         // newVidHeight = thisWorkItem.mheight;

						//         // newVidWidth = window.innerWidth * vidScale;
						//         // newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         if (window.innerWidth / window.innerHeight <= thisWorkItem.mwidth / thisWorkItem.mheight) {

						//             // console.log('thisWorkItem.mwidth / thisWorkItem.mheight = ' + thisWorkItem.mwidth / thisWorkItem.mheight);
						//             // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

						//             // console.log('This content FITS and I want it to behave LANDSCAPE');

						//             newVidWidth = window.innerWidth * 0.75;
						//             newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         } else {

						//             // console.log('thisWorkItem.mwidth / thisWorkItem.mheight = ' + thisWorkItem.mwidth / thisWorkItem.mheight);
						//             // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

						//             // console.log('This content FITS and I want it to behave PORTRAIT');

						//             newVidHeight = window.innerHeight * 0.75;
						//             newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);
						//         }

						//         break;
						// }

						//#endregion -------------------- SEE: resizeContent(thisContent) --------------------


						resizeContent(thisWorkItem);

						console.log('resizeContent(thisWorkItem) = ' + resizeContent(thisWorkItem));
						console.log('resizeContent(thisWorkItem)[0] = ' + resizeContent(thisWorkItem)[0]);
						console.log('resizeContent(thisWorkItem)[1] = ' + resizeContent(thisWorkItem)[1]);


						// setVideoWidth(newVidWidth);
						// setVideoHeight(newVidHeight);
						setVideoWidth(resizeContent(thisWorkItem)[0]);
						setVideoHeight(resizeContent(thisWorkItem)[1]);

						setLoadedVideo(iframeSRC);
						setVideoOpen(true);

						break;

					default:

						iframeSRC = remoteLoc + thisWorkItem.album_id + '/' + thisWorkItem.link2;
						// iframeSRC = remoteLoc + thisWorkItem.album_id + '/' + thisWorkItem.link;

						// // console.log('');
						// console.log('iframeSRC = ' + iframeSRC);
						// console.log(iframeSRC);

						webiFrame_Ref.current.src = iframeSRC;
						webiFrame_Ref.current.style.width = thisWorkItem.mwidth + 'px';
						webiFrame_Ref.current.style.height = thisWorkItem.mheight + 'px';
						webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkItem.mwidth) / 2 + 'px';

						setWebiFrameOpen(true);

						break;
				}

				// setWebiFrameOpen(true);


				//#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

				// if (thisWorkItem.mheight >= window.innerHeight) {
				// if (thisWorkItem.mwidth >= window.innerWidth || thisWorkItem.mheight >= window.innerHeight) {
				if (thisWorkItem.mwidth >= window.innerWidth || thisWorkItem.mheight >= window.innerHeight || thisWorkItem.mwidth <= window.innerWidth * 0.5 || thisWorkItem.mheight <= window.innerHeight * 0.5) {

					//#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

					// let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.9;
					// let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.875;
					let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.75;
					// let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.5;
					let thisY = (window.innerHeight - (thisWorkItem.mheight * thisScale)) / 2;

					gsap.set([webiFrame_Ref.current], { top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });

					//#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

				} else {

					//#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -

					let thisY = (window.innerHeight - thisWorkItem.mheight) / 2;

					gsap.set([webiFrame_Ref.current], { top: thisY, transformOrigin: '50% 0', immediateRender: true });

					//#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -
				}

				//#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------
			}

			case 'video': {
				//#region -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------

				// console.log('');
				// console.log('-------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------');
				// console.log(thisWorkItem);
				// console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);
				// console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
				// console.log('window.innerWidth * 0.8 = ' + window.innerWidth * 0.8);


				clearContent();

				let videoSRC = videoLoc + thisWorkItem.link2;

				// // console.log('');
				// console.log('videoSRC = ' + videoSRC);
				// console.log(videoSRC);

				// let newVidWidth;
				// let newVidHeight;

				// // let vidScale = 0.5;
				// let vidScale = 0.8;


				resizeContent(thisWorkItem);

				// console.log('resizeContent(thisWorkItem) = ' + resizeContent(thisWorkItem));
				// console.log('resizeContent(thisWorkItem)[0] = ' + resizeContent(thisWorkItem)[0]);
				// console.log('resizeContent(thisWorkItem)[1] = ' + resizeContent(thisWorkItem)[1]);

				// console.log('newVidWidth = ' + newVidWidth + '     newVidHeight = ' + newVidHeight);

				// setVideoWidth(newVidWidth);
				// setVideoHeight(newVidHeight);
				setVideoWidth(resizeContent(thisWorkItem)[0]);
				setVideoHeight(resizeContent(thisWorkItem)[1]);

				setLoadedVideo(videoSRC);
				setVideoOpen(true);

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------
			}

			default: {
				//#region -------------------- ASSIGN NEW CONTENT: default --------------------

				console.log('');
				console.log('I AM THE DEFAULT: ' + thisWorkItem.format);

				clearContent();

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: default --------------------
			}
		}
	}

	//#endregion -------------------- FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------

	//#endregion ==================== MARK: CONSTs / FUNCTIONs ====================


	//#region ==================== MARK: useRef DEFs ====================

	// const chipNav_Ref = useRef(null);
	// const chipToggleBtn_Ref = useRef(null);
	const workNav_Ref = useRef(null);

	const employerNav_Ref = useRef(null);
	const activeEmplDiv_Ref = useRef(null);

	const typeNav_Ref = useRef(null);
	const activeTypeDiv_Ref = useRef(null);

	const toggleNav_Ref = useRef(null);
	const toggleBtn_Ref = useRef(null);
	// const navToggleBtn_Ref = useRef(null);

	// init one ref to store the future isotope object
	// const isotope_Ref = useRef();
	const isotopeGallery_Ref = useRef();
	// const isotopeChips_Ref = useRef();

	// const isotopeChips_Ref = useRef(null);
	const galleryContainer_Ref = useRef(null);
	const chipContainer_Ref = useRef(null);

	const bannerContainer_Ref = useRef(null);
	const banneriFrame_Ref = useRef(null);

	const iframeContainer_Ref = useRef(null);
	const webiFrame_Ref = useRef(null);

	const videoContainer_Ref = useRef(null);
	const videoPlayer_Ref = useRef(null);

	//#endregion ==================== MARK: useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// REF: https://jack72828383883.medium.com/how-to-preload-images-into-cache-in-react-js-ff1642708240
	// const [isLoading, setIsLoading] = useState(true);

	// const [isLoaded, setIsLoaded] = useState(false);

	// const [browserDetect, setBrowserDetect] = useState();
	// const [browserDetect, setBrowserDetect] = useState(null);
	// const [browserDetect, setBrowserDetect] = useState('desktop');
	// const [browserDetect, setBrowserDetect] = useState([]);

	// const [isotopeToggle, setIsotopeToggle] = useState(true);
	// const [galleryVisibility, setGalleryVisibility] = useState(false);
	// const [chipVisibility, setChipVisibility] = useState(true);
	// const [galChipToggle, setGalChipToggle] = useState(true);

	// const [filterKey, setFilterKey] = useState('*');
	// const [filterKey, setFilterKey] = useState('all');
	// const [filterKey, setFilterKey] = useState('kiehls');
	// const [filterKey, setFilterKey] = useState();
	// const [filterKey, setFilterKey] = useState(null);

	// const [workNavToggleText, setWorkNavToggleText] = useState('View by employer');
	const [workNavToggleText, setWorkNavToggleText] = useState('View by type');
	const [workNavToggleBtn, setWorkNavToggleBtn] = useState(true);
	// const [workNavToggleBtn, setWorkNavToggleBtn] = useState(false);

	const [bannerShow, setBannerShow] = useState();
	// const [bannerShow, setBannerShow] = useState(null);
	const [banneriFrameOpen, setBanneriFrameOpen] = useState(false);

	const [webiFrameOpen, setWebiFrameOpen] = useState(false);

	const [videoOpen, setVideoOpen] = useState(false);
	// const [loadedVideo, setLoadedVideo] = useState(null);
	// const [videoWidth, setVideoWidth] = useState(null);
	// const [videoHeight, setVideoHeight] = useState(null);
	const [loadedVideo, setLoadedVideo] = useState();
	const [videoWidth, setVideoWidth] = useState();
	const [videoHeight, setVideoHeight] = useState();

	//#endregion ==================== MARK: useState DEFs ====================


	//#region ==================== MARK: useEffect(s) ====================

	//#region -------------------- useEffect: Close modal on ESC key press --------------------

	useEffect(() => {

		const handleESCKeyDown = (e) => {
			if (e.key === "Escape") {
				// clearContent();

				setBannerShow(null);
				// bannerContainer_Ref.current.removeChild(children);
				// bannerContainer_Ref.current.children.remove();
				// bannerContainer_Ref.current.children = null;
				// document.getElementById('bannerContainerID').children.remove();

				setBanneriFrameOpen(false);
				banneriFrame_Ref.current.src = '';
				bannerContainer_Ref.current.style.left = 0 + 'px';
				bannerContainer_Ref.current.style.top = 0 + 'px';
				gsap.set([bannerContainer_Ref.current], { scale: 0, transformOrigin: '0 0', immediateRender: true });

				setWebiFrameOpen(false);
				webiFrame_Ref.current.src = '';

				setVideoOpen(false);
				setLoadedVideo(null);
			}
		};

		if (bannerShow || banneriFrameOpen || webiFrameOpen || videoOpen ) {
			document.addEventListener("keydown", handleESCKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleESCKeyDown);
		};

	// }, [bannerShow, banneriFrameOpen, webiFrameOpen, videoOpen, clearContent]);
	}, [bannerShow, banneriFrameOpen, webiFrameOpen, videoOpen]);

	//#endregion -------------------- useEffect: Close modal on ESC key press --------------------


	//#region -------------------- useEffect: browserDetect => workNavIN, workNavTL --------------------

	// const workNavTL = new gsap.timeline().pause();

	useEffect(() => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- useEffect: browserDetect => workNavIN, workNavTL --------------------');
		// console.log('browserDetect = ' + browserDetect);

		// // const ua = new UAParser().getResult();

		// // console.log('ua = ' + ua);
		// console.log(ua);
		// console.log('ua.device.type = ' + ua.device.type);
	
		// console.log('workNav_Ref.current.id = ' + workNav_Ref.current.id);
		// console.log('workNav_Ref.current.getBoundingClientRect().width = ' + workNav_Ref.current.getBoundingClientRect().width);
		// console.log('workNav_Ref.current.getBoundingClientRect().height = ' + workNav_Ref.current.getBoundingClientRect().height);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// workNavWidth = employerNav_Ref.current.getBoundingClientRect().width;
		// workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

		workNavWidth = workNav_Ref.current.getBoundingClientRect().width;
		workNavHeight = workNav_Ref.current.getBoundingClientRect().height;

		// console.log('workNavWidth = ' + workNavWidth);
		// console.log('workNavHeight = ' + workNavHeight);


		if (ua.device.type === undefined) {

			// setBrowserDetect('desktop');

			workNavIN
				// .fromTo([workNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')
				// .fromTo([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')
				// .fromTo(['.workNavContainer'], { y: 0, autoAlpha: 1 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame00')

				// .to([workNav_Ref.current], { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')
				// .to([workNav_Ref.current], { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame00')
				// .to([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame00')
				.fromTo([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });

				// .fromTo(['.employerNav'], { y: 0, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 });
				// .fromTo(['.workNavBar'], { y: 0, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 });
				// .fromTo(['.workNavBar'], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
				// .fromTo(['.workNavBar'], { y: -workNav_Ref.current.getBoundingClientRect().height, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
			;

			workNavIN.play();
			// workNavIN.pause();

			workNavTL
				// .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// // .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// .fromTo([typeNav_Ref.current], { y: workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// // .to([typeNav_Ref.current], { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')

				// // .fromTo([employerNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// // .fromTo([typeNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// // // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')

				.fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				.fromTo([typeNav_Ref.current], { y: workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 0, duration: 0.5 }, 'frame01')

				// // .fromTo([employerNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
			;

			// workNavIN.play();
			workNavTL.pause();

		} else {

			// setBrowserDetect(ua.device.type);

			workNavIN
				// .fromTo([workNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')
				.fromTo([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame00')
			;

			// workNavIN.play();
			workNavIN.pause();

			workNavTL
				.fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				.fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
				// .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
			;

			workNavTL.pause();
		}

		// workNavIN.play();
		// workNavTL.pause();


		// if (workNavToggleBtn) {

		// 	// setWorkNavToggleBtn(false);

		// 	// workNavIN.restart(0);
		// 	// workNavIN.seek(0);

		// 	workNavTL.restart();
		// 	// workNavTL.seek('start');
		// 	// workNavTL.seek('end');
		// 	// workNavTL.play();
		// }


		//#region -------------------- FINDIN' OUT MORE SH*T --------------------

		// console.log('post-if...');
		// console.log('ua.device.type = ' + ua.device.type);
		// console.log('browserDetect = ' + browserDetect);

		//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------

	// }, )
	}, [])
	// }, [browserDetect])
	// }, [workNavToggleBtn])
	// }, [browserDetect, workNavToggleBtn])
	// }, [browserDetect, workNavToggleBtn, workNavTL])

	//#endregion -------------------- useEffect: browserDetect => workNavIN, workNavTL --------------------


	//#region -------------------- useEffect: workNavTL --------------------

	// useEffect(() => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	// console.log('');
	// 	// console.log('-------------------- useEffect: workNavTL --------------------');
	// 	// console.log('workNavTL = ' + workNavTL);
	// 	// // console.log('isBrowser = ' + isBrowser);
	// 	// console.log('browserDetect = ' + browserDetect);
	// 	// console.log('browserDetect = ' + browserDetect);
	// 	// console.log('workNavToggleText = ' + workNavToggleText);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	// 	// let workNavWidth = employerNav_Ref.current.getBoundingClientRect().width;
	// 	// let workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

	// 	workNavWidth = employerNav_Ref.current.getBoundingClientRect().width;
	// 	workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

	// 	// console.log('');
	// 	// console.log('workNavWidth = ' + workNavWidth);
	// 	// console.log('workNavHeight = ' + workNavHeight);


	// 	//#region -------------------- workNavIN --------------------

	// 	// gsap.to(['.workNavBar'], { y: workNavHeight, opacity: 1, duration: 0.375 });
	// 	// gsap.to(['.workNavBar'], { y: workNavHeight, opacity: 1, duration: 0.375 });

	// 	// gsap.fromTo(['.workNavBar'], { y: -workNavHeight, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01');
	// 	// gsap.fromTo(['.workNavBar'], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
	// 	// gsap.fromTo([toggleNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });

	// 	// workNavIN
	// 	// 	.fromTo(['.workNavBar'], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
	// 	// ;

	// 	// workNavIN.play();

	// 	//#endregion -------------------- workNavIN --------------------


	// 	//#region -------------------- workNavTL: desktop vs mobile --------------------

	// 	// if (isBrowser === true) {
	// 	// if (browserDetect === 'desktop') {
	// 	// if (ua.device.type === undefined) {
	// 	if (ua.device.type === undefined) {

	// 		workNavTL
	// 			.fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
	// 			.fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
	// 			// .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')

	// 			// .fromTo([employerNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
	// 			// .fromTo([typeNav_Ref.current], { y: -workNavHeight, autoAlpha: 1 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 }, 'frame01')
	// 			// // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')
	// 		;

	// 		// workNavTL.pause();

	// 	} else {

	// 		workNavTL
	// 			.fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
	// 			.fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
	// 			// .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
	// 		;
	// 	}

	// 	//#endregion -------------------- workNavTL: desktop vs mobile --------------------


	// 	// // console.log('');
	// 	// // // console.log('typeNav_Ref.current.offsetTop = ' + typeNav_Ref.current.offsetTop);
	// 	// console.log('workNavToggleBtn = ' + workNavToggleBtn);
	// 	// // console.log('workNavToggleText = ' + workNavToggleText);


	// 	// if (workNavToggleBtn) {
	// 	// // if (!workNavToggleBtn) {
	// 	// 	workNavTL.restart();
	// 	// 	// workNavTL.reverse();
	// 	// 	// workNavTL.time(0).kill();
	// 	// 	// workNavTL.time(0);
	// 	// 	// workNavTL.seek('end');
	// 	// }

	// 	// // workNavTL.seek('end', false);

	// }, [])
	// // }, [workNavHeight])
	// // }, [workNavToggleBtn])
	// // }, [browserDetect, workNavToggleBtn])
	// // }, [browserDetect, workNavToggleBtn, workNavToggleText])

	//#endregion -------------------- useEffect: workNavTL --------------------


	//#region -------------------- useEffect: workNavToggleBtn --------------------

	useEffect(() => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- useEffect: workNavToggleBtn --------------------');
		// console.log('workNavToggleBtn = ' + workNavToggleBtn);

		// // console.log('');
		// console.log('employerNav_Ref.current.lastChild = ' + employerNav_Ref.current.lastChild);
		// console.log(employerNav_Ref.current.lastChild);

		// console.log('');
		// console.log('typeNav_Ref.current.lastChild = ' + typeNav_Ref.current.lastChild);
		// console.log(typeNav_Ref.current.lastChild);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// clearContent();

		if (workNavToggleBtn) {
			workNavTL.play();
			setWorkNavToggleText('View by type');
			// typeNav_Ref.current.lastChild.click();
		} else {
			workNavTL.reverse();
			setWorkNavToggleText('View by employer');
			// employerNav_Ref.current.lastChild.click();
		}

	// }, [])
	}, [workNavToggleBtn])
	// }, [workNavToggleBtn, workNavTL])
	// }, [workNavToggleBtn, employerNav_Ref])

	//#endregion -------------------- useEffect: workNavToggleBtn --------------------


	//#region -------------------- useEffect: initialize isotopeGallery object with configs --------------------

	useEffect(() => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- useEffect: initialize isotopeGallery object with configs --------------------');

		// console.log('isLoading = ' + isLoading);
		// console.log('isLoaded = ' + isLoaded);
		// console.log('isotopeGallery_Ref = ' + isotopeGallery_Ref);
		// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// let galleryImagesLoaded = require('imagesloaded');
		// let galleryImagesLoaded = { imagesloaded };

		// galleryImagesLoaded(workNav_Ref.current, function () {
		// imagesloaded(workNav_Ref.current, function () {

		// isotopeGallery_Ref.current = new Isotope('.galleryContainer', {
		isotopeGallery_Ref.current = new Isotope('.galleryContainer', {
			// initLayout: false,

			// itemSelector: '.filter-item',
			itemSelector: '.workItem',
			// itemSelector: '.chipItem',
			percentPosition: true,

			// layoutMode: 'masonry',
			// masonry: {
			// 	columnWidth: 100,
			// 	gutter: 20,
			// 	isFitWidth: true,
			// }

			layoutMode: 'packery',
			packery: {
				gutter: 20,
				// columnWidth: '.workItem',
				// rowHeight: 60,
				// horizontal: true
			}
		})

		// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);
		// console.log(isotopeGallery_Ref.current);

		// setIsLoaded(!isLoaded);

		// // cleanup
		// return () => isotopeGallery_Ref.current.destroy()

	// });
	}, [])
	// }, [isLoading])
	// }, [isLoaded])
	// }, [isLoading, isLoaded])

	//#endregion -------------------- useEffect: initialize isotopeGallery object with configs --------------------


	//#region -------------------- useEffect: initialize isotopeChips object with configs --------------------

	// useEffect(() => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	// console.log('');
	// 	// console.log('-------------------- useEffect: initialize isotopeChips object with configs --------------------');

	// 	// console.log('isLoading = ' + isLoading);
	// 	// console.log('isLoaded = ' + isLoaded);
	// 	// console.log('isotopeChips_Ref = ' + isotopeChips_Ref);
	// 	// console.log('isotopeChips_Ref.current = ' + isotopeChips_Ref.current);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	// 	// let chipsImagesLoaded = require('imagesloaded');
	// 	// let chipsImagesLoaded = { imagesloaded };

	// 	// chipsImagesLoaded(workNav_Ref.current, function () {
	// 	// imagesloaded(workNav_Ref.current, function () {

	// 	isotopeChips_Ref.current = new Isotope('.chipContainer', {

	// 		// itemSelector: '.filter-item',
	// 		// itemSelector: '.workItem',
	// 		itemSelector: '.chipItem',
	// 		percentPosition: true,

	// 		// layoutMode: 'masonry',
	// 		// masonry: {
	// 		// 	columnWidth: 100,
	// 		// 	gutter: 20,
	// 		// 	isFitWidth: true,
	// 		// }

	// 		layoutMode: 'packery',
	// 		packery: {
	// 			gutter: 20,
	// 			// columnWidth: '.chipItem',
	// 			// rowHeight: 60,
	// 			// horizontal: true
	// 		}
	// 	})

	// 	// console.log('isotopeChips_Ref.current = ' + isotopeChips_Ref.current);
	// 	// console.log(isotopeChips_Ref.current);

	// 	// setIsLoaded(!isLoaded);

	// 	// // cleanup
	// 	// return () => isotopeChips_Ref.current.destroy()

	// // });
	// }, [])
	// // }, [isLoading])
	// // }, [isLoaded])
	// // }, [isLoading, isLoaded])

	//#endregion -------------------- useEffect: initialize isotopeChips object with configs --------------------


	//#region -------------------- useEffect: handle filterKey change in galleryContainer --------------------
	// -------------------- imagesloaded: REF01: https://isotope.metafizzy.co/layout.html#imagesloaded --------------------
	// -------------------- imagesloaded: REF02: https://imagesloaded.desandro.com/#webpack --------------------
	// -------------------- imagesloaded: REF03: https://github.com/desandro/imagesloaded --------------------

	useEffect(() => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- useEffect: handle filterKey change in galleryContainer --------------------');
		// // console.log('filterKey = ' + filterKey);
		// // console.log('isLoading = ' + isLoading);

		// console.log('isotopeGallery_Ref = ' + isotopeGallery_Ref);
		// console.log(isotopeGallery_Ref);
		// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);
		// console.log(isotopeGallery_Ref.current);

		// console.log('');

		// console.log('isotopeChips_Ref = ' + isotopeChips_Ref);
		// console.log(isotopeChips_Ref);
		// console.log('isotopeChips_Ref.current = ' + isotopeChips_Ref.current);
		// console.log(isotopeChips_Ref.current);

		// console.log('');

		// console.log('workNav_Ref = ' + workNav_Ref);
		// console.log(workNav_Ref);
		// console.log('workNav_Ref.current = ' + workNav_Ref.current);
		// console.log(workNav_Ref.current);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// let imagesLoaded = require('imagesloaded');

		if (galleryContainer_Ref.current) {
			imagesLoaded(galleryContainer_Ref.current, function () {
			// imagesloaded(galleryContainer_Ref.current, function () {

				filterKey === '*'
				// filterKey === 'all'
				// filterKey === 'null'
					// ? isotopeGallery_Ref.current.arrange({ filter: `*` })
					// // ? isotope_Ref.current.arrange({ filter: `all` })
					// : isotope_Ref.current.arrange({ filter: `.${filterKey}` });

					// ? isotopeGallery_Ref.current.arrange({ filter: `*` })
					// ? isotopeGallery_Ref.current.arrange({ filter: `all` })
					? isotopeGallery_Ref.current.arrange({ filter: `null` })
					: isotopeGallery_Ref.current.arrange({ filter: `.${filterKey}` });

				window.scrollTo(0, 0);

				// setActiveEmplDiv(filterKey);
				// setIsLoaded(true);

			});
		}

	// }, [filterKey])
	}, [filterKey, galleryContainer_Ref])
	// }, [filterKey, chipContainer_Ref, galleryContainer_Ref])
	// }, [filterKey, isLoading])

	//#endregion -------------------- useEffect: handle filterKey change in galleryContainer --------------------


	//#region -------------------- useEffect: chipContainer --------------------
	// -------------------- imagesloaded: REF01: https://isotope.metafizzy.co/layout.html#imagesloaded --------------------
	// -------------------- imagesloaded: REF02: https://imagesloaded.desandro.com/#webpack --------------------
	// -------------------- imagesloaded: REF03: https://github.com/desandro/imagesloaded --------------------

	// useEffect(() => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	// console.log('');
	// 	// console.log('-------------------- useEffect: handle filterKey change in galleryContainer --------------------');
	// 	// // console.log('filterKey = ' + filterKey);
	// 	// // console.log('isLoading = ' + isLoading);

	// 	// console.log('isotopeGallery_Ref = ' + isotopeGallery_Ref);
	// 	// console.log(isotopeGallery_Ref);
	// 	// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);
	// 	// console.log(isotopeGallery_Ref.current);

	// 	// console.log('');

	// 	// console.log('isotopeChips_Ref = ' + isotopeChips_Ref);
	// 	// console.log(isotopeChips_Ref);
	// 	// console.log('isotopeChips_Ref.current = ' + isotopeChips_Ref.current);
	// 	// console.log(isotopeChips_Ref.current);

	// 	// console.log('');

	// 	// console.log('workNav_Ref = ' + workNav_Ref);
	// 	// console.log(workNav_Ref);
	// 	// console.log('workNav_Ref.current = ' + workNav_Ref.current);
	// 	// console.log(workNav_Ref.current);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	// 	// let imagesLoaded = require('imagesloaded');

	// 	// if (isotopeChips_Ref.current) {
	// 	// 	imagesLoaded(isotopeChips_Ref.current, function () {
	// 	if (chipContainer_Ref.current) {
	// 		imagesLoaded(chipContainer_Ref.current, function () {

	// 			// filterKey === '*';
	// 			filterKey === 'all';
	// 				// ? isotopeChips_Ref.current.arrange({ filter: `*` })
	// 				// ? isotopeChips_Ref.current.arrange({ filter: `all` })
	// 				// ? isotopeChips_Ref.current.arrange({ filter: `null` })

	// 				// : isotopeChips_Ref.current.arrange({ filter: `.${filterKey}` });
	// 				// : isotopeChips_Ref.current.arrange({ filter: `all` });

	// 			window.scrollTo(0, 0);

	// 			// setActiveEmplDiv(filterKey);
	// 			// setIsLoaded(true);

	// 		});
	// 	}

	// }, [filterKey])
	// // }, [filterKey, isLoading])

	//#endregion -------------------- useEffect: handle filterKey change in galleryContainer --------------------

	//#endregion ==================== MARK: useEffect(s) ====================


	//#region ==================== MARK: useCallback: clearContent() ====================

	// const handleESCKeyDown = useCallback((clearContent) => {

	// 	setBannerShow(null);
	// 	// bannerContainer_Ref.current.removeChild(children);
	// 	// bannerContainer_Ref.current.children.remove();
	// 	// bannerContainer_Ref.current.children = null;
	// 	// document.getElementById('bannerContainerID').children.remove();

	// 	setBanneriFrameOpen(false);
	// 	banneriFrame_Ref.current.src = '';
	// 	bannerContainer_Ref.current.style.left = 0 + 'px';
	// 	bannerContainer_Ref.current.style.top = 0 + 'px';
	// 	gsap.set([bannerContainer_Ref.current], { scale: 0, transformOrigin: '0 0', immediateRender: true });

	// 	setWebiFrameOpen(false);
	// 	webiFrame_Ref.current.src = '';

	// 	setVideoOpen(false);
	// 	setLoadedVideo(null);
	// });

	//#endregion ==================== MARK: useCallback: clearContent() ====================


	//#region ==================== MARK: COMPONENTS ====================

	//#region -------------------- MARK: workNavContainer: RenderChips: chipItem[s] --------------------

	// const RenderChips = () => {
	function RenderChips() {
	// function RenderChips({onClick}) {
	// function RenderChips(props) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: RenderChips --------------------');
		// console.log('employers = ' + employers);
		// console.log(employers);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		// let thisStartMonth = props.dateStart.slice(0, -6);
		// let thisStartYear = props.dateStart.slice(6);

		// let thisEndMonth = props.dateEnd.slice(0, -6);
		// let thisEndYear = props.dateEnd.slice(6);

		// let thisDateStart = thisStartMonth + '/' + thisStartYear;
		// let thisDateEnd = thisEndMonth + '/' + thisEndYear;


		return filterEmployer.map((employer) =>

			<div
				// className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'}
				// className={`chipItem ${employer.format} ${employer.album_id} masonryWidth${employer.masonryWidth}`}
				// className={`chipItem ${employer.album_id} masonryWidth${2}`}
				// className={`chipItem ${employer.album_id} masonryWidth${3}`}
				// className={`chipItem ${employer.album_id}`}
				className={`chipItem masonryWidth${3}`}
				id={employer.album_id + '_ChipID'}
				// key={employer.album_index}
				key={employer.album_id}
				// key={employer.album_index + '_chip'}
				// navprop={employer.album_index + '_chip'}
				// navprop={employer.album_id}
				// data-navprop={employer.album_id}
				data-navprop={employer.album_id + '_ChipDATA'}

				onClick={handleFilterKeyChange(employer.album_id)}
				// onClick={() => {
				// 	handleFilterKeyChange(employer.album_id)
				// 	handleChipToggle()
				// }}
				// ===> *** INSTEAD... *** <=== make this click its counterpart in workNavBar

				// onClick={handleFilterKeyChange(props)}
				// onClick={handleFilterKeyChange}
				// onClick={() => handleFilterKeyChange(employer.album_id)}
				// onClick={() => {console.log('chip click!'); handleFilterKeyChange(employer.album_id);}}
				// onClick={() => onClick}
				// onClick={(props) => onClick}
				// onClick={() => {handleFilterKeyChange(employer.album_id); setFilterKey(employer.album_id);}}

				// ref={chipNav_Ref}

				// handleChipToggle={handleChipToggle}
			>

				{/* <img
					{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
					{employer.chippath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.chippath} alt={employer.employer} /> : employer.employer}
					{employer.chippath !== '#' ? <img className='chipItem' src={remoteLoc + employer.chippath} alt={employer.employer} /> : null}
				/> */}

				<img
					// className={`chipItem ${employer.album_id} masonryWidth${2}`}
					className='chipNavImg'
					// id={employer.album_id + '_ID'}
					// key={employer.album_index}
					src={remoteLoc + employer.chippath} alt={employer.employer}
					// alt={'chipItem: ' + employer.album_id}
				/>

				<div className='chipInfo'>
					<h3>{employerData[employer.album_index].employer}</h3>
					<p>{employer.caption} {employer.date_start} - {employer.date_end}</p>
					{/* {thisDateStart !== thisDateEnd ? <div className='employerDates'>{thisDateStart} - {thisDateEnd}</div> : <div className='employerDates'>{thisDateEnd}</div>} */}
				</div>

			</div>
		);
	};

	//#endregion -------------------- MARK: workNavContainer: RenderChips: chipItem[s] --------------------


	//#region -------------------- MARK: workNavContainer: workNav: RenderEmployers --------------------

	// const renderEmployers = () => {
	function RenderEmployers() {	
	// function RenderEmployers(props) {	

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: renderEmployers --------------------');

		// console.log('props = ' + props);
		// console.log(props);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		return filterEmployer.map((employer) =>

			// <div className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={employer.album_id + '_NavID'} key={employer.album_index} onClick={handleFilterKeyChange(employer.album_id)}>
			<div
				// className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'}
				// className={employer.logopath !== `#` ? `workNavItemLogo ${employer.album_id}` : `workNavItem ${employer.album_id}`}
				className={employer.logopath !== `#` ? `workNavItemLogo` : `workNavItem`}
				id={employer.album_id + '_NavID'}
				// key={employer.album_index}
				// key={employer.album_index + '_chip'}
				key={employer.album_id + '_chip'}
				// navprop={employer.album_id}
				data-navprop={employer.album_id}

				onClick={handleFilterKeyChange(employer.album_id)}
				// onClick={handleFilterKeyChange(this, employer.album_id)}

				// ref={employerNav_Ref}
			>
				{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
			</div>

			// <div className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={employer.album_id + 'NavID'} key={employer.album_index} onClick={handleFilterKeyChange(employer.album_id)} data-filter=".kiehls">
			// 	{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
			// </div>

			// <div className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={employer.album_id + 'NavID'} key={employer.album_index}>
			// 	{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
			// </div>
		);
	};

	//#endregion -------------------- MARK: workNavContainer: workNav: RenderEmployers --------------------


	//#region -------------------- MARK: workNavContainer: workNav: RenderTypes --------------------

	// const RenderTypes = () => {
	function RenderTypes() {

		// console.log('');
		// console.log('-------------------- MARK: RenderTypes --------------------');

		return filterType.map((e) =>
			<div className='workNavItem' id={e.label + '_NavID'} key={e.key} onClick={handleFilterKeyChange(e.value)}>{e.label}</div>
			// <div className='workNavItem' id={e.label + 'NavID'} key={e.key}>{e.label}</div>
		);
	};

	//#endregion -------------------- MARK: workNavContainer: workNav: RenderTypes --------------------


	//#region -------------------- MARK: workNavContainer: renderLogos: workItem[s] *** NG *** --------------------

	// const renderLogos = () => {

	// 	console.log('');
	// 	console.log('-------------------- renderLogos --------------------');

	// 	// // return workData.filter((isLogo) => isLogo.logo !== '#').filter((isVisible) => isVisible.visiblity).map((workItem, index) =>
	// 	// return employerData.filter((isLogo) => isLogo.logo !== '#').filter((isVisible) => isVisible.visiblity).map((workItem, index) =>

	// 	// 	<div
	// 	// 		className={`workItem ${workItem.format} ${workItem.album_id} masonryWidth${workItem.masonryWidth}`}
	// 	// 		id={workItem.album_id + '_' + workItem.image_index + '_ID'}
	// 	// 		key={index}
	// 	// 		onClick={workItem.link !== '#' ? (event) => loadContent(event, workItem) : undefined}
	// 	// 		style={{ cursor: workItem.availability && 'pointer' }}
	// 	// 	>

	// 	// 		qfrwefr

	// 	// 		<img
	// 	// 			logo={remoteLoc + '/logos/' + workItem.logo}
	// 	// 			src={remoteLoc + '/logos_compressed/' + workItem.logo}
	// 	// 			alt={'workItem: ' + workItem.album_id}
	// 	// 		/>

	// 	// 	</div>
	// 	// );

	// 	return filterEmployer.map((e) =>

	// 		<div
	// 			// className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'}
	// 			// className={`workItem ${e.format} ${e.album_id} masonryWidth${e.masonryWidth}`}
	// 			className={`workItem ${e.album_id}`}
	// 			id={e.album_id + '_ID'}
	// 			key={e.album_index}
	// 			// onClick={handleFilterKeyChange(e.album_id)}
	// 		>

	// 			{e.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + e.logopath} alt={e.employer} /> : e.employer}

	// 		</div>
	// 	);
	// };

	//#endregion -------------------- MARK: workNavContainer: renderLogos: workItem[s] *** NG *** --------------------


	//#region -------------------- MARK: galleryContainer: RenderWork: workItem[s] --------------------

	// const RenderWork = () => {
	function RenderWork() {

		// console.log('');
		// console.log('-------------------- RenderWork --------------------');

		// return workData.filter((isSrc) => isSrc.src !== '#').map((workItem, index) =>
		return workData.filter((isSrc) => isSrc.src !== '#').filter((isVisible) => isVisible.visiblity).map((workItem, index) =>

			<div
				// className={`workItem ${workItem.format} ${workItem.album_id} masonryWidth${workItem.masonryWidth} masonryHeight${workItem.masonryHeight}`}
				className={`workItem ${workItem.format} ${workItem.album_id} masonryWidth${workItem.masonryWidth}`}
				// id={workItem.album_id + 'DivID' + index}
				id={workItem.album_id + '_' + workItem.image_index + '_ID'}
				key={index}
				// onClick={(event) => loadContent(event, workItem)}
				// onClick={workItem.availability ? (event) => loadContent(event, workItem) : undefined}
				onClick={workItem.link !== '#' ? (event) => loadContent(event, workItem) : undefined}
				// style={{ cursor: workItem.availability && 'pointer'}}
				style={{ cursor: workItem.availability && 'pointer' }}
				// style={{ cursor: workItem.link !== '#' && 'pointer' }}
			>

				<img
					src={remoteLoc + workItem.album_id + '/sl/' + workItem.src}
					alt={'workItem: ' + workItem.album_id}
				/>

				<div className='itemInfo'>
					{/* <h3 className='masonry-title'>{employerData[workItem.album_index].employer}</h3>
					<p className='masonry-description'>{workItem.caption}</p> */}
					<h3>{employerData[workItem.album_index].employer}</h3>
					<p>{workItem.caption}</p>
					{/* <p>{workItem.caption} - {workItem.format}</p> */}
				</div>

			</div>
		);
	};

	//#endregion -------------------- MARK: galleryContainer: RenderWork: workItem[s] --------------------


	//#region -------------------- MARK: galleryContainer: LoaderImage *** TKTK *** --------------------

	// const LoaderImage = () => {
	// // function LoaderImage() {

	// 	// console.log('');
	// 	// console.log('-------------------- MARK: galleryContainer: LoaderImage *** TKTK *** --------------------');


	// 	// const override = css`
	// 	const override = `
	// 		color: #ff0000;
	// 		display: block;
	// 		margin: 0 auto;
	// 		border-color: #00ff00;
	// 	`;


	// 	return (

	// 		<div className='loadingContainer' id='loadingContainerID'>
	// 			<div className='loadingImage sweet-loading' id='loadingImageID'>
	// 				<FadeLoader css={override} size={500} loading={isLoading} />
	// 				<br />
	// 				LOADING...
	// 			</div>
	// 		</div>
	// 	)
	// }

	//#endregion -------------------- MARK: galleryContainer: LoaderImage *** TKTK *** --------------------


	//#region -------------------- MARK: galleryContainer: carousel REF: *** TKTK *** --------------------

		// ***** TO COME *****

	//#endregion -------------------- MARK: galleryContainer: carousel REF: *** TKTK *** --------------------

	//#endregion ==================== MARK: COMPONENTS ====================


	// workNavIN.play();


	//#region ==================== FINDIN' OUT MORE SH*T ====================

	// console.log('');
	// console.log('galleryContainer_Ref = ' + galleryContainer_Ref);
	// console.log(galleryContainer_Ref);
	// console.log('galleryContainer_Ref.current = ' + galleryContainer_Ref.current);

	// console.log('');
	// console.log('chipContainer_Ref = ' + chipContainer_Ref);
	// console.log(chipContainer_Ref);
	// console.log('chipContainer_Ref.current = ' + chipContainer_Ref.current);

	//#endregion ==================== FINDIN' OUT MORE SH*T ====================


	return (
		<>

		{/* #region ------------------------- MARK: galleryContainer ------------------------- */}

			{/* <div className='galleryContainer' id='galleryContainerID'> */}
			{/* <div className='galleryContainer' id='galleryContainerID' ref={galleryContainer_Ref}> */}
			{/* <div className='galleryContainer' id='galleryContainerID' style={{ visibility: galleryVisibility ? "visible" : "hidden" }} ref={galleryContainer_Ref}> */}

			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: galleryVisibility ? "visible" : "hidden" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: galChipToggle ? "hidden" : "visible" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: galChipToggle ? "visible" : "hidden" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: chipVisibility ? "hidden" : "visible" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: chipVisibility ? "visible" : "hidden" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: chipvisibility ? "hidden" : "visible" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: chipvisibility ? "visible" : "hidden" }} ref={galleryContainer_Ref}> */}
			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: locationWork.state.chipState.chipvisibility ? "hidden" : "visible" }} ref={galleryContainer_Ref}> */}

			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ display: chipvisibility ? "none" : "flex" }} ref={galleryContainer_Ref}> */}

			<div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: isChipVisible ? "hidden" : "visible" }} ref={galleryContainer_Ref}>

				{RenderWork()}
				{/* <RenderWork /> */}

				{/* {renderLogos()} */}
				{/* {RenderChips()} */}

				{/* <LoaderImage /> */}

				{/* {isLoading ? <LoaderImage /> : RenderWork()} */}

				{/* <Suspense fallback={<LoaderImage />}>
					{RenderWork()}
				</Suspense> */}


			{/* #region ------------------------- MARK: BANNERS: REACT ------------------------- */}

				{/* <div className='bannerContainer' id='bannerContainerID'> */}
				<div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
					{bannerShow}
				</div>

			{/* #endregion ------------------------- MARK: BANNERS: REACT ------------------------- */}


			{/* #region ------------------------- MARK: BANNERS: IFRAME ------------------------- */}

				<iframe
					// className='banneriFrameClosed'
					// className='banneriFrame'
					className={banneriFrameOpen === true ? 'banneriFrameOpen' : 'banneriFrameClosed'}
					id='banneriFrameID'
					name='banneriFrame'
					title='banneriFrame'
					ref={banneriFrame_Ref}
				/>

			{/* #endregion ------------------------- MARK: BANNERS: IFRAME ------------------------- */}


			{/* #region ------------------------- MARK: WEB: IFRAME ------------------------- */}

				{/* <div className='webiFrameContainer webiFrameContainerOpen' id='webiFrameContainerID'> */}
				<div className={webiFrameOpen === true ? 'webiFrameContainer webiFrameContainerOpen' : 'webiFrameContainer webiFrameContainerClosed'} id='webiFrameContainerID' onClick={() => { clearContent(); }} ref={iframeContainer_Ref}>

					<iframe
						className='webiFrame'
						id='webiFrameID'
						name='webiFrame'
						title='webiFrame'
						ref={webiFrame_Ref}
					/>

					<button className='closeModalBtn closeModalBtnShow'> Close </button>

				</div>

			{/* #endregion ------------------------- MARK: WEB: IFRAME ------------------------- */}


			{/* #region ------------------------- VIDEO PLAYER ------------------------- */}

				<div className={videoOpen === true ? 'videoContainer videoContainerOpen' : 'videoContainer videoContainerClosed'} id='videoContainerID' onClick={() => { clearContent(); }} ref={videoContainer_Ref}>

					<ReactPlayer
						className='videoPlayer'
						id='videoPlayerID'
						// width='80%'
						width={videoWidth}
						height={videoHeight}
						url={loadedVideo}
						ref={videoPlayer_Ref}

						config={{
							vimeo: {
								playerOptions: {
									autoplay: true,
									loop: true,
									// color: '00ffff',
									// width: 1800,
									// maxwidth: 2400,
									// width: window.innerWidth * 0.8,

									// playsinline: 1
									// passive: true
								},
							}
						}}
					/>

					<button className={videoOpen ? 'closeModalBtn closeModalBtnShow' : 'closeModalBtn closeModalBtnHide'} onClick={() => { clearContent(); }}> Close </button>

				</div>

			{/* #region ------------------------- VIDEO PLAYER ------------------------- */}

			</div>

		{/* #endregion ------------------------- MARK: galleryContainer ------------------------- */}


		{/* #region ------------------------- MARK: workNavContainer ------------------------- */}

			<div className='workNavContainer' id='workNavContainerID'>

				{/* <div className='workNavContainer' id='workNavContainerID'> */}
					<div className='workNavBar' id='workNavBarID' ref={workNav_Ref}>

						<div className='employerNav' id='employerNavID' ref={employerNav_Ref}>
							<div className='activeEmplDiv' id='activeEmplDivID' ref={activeEmplDiv_Ref}></div>
							<RenderEmployers />
						</div>

						<div className='typeNav' id='typeNavID' ref={typeNav_Ref}>
							<div className='activeTypeDiv' id='activeTypeDivID' ref={activeTypeDiv_Ref}></div>
							<RenderTypes />
						</div>

						<div className='toggleNav' id='toggleNavID' onClick={() => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={toggleNav_Ref}>
							<div className='toggleBtn' id='toggleBtnID' ref={toggleBtn_Ref}>
								{workNavToggleText}
							</div>
						</div>

					</div>
				{/* </div> */}

			</div>

		{/* #endregion ------------------------- MARK: workNavContainer ------------------------- */}


		{/* #region ------------------------- MARK: chipContainer ------------------------- */}

			{/* <div className='isotopeContainer isotopeChips' id='isotopeChipsID' style={{ visibility: chipVisibility ? "visible" : "hidden" }}> */}
			{/* <div className='isotopeContainer isotopeChips' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }}> */}
			{/* <div className='isotopeChips' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }}> */}

			{/* <div className='isotopeContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={chipNav_Ref}> */}
			{/* <div className='isotopeChips' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={chipNav_Ref}> */}
			{/* <div className='chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={chipNav_Ref}> */}
			{/* <div className='isotopeContainer chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={chipNav_Ref}> */}
			{/* <div className='isotopeContainer isotopeChips chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={chipNav_Ref}> */}
			{/* <div className='isotopeContainer chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }}> */}
			{/* <div className='isotopeContainer chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={isotopeChips_Ref}> */}
			{/* <div className='isotopeContainer chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "inherit" : "none" }} ref={chipContainer_Ref}> */}
			{/* <div className='isotopeContainer chipContainer' id='isotopeChipsID' style={{ display: chipVisibility ? "flex" : "none" }} ref={chipContainer_Ref}> */}

			{/* <div className='chipContainer' id='chipContainerID' ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: galChipToggle ? "flex" : "none" }} ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: chipVisibility ? "flex" : "none" }} ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: chipVisibility ? "none" : "flex" }} ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: chipvisibility ? "none" : "flex" }} ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: chipVisibility ? "none" : "flex" }} onClick={() => { setChipVisibility(chipVisibility => !chipVisibility); }} ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: chipvisibility ? "flex" : "none" }} ref={chipContainer_Ref}> */}
			{/* <div className='chipContainer' id='chipContainerID' style={{ display: locationWork.state.chipState.chipvisibility ? "flex" : "none" }} ref={chipContainer_Ref}> */}

			{/* <div className='chipContainer' id='chipContainerID' style={{ zIndex: chipvisibility ? 0 : -999 }} ref={chipContainer_Ref}> */}

			<div className='chipContainer' id='chipContainerID' style={{ display: isChipVisible ? "flex" : "none" }} ref={chipContainer_Ref}>

				{/* <div className='chipContainer' id='chipContainerID'> */}
				{/* <div className='chipContainer' id='chipContainerID' ref={chipNav_Ref}> */}
				{/* <div className='chipContainer' id='chipContainerID' ref={isotopeChips_Ref}> */}
					{/* {renderLogos()} */}
					{/* {RenderChips()} */}
					<RenderChips />
				{/* </div> */}

			</div>

		{/* #endregion ------------------------- MARK: chipContainer ------------------------- */}


		{/* #region ------------------------- MARK: chipToggleBtn ------------------------- */}

			{/* <button className='chipToggleBtn' id='chipToggleBtnID' onClick={handleChipToggle} ref={chipToggleBtn_Ref}></button> */}

		{/* #endregion ------------------------- MARK: chipToggleBtn ------------------------- */}


		{/* #region ------------------------- MARK: testing123 ------------------------- */}

			{/* <div className='testing123'>
				<button onClick={toggleVisibility}>Toggle Content</button>

				{isChipVisible && (
					<h4>Chips are visible!</h4>
				)}
			</div> */}

		{/* #endregion ------------------------- MARK: testing123 ------------------------- */}

		</>
	)
}

// export default Work;