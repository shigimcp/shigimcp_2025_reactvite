//#region ==================== MARK: IMPORTS ====================

import { Route, Routes } from 'react-router-dom';
// import { useRef, forwardRef } from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Resume from '../pages/Resume';
import ResumeModal from './ResumeModal';

import '../stylesheets/App.css';

//#endregion ==================== MARK: IMPORTS ====================


// function Navbar() {
// const Navbar = () => {
// export default function Navbar() {
// export default function Navbar(props) {
// export default function Navbar({isChipVisible, setIsChipVisible}) {
// export default function Navbar({isChipVisible, setIsChipVisible, toggleVisibility}) {
export default function Navbar({isChipVisible, setIsChipVisible, toggleVisibility, filterKey, setFilterKey}) {

// export default function Navbar(React.forwardRef(props, navBar_Ref)) {
// const Navbar = (props) => {
// const Navbar = forwardRef((props, navBar_Ref) => {
// export default function Navbar({handleChipToggle}) {
// export default function Navbar({chipVisibility, handleChipToggle}) {
// export default function Navbar({chipVisibility, setChipVisibility, handleChipToggle}) {
// export default function Navbar({chipvisibility, handlechiptoggle}) {

	//#region ==================== MARK: useRef DEFs ====================

	// const navBar_Ref = useRef(null);
	// const navHome_Ref = useRef(null);
	// const navWork_Ref = useRef(null);
	// const navAbout_Ref = useRef(null);
	// const navResume_Ref = useRef(null);

	// const work_Ref = useRef(null);

	//#endregion ==================== MARK: useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// const [chipVisibility, setChipVisibility] = useState(true);
	const [isResumeModalOpen, setResumeModalOpen] = useState(false);

	//#endregion ==================== MARK: useState DEFs ====================


	//#region ==================== MARK: CONSTs / FUNCTIONs ====================

	// const chipvisibility = {
	// 	chipVisibility: chipVisibility,
	// 	setChipVisibility: setChipVisibility
	// };

	// const location = useLocation();
	// const chipstate = location.state;
	// const { chipstate } = location.state;
	// const chipStateFrNav = props.state.chipState;


	//#region -------------------- MARK: CONST: chipState --------------------
	// REF: google "react 19 navlink uselocation lift state up"

	// const chipState = {
	// 	chipvisibility: chipVisibility,
	// 	// setchipvisibility: setChipVisibility
	// 	// handlechiptoggle: handleChipToggle
	// 	// handlechiptoggle: handleChipToggle()
	// 	blah: 'blah'
	// }

	//#endregion -------------------- MARK: CONST: chipState --------------------


	//#region -------------------- MARK: CONST: handleChipToggle --------------------

	// const handleChipToggleFrApp = props.chipStateFrApp.chipState.handleChipToggle;

	// // function handleChipToggle(chipVisibility) {
	// // const handleChipToggle = (chipVisibility) => {
	// const handleChipToggle = () => {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	console.log('');
	// 	console.log('==================== COMPONENT: Navbar.jsx ====================');
	// 	// console.log('-------------------- FUNCTION: handleChipToggle() --------------------');
	// 	console.log('-------------------- CONST: handleChipToggle --------------------');

	// 	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// 	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// 	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// 	// // console.log('');
	// 	// console.log('chipVisibility PRE = ' + chipVisibility);
	// 	// console.log(chipVisibility);
	// 	// // console.log('setChipVisibility = ' + setChipVisibility);
	// 	// // console.log(setChipVisibility);
	// 	// // console.log('handleChipToggle = ' + handleChipToggle);
	// 	// // console.log(handleChipToggle);

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

	// 	// console.log('');
	// 	// console.log('chipVisibility POST = ' + chipVisibility);
	// 	// console.log(chipVisibility);
	// 	// console.log('setChipVisibility = ' + setChipVisibility);
	// 	// console.log(setChipVisibility);
	// 	// console.log('handleChipToggle = ' + handleChipToggle);
	// 	// console.log(handleChipToggle);

	// 	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------
	// }

	//#endregion -------------------- MARK: CONST: handleChipToggle --------------------


	//#endregion ==================== MARK: CONSTs / FUNCTIONs ====================


	// #region ==================== MARK: MODAL WINDOW REF01: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/ ====================
	//         ==================== MARK: MODAL WINDOW REF02: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FDialog.jsx ====================

	const handleOpenResumeModal = () => {
		setResumeModalOpen(true);
	};

	const handleCloseResumeModal = () => {
		setResumeModalOpen(false);
	};

	//            ==================== MARK: MODAL WINDOW REF01: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/ ====================
	// #endregion ==================== MARK: MODAL WINDOW REF02: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FDialog.jsx ====================


	//#region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Navbar.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('props.chipvisibility = ' + props.chipvisibility);
	// console.log(props.chipvisibility);

	// // console.log('');
	// console.log('props.handlechiptoggle = ' + props.handlechiptoggle);
	// console.log(props.handlechiptoggle);

	// // console.log('');
	// console.log('props.state = ' + props.state);
	// console.log(props.state);

	// // // console.log('');
	// // console.log('props.state.chipstate = ' + props.state.chipstate);
	// // console.log(props.state.chipstate);

	// // console.log('');
	// console.log('props.state.chipState = ' + props.state.chipState);
	// console.log(props.state.chipState);

	// // console.log('');
	// console.log('chipStateFrNav = ' + chipStateFrNav);
	// console.log(chipStateFrNav);

	// // console.log('');
	// console.log('props.chipstate = ' + props.chipstate);
	// console.log(props.chipstate);

	// // console.log('');
	// console.log('props.chipStateFrApp = ' + props.chipStateFrApp);
	// console.log(props.chipStateFrApp);

	// // console.log('');
	// console.log('props.state.chipState.chipvisibility = ' + props.state.chipState.chipvisibility);
	// console.log(props.state.chipState.chipvisibility);

	// // console.log('');
	// console.log('props.state.chipState.handlechiptoggle = ' + props.state.chipState.handlechiptoggle);
	// console.log(props.state.chipState.handlechiptoggle);

	// // console.log('');
	// console.log('props.chipStateFrApp.chipState.handleChipToggle = ' + props.chipStateFrApp.chipState.handleChipToggle);
	// console.log(props.chipStateFrApp.chipState.handleChipToggle);

	// // console.log('');
	// console.log('handleChipToggleFrApp = ' + handleChipToggleFrApp);
	// console.log(handleChipToggleFrApp);


	// // console.log('');
	// console.log('props.chipVisibility = ' + props.chipVisibility);
	// console.log(props.chipVisibility);

	// // console.log('');
	// console.log('props.handleChipToggle = ' + props.handleChipToggle);
	// console.log(props.handleChipToggle);

	// // console.log('');
	// console.log('props.chipvisibility = ' + props.chipvisibility);
	// console.log(props.chipvisibility);

	// // console.log('');
	// console.log('props.handlechiptoggle = ' + props.handlechiptoggle);
	// console.log(props.handlechiptoggle);

	// // console.log('');
	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// // console.log('');
	// console.log('chipVisibility = ' + chipVisibility);
	// console.log(chipVisibility);
	// // console.log('setChipVisibility = ' + setChipVisibility);
	// // console.log(setChipVisibility);
	// // console.log('handleChipToggle = ' + handleChipToggle);
	// // console.log(handleChipToggle);

	// // console.log('');
	// console.log('typeof chipvisibility = ' + typeof chipvisibility);
	// // console.log('typeof setchipvisibility = ' + typeof setchipvisibility);
	// console.log('typeof handlechiptoggle = ' + typeof handlechiptoggle);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);
	// // console.log('setchipvisibility = ' + setchipvisibility);
	// // console.log(setchipvisibility);
	// // console.log('handlechiptoggle = ' + handlechiptoggle);
	// // console.log(handlechiptoggle);

	// // console.log('');
	// console.log('location = ' + location);
	// console.log(location);

	// // console.log('');
	// console.log('location.state = ' + location.state);
	// console.log(location.state);

	// // console.log('');
	// console.log('location.state.chipVisibility = ' + location.state.chipVisibility);
	// console.log(location.state.chipVisibility);

	// // console.log('');
	// console.log('location.state.chipState.chipvisibility = ' + location.state.chipState.chipvisibility);
	// console.log(location.state.chipState.chipvisibility);

	// // console.log('');
	// console.log('chipstate = ' + chipstate);
	// console.log(chipstate);

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
			{/* #region ========================= MARK: ROUTES ========================= */}

				<Routes>
				{/* <Routes ref={navBar_Ref}> */}

					<Route path="/" element={<Home />} />

					{/* <Route path="work" element={<Work />} /> */}
					{/* <Route path="work" element={<Work ref={work_Ref}/>} /> */}
					{/* <Route path="work" element={<Work isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} />} /> */}
					{/* <Route path="work" element={<Work isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} toggleVisibility={toggleVisibility} />} /> */}
					<Route path="work" element={<Work isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} filterKey={filterKey} setFilterKey={setFilterKey} />} />

					<Route path="about" element={<About />} />
					<Route path="resume" element={<Resume />} />

					{/* <Route path="prelod" element={<Preload />} /> */}
					{/* <Route path="./components/three/scene" element={<Scene />} /> */}

					{/* <Route path="/" element={<Home homeClick={homeClick} />} />
					<Route path="work" element={<Work workClick={workClick} />} />
					<Route path="about" element={<About aboutClick={aboutClick} />} />
					<Route path="resume" element={<Resume resumeClick={resumeClick} />} /> */}

				</Routes>
	
			{/* #endregion ========================= MARK: ROUTES ========================= */}

			{/* #region ========================= MARK: navBarContainer - REF: https://hygraph.com/blog/routing-in-react ========================= */}

				<div className='navBarContainer' id='navBarContainerID'>

					<div className='navBarBG' id='navBarBGID'>

						{/* <div className='activeNavDiv' id='activeNavDivID' ref={activeNavDiv_Ref}></div> */}

						<div className='navBar' id='navBarID'>
						{/* <div className='navBar' id='navBarID' ref={navBar_Ref}> */}
							{/* <NavLink to='/' className='navItem' id='homeID'>Home</NavLink>
							<NavLink to='/work' className='navItem' id='workID'>Work</NavLink>
							<NavLink to='/about' className='navItem' id='aboutID'>About</NavLink>
							<NavLink to='/resume' className='navItem' id='resumeID'>Resume</NavLink> */}

							{/* <NavLink to='/preload' className='navItem' id='preloadID'>Preload</NavLink> */}
							{/* <NavLink to='../components/three/scene' className='navItem' id='threeID'>three</NavLink> */}

							{/* <NavLink to='/' className='navItem' id='homeID' ref={navHome_Ref}>Home</NavLink>
							<NavLink to='/work' className='navItem' id='workID' ref={navWork_Ref}>Work</NavLink>
							<NavLink to='/work' className='navItem' id='workID' ref={navWork_Ref} onClick={handleChips}>Work</NavLink>
							<NavLink to='/about' className='navItem' id='aboutID' ref={navAbout_Ref}>About</NavLink>
							<NavLink to='/resume' className='navItem' id='resumeID' ref={navResume_Ref}>Resume</NavLink> */}

							{/* <Link to='/' className='navItem' id='homeID' ref={navHome_Ref}>Home</Link>
							<Link to='/work' className='navItem' id='workID' ref={navWork_Ref}>Work</Link>
							<Link to='/about' className='navItem' id='aboutID' ref={navAbout_Ref}>About</Link>
							<Link to='/resume' className='navItem' id='resumeID' ref={navResume_Ref}>Resume</Link> */}

							<NavLink to='/' className='navItem' id='homeID'>Home</NavLink>

							{/* <NavLink to='/work' className='navItem' id='workID'>Work</NavLink> */}
							<NavLink to='/work' className='navItem' id='workID' onClick={toggleVisibility}>Work</NavLink>
							{/* <NavLink to='/work' className='navItem' id='workID' onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' onClick={props.handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ props }} onClick={props.handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={chipVisibility} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={chipVisibility} handlechiptoggle={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={chipVisibility} setchipvisibility={setChipVisibility} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={{chipVisibility}} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={chipVisibility.toString()} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={'true'} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={chipVisibility => chipVisibility} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ itemData: myData }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ chipVisibility }} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ chipvisibility }} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ chipState }} onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ chipstate }} onClick={handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' onClick={handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' chipvisibility={chipvisibility} onClick={handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ chipState }} onClick={handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to={{pathname: '/work', state: { chipState }}} className='navItem' id='workID' onClick={handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ props }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ props }} onClick={props.chipStateFrApp.chipState.handleChipToggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ props }} onClick={handleChipToggleFrApp}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipstate: { location } }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipstate: props.state.chipstate }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipstate: props.state.chipState }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipstate: chipStateFrNav }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipstatefrnav: chipStateFrNav }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipvisibility: props.chipvisibility }}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipvisibility: props.chipvisibility }} onClick={props.handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, chipvisibility: props.chipvisibility, handlechiptoggle: props.handlechiptoggle }} onClick={props.handlechiptoggle}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID'>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' ref={navWork_Ref}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true }} ref={navWork_Ref}>Work</NavLink> */}
							{/* <NavLink to='/work' className='navItem' id='workID' state={{ fromNav: true, navWork_Ref: 'navWork_Ref' }} ref={navWork_Ref}>Work</NavLink> */}
							<NavLink to='/about' className='navItem' id='aboutID'>About</NavLink>
							<NavLink to='/resume' className='navItem' id='resumeID'>Resume</NavLink>
						</div>

						<div className='resumeNav' id='resumeNavID' onClick={handleOpenResumeModal}>
							<p className='resumeDdl' id='resumeDdlID'>download resume</p>
						</div>
					</div>
				</div>

			{/* #endregion ========================= MARK: navBarContainer - REF: https://hygraph.com/blog/routing-in-react ========================= */}


			{/* #region ==================== MARK: MODAL WINDOW ==================== */}

				<ResumeModal
					isOpen={isResumeModalOpen}
					// modalData={ResumeFormData}
					// onSubmit={handleFormSubmit}
					onClose={handleCloseResumeModal}
				/>

			{/* #endregion ==================== MARK: MODAL WINDOW ==================== */}


			{/* <div className='testing123'>
				<button onClick={toggleVisibility}>Toggle Content</button>

				{isChipVisible && (
					<h4>Chips are visible!</h4>
				)}
			</div> */}

		</>
	);
}
// });

// export default Navbar;