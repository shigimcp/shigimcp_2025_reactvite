// #region ==================== IMPORTS ====================

// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef, useMemo } from 'react';

// import { Box3, Vector3 } from "three";

// import { isBrowser } from "react-device-detect";
// import { isMobile } from "react-device-detect";
// import { isBrowser, isMobile } from "react-device-detect";
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

// import { useLoader } from 'react-three-fiber';
// import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
// import { useFrame } from 'react-three-fiber';

// import { useLoader } from '@react-three/fiber';
// import { SVGLoader } from 'three/examples/jsm/Addons.js';



// import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
// import { Svg } from "@react-three/drei";


// import { useMemo } from 'react';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
// Import the SVGLoader
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
// import { useLoader, Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


// #endregion ==================== IMPORTS ====================



// #region ==================== CONSTANTS / VARS ====================

const remoteGitImageLoc = 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/';

// #endregion ==================== CONSTANTS / VARS ====================


export default function Logo() {

	// #region -------------------- MARK: SVG load and extrusion --------------------

	// const logoSVG_url = remoteGitImageLoc + 'logo/shigeru_logo_extrude_clean_sm.svg';
	const logoSVG_url = remoteGitImageLoc + 'logo/shigeru_logo_extrude_stroke.svg';
	// const logoSVG_url = 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/refs/heads/main/src/images/shigeru_logo.svg';

	const logoSVG_data = useLoader(SVGLoader, logoSVG_url);

	const shapes = useMemo(() => {
		// Convert the paths from the SVG data into THREE.Shape objects
		return logoSVG_data.paths.flatMap((path) => path.toShapes(true));
	}, [logoSVG_data]);

	const extrudeSettings = {
		depth: 3.75,
		bevelEnabled: false,
		steps: 1
	}

	// #endregion -------------------- SVG load and extrusion --------------------


	// #region -------------------- MARK: ANIMATION --------------------

	const group_Ref = useRef();

	useFrame(() => {
		if (!group_Ref.current) {
			return;
		}

		// group_Ref.current.rotation.x += 0.01;
		// group_Ref.current.rotation.y += 0.01;
		// group_Ref.current.rotation.y += 0.025;

		group_Ref.current.rotation.y -= 0.01;
		// group_Ref.current.rotation.y -= 0.0125;
		// group_Ref.current.rotation.y -= 0.025;
	});

	// #endregion -------------------- ANIMATION --------------------


	//#region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Logo.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('logoSVG_url = ' + logoSVG_url);
	// console.log(logoSVG_url);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	return (
		<>
			{/* <div className='bodyContainer' id='bodyContainerID'>
				<h1>This is my Logo</h1>
			</div> */}

			{/* <LogoShape id="logoSVG_urlid" url={logoSVG_url} fillOpacity="0.0625" extrudeDir="positive" /> */}

			{/* <Svg
				src="../../../public/img/0elements/shigeru_logo_ko.svg" // Make sure the file is in the public folder
				// src="../../../public/img/0elements/shigeru_logo_extrude_clean_sm.svg" // Make sure the file is in the public folder
				position={[0, 0, 0]}
				// scale={0.01}
				scale={0.005}
			/> */}


			{/* A group or mesh to contain all extruded parts. Adjust scale and rotation as needed. */}

			{/* <group scale={0.05} rotation={[Math.PI * 1, 0, 0]} position={[-0.7, 0.5, 0]}> */}
			{/* <group scale={0.05} rotation={[Math.PI * 1, Math.PI * 0.125, Math.PI * 0.125]} position={[-2.5, 1.375, 0]}> */}
			{/* <group scale={0.05} rotation={[Math.PI * 1, 0, 0]} position={[-2.5, 1.375, 0]} ref={group_Ref}> */}
			{/* <group scale={0.05} rotation={[Math.PI * 1, 0, 0]} position={[0, 0, 0]} ref={group_Ref}> */}
			{/* <group scale={0.05} rotation={[Math.PI * 1, 0, 0]} position={[2.5, 0.375, 0]} ref={group_Ref}> */}
			<group scale={0.05} rotation={[Math.PI * 1, 0, 0]} position={[2.25, 0.375, 0]} ref={group_Ref}>

				{shapes.map((shape, i) => (

					// <mesh key={i} receiveShadow castShadow ref={mesh_Ref}>
					<mesh key={i} receiveShadow castShadow position={[-50, -50, -2.5]}>

						{/* Use the shapes and settings with the extrudeGeometry JSX component */}
						<extrudeGeometry args={[shape, extrudeSettings]} />

						{/* Apply a material, optionally using the original SVG color */}
						{/* <meshStandardMaterial color={'orange'} /> */}
						<meshPhongMaterial 
							// color={logoSVG_data.paths[i].color || 'hotpink'} 
							// side={THREE.DoubleSide} 
							// color = "royalblue" 
							color = {'#6666aa'}
							// side = {THREE.DoubleSide} 
							wireframe = {true} 
							transparent = {true} 
							opacity = {0.05}
						/>
					</mesh>
				))}
			</group>
		</>
	);
}
