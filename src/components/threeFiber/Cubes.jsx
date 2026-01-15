//#region ==================== MARK: IMPORTS ====================

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

//#endregion ==================== IMPORTS ====================


//#region ==================== MARK: CUBES - REF: https://r3f.docs.pmnd.rs/getting-started/introduction ====================

function Box(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const boxRef = useRef()

	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)

	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (boxRef.current.rotation.y += delta))

	// Return the view, these are regular Threejs elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={boxRef}
			scale={clicked ? 1.5 : 1}

			onClick={() => click(!clicked)}
			onPointerOver={(event) => (event.stopPropagation(), hover(true))}
			onPointerOut={() => hover(false)}
		>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

//#endregion ==================== CUBES - REF: https://r3f.docs.pmnd.rs/getting-started/introduction ====================




//#region ==================== CUBES - REF: https://www.digitalocean.com/community/tutorials/react-react-with-threejs ====================

export default function Cubes() {

	return (
		<>
			<Canvas>

				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
				{/* <OrbitControls /> */}

			</Canvas>
		</>
	)
}

//#endregion ==================== CUBES - REF: https://www.digitalocean.com/community/tutorials/react-react-with-threejs ====================
