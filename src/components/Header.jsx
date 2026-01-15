//#region ==================== MARK: IMPORTS ====================

// import { useRef } from 'react';
// import { useState } from 'react';

// import Navbar from './Navbar';

import '../stylesheets/App.css';

import logo from '../assets/images/0elements/shigeru_logo_ko.svg';
import logoRev from '../assets/images/0elements/shigeru_logo_ko_rev.svg';

//#endregion ==================== MARK: IMPORTS ====================


export default function Header() {
// export default function Header(props) {

	// #region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Header.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// #endregion ==================== FINDIN' OUT SH*T ====================


	//#region ==================== MARK: useRef DEFs ====================

	// const navBar_Ref = useRef(null);

	//#endregion ==================== MARK: useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// const [navClick, setNavClick] = useState(false);
	// const [restartPage, setRestartPage] = useState(false);

	//#endregion ==================== MARK: useState DEFs ====================


	// #region ==================== FINDIN' OUT MORE SH*T ====================

	// // console.log('');
	// console.log('navBar_Ref = ' + navBar_Ref);
	// console.log(navBar_Ref);
	// // console.log(navBar_Ref.children);

	// // // console.log('');
	// // console.log('navBar_Ref.current = ' + navBar_Ref.current);
	// console.log(navBar_Ref.current);
	// // // console.log(navBar_Ref.current.children);

	// console.log('');
	// console.log('restartPage = ' + restartPage);

	// #endregion ==================== FINDIN' OUT MORE SH*T ====================


	return (
		<>
		{/* #region ==================== MARK: hedContainer ==================== */}

			<div className='hedContainer' id='hedContainerID'>

				<div className='hed' id='hedID'>
					<div className='logo' id='logoID'>
						<img src={logo} className='logoK' id='logoKID' alt='logo' />
						<img src={logoRev} className='logoW' id='logoWID' alt='logoRev' />
					</div>

					<div className='hed01' id='hed01'>Shigeru McPherson</div>
					<div className='hed02' id='hed02'>digital designer &middot; art director &middot; front-end developer</div>

					<div className='contact'>
						{/* 212.464.7989 &nbsp; */}
						<a href='mailto:shigimcp@yahoo.com?Subject=Hi Shigi! I saw your website, and...' className='email'>shigimcp@yahoo.com</a>
					</div>
				</div>

				{/* <Navbar /> */}
				{/* <Navbar ref={navBar_Ref}/> */}
				{/* <Navbar navClick={navClick} /> */}

			</div>

		{/* #endregion ==================== MARK: hedContainer ==================== */}
		</>
	);
}

// export default Header;
