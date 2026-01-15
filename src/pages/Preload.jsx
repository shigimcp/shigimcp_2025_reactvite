// REF: https://medium.com/@pylnata/import-and-preloading-of-bunch-of-images-in-react-app-c82068d26247

/* Preload.js */

import React, { useEffect, useState } from "react";

// const Preload = (props) => {
// const Preload = () => {
// export const Preload = (props) => {
// export const Preload = () => {
export default function Preload() {

	const [images, setImages] = useState({});
	const [imagesReadyCnt, setImagesReadyCnt] = useState(0); // counter of preloaded images

	useEffect(() => {
		const importedImages = {};
		let i = 0;
		// const r = require.context(
		// const r = import.meta.glob(
		const r = import.meta.globEager(

			// relative path to folder with images, that we want to be imported and preloaded
			// "./images/",
			"./assets/images/",

			// with subfolders or not
			// false,
			true,

			// extensions of files
			/\.(png|jpe?g|svg)$/
		);

		r.keys().forEach((item) => {
			// import image
			const importedImg = r(item);

			// name of file will be a key, path to file will be a value
			importedImages[item.replace("./", "")] = importedImg;

			const img = new Image();

			img.onload = () => {
				i++;
				// increase counter when image is loaded
				setImagesReadyCnt(i);
			};
			img.src = importedImg;
		});
		setImages(importedImages);
	}, []);

	// if images are not loaded yet( means that counter != number of files in imported folder))
	if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {
		return "Loading ...";
	}

	console.log('images = ' + images);

	return (
		<>
			{/* <img src={images["bg.png"]} /> */}
			<img src={images["suspense.png"]} />
			{/* <Component img={images["apple.svg"]} /> */}
		</>
	);
};

// export default Preload;