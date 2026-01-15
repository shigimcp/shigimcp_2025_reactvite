//#region ==================== MARK: IMPORTS ====================

// import React from 'react';
// import { useRef } from 'react';
// import { Suspense, useRef } from 'react';

import { Canvas } from '@react-three/fiber';
// import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
// import { PerspectiveCamera, Svg } from '@react-three/drei';
// import { AmbientLight, Mesh, PointLight } from 'three';

// import '../stylesheets/BodyContainer.scss';
// import '../stylesheets/App.css';
import '../stylesheets/Home.css';

// import Cubes from '../components/threeFiber/Cubes.jsx';
// import { PerspectiveCamera } from 'three';

import Logo from '../components/threeFiber/Logo';

//#endregion ==================== IMPORTS ====================



//#region ==================== MARK: PLACEHOLDER ====================

// function Body() {
// 	return (
// 		<div className='bodyContainer'>
// 			{/* <h2>{title}</h2> */}
// 			{/* {children} */}

// 			<img src={logo} className='logoK' id='logoKID' alt='logo' />
// 			<img src={logoRev} className='logoW' id='logoWID' alt='logoRev' />
// 		</div>
// 	);
// }

// export default Body;

// const Home = () => <h1>Home Page</h1>;

// export default Home;

// const navLoc = Home;

//#endregion ==================== PLACEHOLDER ====================


//#region ==================== MARK: CUBE (testing 1, 2, 3...) ====================

// function Cube() {
// // function Cube(props) {

// 	// const mesh_Ref = useRef<Mesh>(null);
// 	const mesh_Ref = useRef();

// 	useFrame(() => {
// 		if (!mesh_Ref.current) {
// 			return;
// 		}

// 		mesh_Ref.current.rotation.x += 0.01;
// 		mesh_Ref.current.rotation.y += 0.01;
// 	});

// 	return (
// 		<mesh ref={mesh_Ref}>
// 		{/* <mesh {...props} ref={mesh_Ref}> */}

// 			{/* <boxGeometry />
// 			<meshStandardMaterial /> */}

// 			<boxGeometry args={[2, 2, 2]} />
// 			<meshStandardMaterial color={'blue'} />

// 		</mesh>
// 	);
// }

//#endregion ==================== CUBE (testing 1, 2, 3...) ====================



export default function Home() {

	//#region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Home.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('logoSVG = ' + logoSVG);
	// console.log(logoSVG);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	return (
		<>
			{/* <Cubes /> */}

			{/* <div> */}

				<div className='homeHed'>
					<h1>Shigeru McPherson</h1>
					{/* <h2>digital designer &bull; art director</h2> */}
					<h2>digital designer &middot; art director</h2>
					{/* <h2>digital designer &#183; art director</h2> */}
					<h3>(and not afraid of writing code...!)</h3>
					<div className='note'>
						<b>NOTE:</b> This is my sandbox.
						<br />
						(You can tell, because... <i>why?! ===&#62;)</i>
						{/* <br /> */}
						{/* <br /><br /> */}
						{/* <i>Please, be forgiving... LOL!</i> */}
					</div>
				</div>

			{/* #region -------------------- MARK: REF: https://www.youtube.com/watch?v=DPl34H2ISsk -------------------- */}

				<Canvas className='homeCanvas'>
				{/* <Canvas className = 'homeCanvas' camera = {{ position: [0, 0, 5] }}> */}

					{/* <PerspectiveCamera makeDefault fov={17.5} position={[0, 0, 15]} /> */}
					{/* <PerspectiveCamera makeDefault position={[0, 0.5, 6.25]} /> */}
					<PerspectiveCamera makeDefault fov={25} position={[0, 0.5, 10]} />

					{/* <mesh>
						<boxGeometry args={[2, 2, 2]} />
						<meshStandardMaterial color={'orange'} />
					</mesh> */}

					<ambientLight />
					<pointLight position={[5, 5, 5]} />
					{/* <directionalLight position={[5, 5, 5]} /> */}

					{/* <Cube /> */}

					{/* <Suspense>
						<Svg src='../assets/images/0elements/shigeru_logo.svg' position={[0, 0, 0]} scale={0.05} />
					</Suspense> */}

					<Logo />

				</Canvas>

			{/* #endregion -------------------- REF: https://www.youtube.com/watch?v=DPl34H2ISsk -------------------- */}

			{/* </div> */}
		</>
	)
}


// export default Home;