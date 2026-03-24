import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { Application, Assets, Sprite } from 'pixi.js';

// import './stylesheets/banners.css';
// import './stylesheets/NMPF_04852.css';

import '../banners.css';
import './NMPF_04852.css';

import skyline from './images/skyline.png';
import model from './images/model.png';
import bottle from './images/bottle.png';
import logo_NM from './images/logo_NM.png';
import logo_PF from './images/logo_PF.png';
import tag from './images/tag.png';
import cta from './images/btn_buy.svg';
import starspin from './images/starspin.svg';

gsap.registerPlugin(PixiPlugin);

export default function NMPF_04852() {
	const skyline_Ref = useRef(null);
	const model_Ref = useRef(null);
	const model_mask_Ref = useRef(null);
	const bottle_Ref = useRef(null);
	const logo_NM_Ref = useRef(null);
	const logo_PF_Ref = useRef(null);
	const tag_Ref = useRef(null);
	const cta_Ref = useRef(null);
	const starspin_Ref = useRef(null);
	const starspin01_Ref = useRef(null);
	const starspin02_Ref = useRef(null);
	const starspin_mask_Ref = useRef(null);

	const appRef = useRef(null);
	const particleContainer_Ref = useRef(null);

	const clickTag_Ref = useRef(null);
	const tl = gsap.timeline({ delay: 0 });

	const numParticles = 75;
	const baseSpeed = 10;
	const warpSpeed = 0;
	const sparkleBaseSize = 0.5;

	const appWidth = 300;
	const appHeight = 250;
	const appOffset = 0.70;

	const animDuration01_5 = 1.50;
	const animDuration02 = 2.00;
	const animDuration03 = 3.00;
	const animDuration05 = 5.00;

	function randomizeSparkle() {
		let dx = Math.random() * (-appWidth - appWidth) + appWidth;
		let dy = Math.random() * (-(appHeight * appOffset) - appHeight) + appHeight;

		return (
			[dx, dy]
		)
	}

	function removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	function handleClick() {
		removeAllChildNodes(particleContainer_Ref.current);
		tl.pause(0);
		tl.restart();
	}

	useEffect(() => {
		if (particleContainer_Ref.current && !appRef.current) {

			const app = new Application();

			const initPixi = async () => {

				await app.init({ 
					backgroundAlpha: 0,

					width: appWidth, 
					height: appHeight 
				});

				if (particleContainer_Ref.current) {
					particleContainer_Ref.current.appendChild(app.canvas);
					appRef.current = app;
				}

				let cameraZ = 0;
				let speed = 0;

				const sparkleArray = [];

				for (let i = 0; i < numParticles; i++) {

					const sparkleTexture = await Assets.load('./src/images/sparkle.png');
					const sparkleSprite = new Sprite(sparkleTexture);

					app.stage.addChild(sparkleSprite);

					sparkleSprite.anchor.set(0.5, 0.5);
					sparkleSprite.x = app.screen.width / 2;
					sparkleSprite.y = app.screen.height / 2;
					sparkleSprite.z = 0;
					sparkleSprite.scale = 0.25;
					sparkleSprite.rotation = 0;

					let sparkleSpriteDX = randomizeSparkle()[0];
					let sparkleSpriteDY = randomizeSparkle()[1];

					sparkleArray.push([sparkleSprite, sparkleSpriteDX, sparkleSpriteDY]);
				}

				app.ticker.add((delta) => {

					speed += (warpSpeed - speed) / 10;
					cameraZ += delta.deltaTime * (speed + baseSpeed);

					for (let i = 0; i < sparkleArray.length; i++) {

						const thisSparkle = sparkleArray[i][0];
						const z = thisSparkle.z - cameraZ;
						const distanceScale = Math.max(0, (2000 - z) / 2000);

						let velocity = {x: sparkleArray[i][1] / -100, y: sparkleArray[i][2] / -100};

						thisSparkle.x += velocity.x * delta.deltaTime;
						thisSparkle.y += velocity.y * delta.deltaTime;
						thisSparkle.scale.set(distanceScale * sparkleBaseSize * -0.375);
						thisSparkle.rotation += 0.1875 * delta.deltaTime;
						thisSparkle.alpha += -0.0075 * (delta.deltaMS / (1000 / 60));
					}
				})

				const sparkleTimer = setTimeout(() => {
					app.ticker.stop();
					console.log('Ticker stopped');
				}, 5000);

				return () => {
					clearTimeout(sparkleTimer);
				};
			};


			tl
				.set([model_mask_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
				.set([starspin01_Ref.current, starspin02_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
				.set([starspin01_Ref.current, starspin02_Ref.current], { autoAlpha: 0.25 }, 'frame00')

				.fromTo([starspin_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame01 +=0')
				.fromTo([starspin01_Ref.current], { rotation: -60 }, { rotation: 0, ease: 'none', duration: animDuration05 }, 'frame01 +=0')
				.fromTo([starspin02_Ref.current], { rotation: 60 }, { rotation: 0, ease: 'none', duration: animDuration05 }, 'frame01 +=0')

				.fromTo([model_mask_Ref.current], { scale: 0 }, { scale: 5, ease: 'power3.out', duration: animDuration03 }, 'frame01 +=0.5')
				.fromTo([bottle_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=1.5')
				.fromTo([tag_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=1.75')
				.fromTo([cta_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=2.25')
			;

			const pixiTimer = setTimeout(() => {
				initPixi();
			}, 500);

			return () => {
				clearTimeout(pixiTimer);
			};
		}

		return () => {
			if (appRef.current) {
				appRef.current.destroy(true, true);
				appRef.current = null;
			}
		};

	}, [tl, warpSpeed]);


	return (
		<>
			<div className='banner300x250 nmpf_04852' id='nmpf_04852ID'>

				<svg className='starspinDiv' id='starspinDivID' version='1.1' baseProfile='full' x='0' y='0' width='300' height='250' space='preserve' ref={starspin_Ref}>
					<defs>
						<radialGradient id='maskGrad_starspinID' gradientUnits='userSpaceOnUse' r='160'>
							<stop offset='0' style={{ stopColor: '#FFFFFF' }} />
							<stop offset='0.875' style={{ stopColor: '#000000' }} />
						</radialGradient>
						<mask id='mask_starspinID'>
							<rect className='class_mask' fill='url(#maskGrad_starspinID)' x='0' y='0' width='300' height='250' />
						</mask>
					</defs>
					<g mask='url(#mask_starspinID)' ref={starspin_mask_Ref}>
						<image href={starspin} x='0' y='-10' width='300' height='322.8515625' ref={starspin01_Ref} />
						<image href={starspin} x='0' y='-10' width='300' height='322.8515625' ref={starspin02_Ref} />
					</g>
				</svg>

				<div className='particleContainer' id='particleContainerID' ref={particleContainer_Ref}></div>

				<img className='skyline' id='skylineID' src={skyline} alt='skyline' ref={skyline_Ref} />

				<svg className='modelDiv' id='modelDivID' version='1.1' baseProfile='full' width='92.5' height='225' space='preserve' ref={model_Ref}>
					<defs>
						<radialGradient id='maskGrad_modelID' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
							<stop offset='0.25' style={{ stopColor: '#FFFFFF' }} />
							<stop offset='1' style={{ stopColor: '#000000' }} />
						</radialGradient>
						<mask id='mask_modelID'>
							<rect className='class_mask' fill='url(#maskGrad_modelID)' x='36.25' y='0' width='92.5' height='225' ref={model_mask_Ref} />
						</mask>
					</defs>
					<g mask='url(#mask_modelID)'>
						<image href={logo_PF} x='0' y='0' width='165' height='50' ref={logo_PF_Ref} />
						<image href={model} x='32.25' y='15' width='92.5' height='225' />
						<image href={logo_NM} x='0' y='0' width='165' height='50' ref={logo_NM_Ref} />
					</g>
				</svg>

				<img src={bottle} className='bottle' id='bottleID' alt='bottle' ref={bottle_Ref} />
				<img src={tag} className='tag' id='tagID' alt='bottle' ref={tag_Ref} />
				<img src={cta} className='cta' id='ctaID' alt='cta' ref={cta_Ref} />

				<div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={handleClick}></div>
			</div>
		</>
	)
}