// #region ==================== IMPORTS ====================

// import React from 'react';

// import Hed from "./Hed";
// import Logo from "./Logo";

// import Hed from '../three/Hed';
import Logo from '../three/Logo';

// import GroundPlane from '../three/GroundPlane';
// import BackDrop from '../three/BackDrop';

// #endregion ==================== IMPORTS ====================



export default function Scene() {

	// #region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

	// #region -------------------- GROUNDPLANE --------------------

	// function GroundPlane() {
	// 	return (
	// 		<mesh rotation={[5, 0, 0]} position={[0, -5, 0]} receiveShadow>
	// 			<planeBufferGeometry attach="geometry" args={[500, 500]} />
	// 			<meshStandardMaterial attach="material" color="#ffffff" metalness={0.25} />
	// 		</mesh>
	// 	);
	// }

	// #endregion -------------------- GROUNDPLANE --------------------


	// #region -------------------- BACKDROP --------------------

	// function BackDrop() {

	// 	return (
	// 		<mesh position={[0, -1, -5]} receiveShadow>
	// 			<planeBufferGeometry attach="geometry" args={[500, 500]} />
	// 			<meshStandardMaterial attach="material" color="#ffffff" metalness={0.25} />
	// 		</mesh>
	// 	);
	// }

	// #endregion -------------------- BACKDROP --------------------

	// #endregion ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


	return (
		<group>
			{/* <Hed /> */}
			<Logo />
			{/* <BackDrop /> */}
			{/* <GroundPlane /> */}
		</group>
	);
}
