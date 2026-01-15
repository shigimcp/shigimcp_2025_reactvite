//#region ==================== MARK: IMPORTS ====================

import '../stylesheets/App.css';

//#endregion ==================== MARK: IMPORTS ====================


// export const Wrapper = ({children}) => {
export default function Wrapper({children}) {

	//#region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Wrapper.jsx ====================');

	// // console.log('');
	// console.log('{children} = ' + {children});
	// console.log({children});

	//#endregion ==================== FINDIN' OUT SH*T ====================

	return (
		<div className='wrapper' id='wrapperID'>
			{children}
		</div>
	)
}