//#region ==================== MARK: IMPORTS ====================

// import { Route, Routes } from 'react-router-dom';
// import { useRef } from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Navbar from './components/Navbar';

// import Home from './pages/Home';
// import Work from './pages/Work';
// import About from './pages/About';
// import Resume from './pages/Resume';
// // import Resume_ from './pages/Resume_';
// // import Preload from './pages/Preload';
// // import Scene from './components/three/Scene';

// // REF: https://www.youtube.com/watch?v=PMXUCNzthQU&t=508s => https://www.npmjs.com/package/ua-parser-js => https://github.com/faisalman/ua-parser-js => https://docs.uaparser.dev/api/main/overview.html
// import { UAParser } from 'ua-parser-js';

import "./stylesheets/App.css";

//#endregion ==================== MARK: IMPORTS ====================


//#region ==================== MARK: CONSTANTS n VARS ====================

//#region -------------------- MARK: CONST: ua/browserDetect --------------------

// const ua = new UAParser().getResult();

// let browserDetect = 'desktop';

// if (ua.device.type === undefined) {
// 	// setBrowserDetect('desktop');
// 	browserDetect = 'desktop';
// } else {
// 	// setBrowserDetect(ua.device.type);
// 	browserDetect = ua.device.type;
// }

//#endregion -------------------- MARK: CONST: ua/browserDetect --------------------

//#endregion ==================== CONSTANTS n VARS ====================


function App() {
// function App({children}) {

	//#region ==================== MARK: useRef DEFs ====================

	// const navBar_Ref = useRef(null);

	//#endregion ==================== MARK: useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// const [homeClick, setHomeClick] = useState(false);
	// const [workClick, setWorkClick] = useState(false);
	// const [aboutClick, setAboutClick] = useState(false);
	// const [resumeClick, setResumeClick] = useState(false);

	// // const [galleryVisibility, setGalleryVisibility] = useState(false);
	// const [chipVisibility, setChipVisibility] = useState(true);
	// // const [visibility, setVisibility] = useState(true);
	// // const [isVisible, setIsVisible] = useState(true);

	// const [isMobile, setIsMobile] = useState();
	// // const [isMobile, setIsMobile] = useState(false);

	// const [matches, setMatches] = useState(false);
	// const [isLandscape, setIsLandscape] = useState();

	const [isChipVisible, setIsChipVisible] = useState(true);
	const [filterKey, setFilterKey] = useState();

	//#endregion ==================== MARK: useState DEFs ====================


	//#region ==================== MARK: CONSTs/FUNCTIONs ====================

	// const locationApp = useLocation();


	//#region -------------------- MARK: CONST: handleChipToggle VERBOSE --------------------

	// // function handleChipToggle(chipVisibility) {
	// // const handleChipToggle = (chipVisibility) => {
	// const handleChipToggle = () => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	console.log('');
	// 	console.log('==================== COMPONENT: App.jsx ====================');
	// 	// console.log('-------------------- FUNCTION: handleChipToggle() --------------------');
	// 	console.log('-------------------- CONST: handleChipToggle VERBOSE --------------------');

	// 	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// 	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// 	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// 	// console.log('');
	// 	console.log('chipVisibility PRE = ' + chipVisibility);
	// 	console.log(chipVisibility);
	// 	// console.log('setChipVisibility = ' + setChipVisibility);
	// 	// console.log(setChipVisibility);
	// 	// console.log('handleChipToggle = ' + handleChipToggle);
	// 	// console.log(handleChipToggle);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	// 	// setChipVisibility(true);
	// 	// setChipVisibility(!chipVisibility);
	// 	setChipVisibility(chipVisibility => !chipVisibility);

	// 	// setVisibility(!visibility);
	// 	// setIsVisible(!isVisible);

	// 	// if (!chipVisibility) {
	// 	// 	setChipVisibility(true);
	// 	// } else {
	// 	// 	setChipVisibility(chipVisibility => !chipVisibility);
	// 	// }

	// 	//#region -------------------- FINDIN' OUT MORE SH*T --------------------

	// 	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// 	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// 	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// 	console.log('');
	// 	console.log('chipVisibility POST = ' + chipVisibility);
	// 	console.log(chipVisibility);
	// 	// console.log('setChipVisibility = ' + setChipVisibility);
	// 	// console.log(setChipVisibility);
	// 	// console.log('handleChipToggle = ' + handleChipToggle);
	// 	// console.log(handleChipToggle);

	// 	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------
	// }

	//#endregion -------------------- MARK: CONST: handleChipToggle VERBOSE --------------------


	//#region -------------------- MARK: CONST: handleChipToggle --------------------

	// const handleChipToggle = () => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	console.log('');
	// 	console.log('==================== COMPONENT: App.jsx ====================');
	// 	// console.log('-------------------- FUNCTION: handleChipToggle() --------------------');
	// 	console.log('-------------------- CONST: handleChipToggle --------------------');

	// 	// console.log('typeof isChipVisible = ' + typeof isChipVisible);
	// 	// console.log('typeof setIsChipVisible = ' + typeof setIsChipVisible);
	// 	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// 	// console.log('');
	// 	console.log('isChipVisible_PRE = ' + isChipVisible);
	// 	console.log(isChipVisible);
	// 	// console.log('setIsChipVisible = ' + setIsChipVisible);
	// 	// console.log(setIsChipVisible);
	// 	// console.log('handleChipToggle = ' + handleChipToggle);
	// 	// console.log(handleChipToggle);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	// 	if (locationApp.pathname !== '/work') {
	// 	// if (locationApp.pathname !== '/work' && !chipVisibility) {
	// 	// if (locationApp.pathname !== '/work' && isChipVisible === false) {

	// 		// console.log('locationApp.pathname = ' + locationApp.pathname);
	// 		// console.log('{children} = ' + {children});

	// 		setIsChipVisible(true);

	// 	} else {

	// 		// console.log('locationApp.pathname = ' + locationApp.pathname);

	// 		setIsChipVisible(!isChipVisible);
	// 		// setIsChipVisible(isChipVisible => !isChipVisible);
	// 	}


	// 	//#region -------------------- FINDIN' OUT MORE SH*T --------------------

	// 	// console.log('');
	// 	console.log('isChipVisible_POST = ' + isChipVisible);
	// 	console.log(isChipVisible);

	// 	// console.log('');
	// 	console.log('locationApp.pathname = ' + locationApp.pathname);
	// 	console.log('{children} = ' + {children});
	// 	console.log({children});

	// 	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------
	// }

	//#endregion -------------------- MARK: CONST: handleChipToggle --------------------


	//#region -------------------- MARK: CONST: chipState --------------------
	// REF: google "react 19 navlink uselocation lift state up"

	// const chipState = {
	// 	// chipvisibility: chipVisibility,
	// 	// // setchipvisibility: setChipVisibility
	// 	// handlechiptoggle: handleChipToggle
	// 	// // handlechiptoggle: handleChipToggle()
	// 	// // blah: 'blah'

	// 	chipVisibility: chipVisibility,
	// 	// setChipVisibility: setChipVisibility
	// 	handleChipToggle: handleChipToggle

	// 	// chipVisibility,
	// 	// // setChipVisibility: setChipVisibility
	// 	// handleChipToggle
	// }

	//#endregion -------------------- MARK: CONST: chipState --------------------


	//#region -------------------- MARK: CONST: toggleVisibility --------------------

	const toggleVisibility = () => {

		// setIsChipVisible(!isChipVisible);
		setIsChipVisible(true);

		// setFilterKey(key);
		// setFilterKey('*');
		setFilterKey('null');

		// console.log('');
		// console.log('==================== COMPONENT: App.jsx ====================');
		// console.log('***** FUNCTION: toggleVisibility TRIGGERED! *****');
		// console.log('isChipVisible = ' + isChipVisible);
	};

	//#endregion -------------------- MARK: CONST: toggleVisibility --------------------


	//#region -------------------- MARK: CONST: useMediaQuery - REF: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=Sorted%20by:,file=src/App.js --------------------

	// const useMediaQuery = (query) => {

	// 	// const [matches, setMatches] = useState(false);

	// 	useEffect(() => {

	// 		const mediaQuery = window.matchMedia(query);

	// 		// console.log('');
	// 		// console.log('mediaQuery = ' + mediaQuery);
	// 		// console.log(mediaQuery);

	// 		setMatches(mediaQuery.matches);

	// 		const handler = (event) => setMatches(event.matches);

	// 		// Use addEventListener
	// 		mediaQuery.addEventListener('change', handler);

	// 		return () => {
	// 			// Use removeEventListener for cleanup
	// 			mediaQuery.removeEventListener('change', handler);
	// 		};

	// 	}, [query]);

	// 	return matches;
	// };

	// const isLargeScreen = useMediaQuery('(min-width: 768px)');
	// const isLargeScreen = useMediaQuery('(min-width: 1920px)');
	// const isLargeScreen = useMediaQuery('(min-width: 1920px)');

	const isLargeScreen = window.matchMedia('(min-width: 1920px)').matches;

	// // setIsLandscape(useMediaQuery('(min-width: 1920px)'));`
	// setIsLandscape(isLargeScreen);

	//#endregion -------------------- MARK: CONST: useMediaQuery - REF: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=Sorted%20by:,file=src/App.js --------------------


	//#region -------------------- MARK: CONST: appProps --------------------

	// let appProps = {
	// 	 isLargeScreen: {isLargeScreen}, 
	// 	 isChipVisible: {isChipVisible}, 
	// 	 setIsChipVisible: {setIsChipVisible}, 
	// 	 toggleVisibility: {toggleVisibility}, 
	// 	 filterKey: {filterKey}, 
	// 	 setFilterKey: {setFilterKey}
	// };

	//#endregion -------------------- MARK: CONST: appProps --------------------

	//#endregion ==================== MARK: CONSTs/FUNCTIONs ====================


	//#region ==================== FINDIN' OUT SH*T ====================

	console.log('');
	console.log('==================== COMPONENT: App.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('locationApp.pathname = ' + locationApp.pathname);
	// console.log(locationApp.pathname);

	// // console.log('');
	// // console.log('ua = ' + ua);
	// console.log(ua);
	// console.log('ua.device.type = ' + ua.device.type);

	// console.log('browserDetect = ' + browserDetect);

	// // console.log('');
	// console.log('screen.orientation = ' + screen.orientation);
	// console.log('screen.orientation.type = ' + screen.orientation.type);

	// // console.log('');
	// console.log('window.matchMedia = ' + window.matchMedia);

	// // console.log('');
	// console.log('isMobile = ' + isMobile);
	// console.log(isMobile);

	// // console.log('');
	// console.log('isLandscape = ' + isLandscape);
	// console.log(isLandscape);

	// console.log('');
	console.log('window.innerWidth = ' + window.innerWidth);
	// console.log(window.innerWidth);

	// console.log('');
	console.log('window.innerHeight = ' + window.innerHeight);
	// console.log(window.innerHeight);

	// console.log('');
	console.log('isLargeScreen = ' + isLargeScreen);
	// console.log(isLargeScreen);

	// console.log('');
	console.log('typeof isLargeScreen = ' + typeof isLargeScreen);
	// console.log(typeof isLargeScreen);

	// // console.log('');
	// console.log('window.matchMedia((min-width: 1920px)).media = ' + window.matchMedia('(min-width: 1920px)').media);
	// console.log(window.matchMedia('(min-width: 1920px)').media);

	// // console.log('');
	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// // console.log('');
	// console.log('chipVisibility = ' + chipVisibility);
	// console.log(chipVisibility);
	// console.log('setChipVisibility = ' + setChipVisibility);
	// console.log(setChipVisibility);
	// console.log('handleChipToggle = ' + handleChipToggle);
	// console.log(handleChipToggle);

	// console.log('typeof chipvisibility = ' + typeof chipvisibility);
	// console.log('typeof setChipvisibility = ' + typeof setChipvisibility);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);
	// // console.log('setChipvisibility = ' + setChipvisibility);

	// // console.log('');
	// console.log('chipState = ' + chipState);
	// console.log(chipState);

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


	return (
		<>
			<Wrapper>

				<Header />

				{/* <Navbar /> */}

				{/* <Navbar handleChipToggle={handleChipToggle} /> */}
				{/* <Navbar isChipVisible={isChipVisible} handleChipToggle={handleChipToggle} /> */}
				{/* <Navbar isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} /> */}
				{/* <Navbar isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} filterKey={filterKey} setFilterKey={setFilterKey} /> */}
				{/* <Navbar isMobile={isMobile} setIsMobile={setIsMobile} isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} filterKey={filterKey} setFilterKey={setFilterKey} /> */}
				{/* <Navbar isLandscape={isLandscape} setIsLandscape={setIsLandscape} isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} filterKey={filterKey} setFilterKey={setFilterKey} /> */}
				{/* <Navbar isLandscape={isLandscape} isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} filterKey={filterKey} setFilterKey={setFilterKey} /> */}

				<Navbar isLargeScreen={isLargeScreen} isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} filterKey={filterKey} setFilterKey={setFilterKey} />
				{/* <Navbar appProps={appProps} /> */}

				{/* <Navbar chipVisibility={chipVisibility} handleChipToggle={handleChipToggle} /> */}
				{/* <Navbar chipVisibility={chipVisibility} setChipVisibility={setChipVisibility} handleChipToggle={handleChipToggle} /> */}
				{/* <Navbar chipvisibility={chipVisibility} handlechiptoggle={handleChipToggle} /> */}
				{/* <Navbar state={chipState} /> */}
				{/* <Navbar state={{ chipState }} /> */}
				{/* <Navbar chipStateFrApp={{ chipState }} /> */}
				{/* <Navbar state={{ chipState: chipState }} /> */}
				{/* <Navbar chipvisibility={chipVisibility} handlechiptoggle={handleChipToggle} /> */}
				{/* <Navbar chipvisibility={chipVisibility} handlechiptoggle={handleChipToggle} /> */}
				{/* <Navbar state={{ chipState }} handlechiptoggle={handleChipToggle} /> */}
				{/* <Navbar state={{ chipState }} chipvisibility={chipVisibility} handlechiptoggle={handleChipToggle} /> */}

				{/* <Routes> */}
				{/* <Routes ref={navBar_Ref}> */}

					{/* <Route path="/" element={<Home />} />
					<Route path="work" element={<Work />} />
					<Route path="about" element={<About />} />
					<Route path="resume" element={<Resume />} /> */}

					{/* <Route path="prelod" element={<Preload />} /> */}
					{/* <Route path="./components/three/scene" element={<Scene />} /> */}

					{/* <Route path="/" element={<Home homeClick={homeClick} />} />
					<Route path="work" element={<Work workClick={workClick} />} />
					<Route path="about" element={<About aboutClick={aboutClick} />} />
					<Route path="resume" element={<Resume resumeClick={resumeClick} />} /> */}

				{/* </Routes> */}


				{/* <div className='testing123'>
					<button onClick={toggleVisibility}>Toggle Content</button>

					{isChipVisible && (
						<h4>Chips are visible!</h4>
					)}
				</div> */}

			</Wrapper>
		</>
	);
}

export default App;
