//#region ==================== MARK: IMPORTS ====================

// import React from 'react';

// import '../stylesheets/BodyContainer.scss';
// import '../stylesheets/App.css';
import '../stylesheets/Home.css';

//#region -------------------- MARK: React Three Fiber REF: https://r3f.docs.pmnd.rs/getting-started/introduction --------------------
//#region -------------------- MARK: three.js REF: https://threejs.org/manual/#en/creating-a-scene --------------------

import * as THREE from 'three';

// import { Canvas } from 'react-three-fiber';
// import { Canvas } from '@react-three/fiber';
// import Scene from '../components/three/Scene';
// import Camera from '../components/three/Camera';
// import Lights from '../components/three/Lights';

// import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

//#endregion -------------------- MARK: three.js REF: https://threejs.org/manual/#en/creating-a-scene --------------------
//#endregion -------------------- MARK: React Three Fiber REF: https://r3f.docs.pmnd.rs/getting-started/introduction --------------------

//#endregion ==================== MARK: IMPORTS ====================



//#region ==================== MARK: OLD ====================

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

//#endregion ==================== MARK: OLD ====================



//#region ==================== MARK: three.js REF: https://threejs.org/manual/#en/creating-a-scene ====================

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const camera = new THREE.PerspectiveCamera(75, 1440 / 1000, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth/2, window.innerHeight/2, false);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);
// document.querySelector('#canvasContainer').appendChild(renderer.domElement)

const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry()
mesh.material = new THREE.MeshStandardMaterial()

scene.add(mesh)

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 15;

function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);

	// requestAnimationFrame(animate)
	// renderer.render(scene, camera)
}

animate();


//#endregion ==================== MARK: three.js REF: https://threejs.org/manual/#en/creating-a-scene ====================


// const Home = (props) => {
// export default function Home(props) {
export default function Home() {

	//#region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Home.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	//#endregion ==================== FINDIN' OUT SH*T ====================

	return (
		<>
			{/* <div className='bodyContainer' id='bodyContainerID'>
				<h1>This is my Home page</h1>
				{navLoc}
			</div> */}

			<div id='canvasContainer'>
			{/* <div id='bodyContainer'> */}
				{/* <Canvas /> */}
				<Canvas>

					{/* <Scene />
					<Lights />
					<Camera /> */}

					<mesh>
						<boxGeometry args={[2, 2, 2]} />
						<meshPhongMaterial />
					</mesh>
					<ambientLight intensity={0.1} />
					<directionalLight position={[0, 0, 5]} color='red' />

				</Canvas>

				{/* {renderer.domElement} */}

			</div>
		</>
	)
}

// createRoot(document.getElementById('root')).render(<App />)


// export default Home;