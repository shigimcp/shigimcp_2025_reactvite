//#region ==================== MARK: IMPORTS ====================

// import React, { useRef, useEffect } from 'react';
import { useRef, useEffect } from 'react';

import '../stylesheets/App.css';

//#endregion ==================== IMPORTS ====================


//#region ==================== MARK: CONSTANTS - RESUME URLs ====================

// const remoteResumeLoc = 'https://www.shigimcp.com/assets/resume/';
const remoteResumeLoc = '/resume/';


//#region -------------------- MARK: CONSTANTS - RESUME URLs: SHORT --------------------

const resumePDFurl_short = remoteResumeLoc + 'smcpherson_resume_2026_short/smcpherson_resume_2026_short.pdf';
const resumeDOCXurl_short = remoteResumeLoc + 'smcpherson_resume_2026_short/smcpherson_resume_2026_short.docx';
const resumeSimpleDOCXurl_short = remoteResumeLoc + 'smcpherson_resume_2026_short/smcpherson_resume_2026_short_simplified.docx';
const resumeTXTurl_short = remoteResumeLoc + 'smcpherson_resume_2026_short/smcpherson_resume_2026_short.txt';
const resumeZIPurl_short = remoteResumeLoc + 'smcpherson_resume_2026_short/smcpherson_resume_2026_short.zip';

const resumePDFfilename_short = 'smcpherson_resume_2026_short.pdf';
const resumeDOCXfilename_short = 'smcpherson_resume_2026_short.docx';
const resumeSimpleDOCXfilename_short = 'smcpherson_resume_2026_short_simplified.docx';
const resumeTXTfilename_short = 'smcpherson_resume_2026_short.txt';
const resumeZIPfilename_short = 'smcpherson_resume_2026_short.zip';

//#endregion -------------------- CONSTANTS - RESUME URLs: SHORT --------------------


//#region -------------------- MARK: CONSTANTS - RESUME URLs: LONG --------------------

const resumePDFurl_long = remoteResumeLoc + 'smcpherson_resume_2026_long/smcpherson_resume_2026_long.pdf';
const resumeDOCXurl_long = remoteResumeLoc + 'smcpherson_resume_2026_long/smcpherson_resume_2026_long.docx';
const resumeSimpleDOCXurl_long = remoteResumeLoc + 'smcpherson_resume_2026_long/smcpherson_resume_2026_long_simplified.docx';
const resumeTXTurl_long = remoteResumeLoc + 'smcpherson_resume_2026_long/smcpherson_resume_2026_long.txt';
const resumeZIPurl_long = remoteResumeLoc + 'smcpherson_resume_2026_long/smcpherson_resume_2026_long.zip';

const resumePDFfilename_long = 'smcpherson_resume_2026_long.pdf';
const resumeDOCXfilename_long = 'smcpherson_resume_2026_long.docx';
const resumeSimpleDOCXfilename_long = 'smcpherson_resume_2026_long_simplified.docx';
const resumeTXTfilename_long = 'smcpherson_resume_2026_long.txt';
const resumeZIPfilename_long = 'smcpherson_resume_2026_long.zip';

//#endregion -------------------- CONSTANTS - RESUME URLs: LONG --------------------


//#region -------------------- MARK: CONSTANTS - RESUME URLs: OLD --------------------

// const resumePDFurl = remoteResumeLoc + 'smcpherson_resume_2025.pdf';
// const resumeDOCXurl = remoteResumeLoc + 'smcpherson_resume_2025.docx';
// const resumeSimpleDOCXurl = remoteResumeLoc + 'smcpherson_resume_2025_simplified.docx';
// const resumeTXTurl = remoteResumeLoc + 'smcpherson_resume_2025.txt';
// const resumeZIPurl = remoteResumeLoc + 'smcpherson_resume_2025.zip';

// const resumePDFfilename = 'smcpherson_resume_2025.pdf';
// const resumeDOCXfilename = 'smcpherson_resume_2025.docx';
// const resumeSimpleDOCXfilename = 'smcpherson_resume_2025_simplified.docx';
// const resumeTXTfilename = 'smcpherson_resume_2025.txt';
// const resumeZIPfilename = 'smcpherson_resume_2025.zip';

//#endregion -------------------- CONSTANTS - RESUME URLs: OLD --------------------

//#endregion ==================== CONSTANTS - RESUME URLs ====================


// #region ==================== MARK: ResumeModal REF01: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/ ====================
//         ==================== ResumeModal REF02: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FDialog.jsx ====================

const ResumeModal = ({ isOpen, hasCloseBtn = true, onClose }) => {

	const modalRef = useRef(null);

	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Escape') {
			handleCloseModal();
		}
	};

	useEffect(() => {

		const modalElement = modalRef.current;

		if (!modalElement) return;

		if (isOpen) {
			modalElement.showModal();
		} else {
			modalElement.close();
		}

	}, [isOpen]);


	// const downloadFileAtURL = (url) => {
	// 	const fileName = url.split('/').pop();
	// 	const aTag = document.createElement('a');
	// 	aTag.href = url;
	// 	aTag.setAttribute('download', fileName);
	// 	document.body.appendChild(aTag);
	// 	aTag.click();
	// 	aTag.remove();
	// }


	return (
		// <dialog className="dialogModal" ref={modalRef} onKeyDown={handleKeyDown}>
		<dialog className="dialogModal" ref={modalRef} onKeyDown={handleKeyDown} onClick={handleCloseModal}>

			<div className='dialogBox' id='dialogBoxID'>

				{hasCloseBtn && (
					<button className='dialogCloseBTN' onClick={handleCloseModal}>X</button>
				)}

				<p className='dialogHed'>Choose your format...</p>

				<div className='dialogMenuBox' id='dialogMenuBoxID'>

				{/* #region -------------------- MARK: dialogMenu: SHORT - REF: https://www.youtube.com/watch?v=IPEqb_AJbAQ -------------------- */}

					<div className='dialogMenu' id='dialogMenuID'>
						<p>short form...</p>

						{/* <a href={resumePDFurl} download target='_blank' rel='noreferrer'>{resumePDFfilename}</a>
						<a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>{resumeDOCXfilename}</a>
						<a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
						<a href={resumeTXTurl} download target='_blank' rel='noreferrer'>{resumeTXTfilename}</a> */}

						{/* <a href={resumePDFurl} download target='_self' rel='noreferrer'>{resumePDFfilename}</a>
						<a href={resumeDOCXurl} download target='_self' rel='noreferrer'>{resumeDOCXfilename}</a>
						<a href={resumeSimpleDOCXurl} download target='_self' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
						<a href={resumeTXTurl} download target='_self' rel='noreferrer'>{resumeTXTfilename}</a> */}

						{/* <a href={resumePDFurl} download target='_blank' rel='noreferrer'>{resumePDFfilename}</a>
						<a href={resumeDOCXurl} download target='_self' rel='noreferrer'>{resumeDOCXfilename}</a>
						<a href={resumeSimpleDOCXurl} download target='_self' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
						<a href={resumeTXTurl} download target='_blank' rel='noreferrer'>{resumeTXTfilename}</a> */}

						{/* <a href={resumePDFurl} onClick={() => {downloadFileAtURL(resumePDFurl)}}>{resumePDFfilename}</a>
						<a href={resumeDOCXurl} onClick={() => {downloadFileAtURL(resumeDOCXurl)}}>{resumeDOCXfilename}</a>
						<a href={resumeSimpleDOCXurl} onClick={() => {downloadFileAtURL(resumeSimpleDOCXurl)}}>{resumeSimpleDOCXfilename}</a>
						<a href={resumeTXTurl} onClick={() => {downloadFileAtURL(resumeTXTurl)}}>{resumeTXTfilename}</a> */}

						<a href={resumePDFurl_short} download target='_blank' rel='noreferrer'>{resumePDFfilename_short}</a>
						<a href={resumeDOCXurl_short} download target='_self' rel='noreferrer'>{resumeDOCXfilename_short}</a>
						<a href={resumeSimpleDOCXurl_short} download target='_self' rel='noreferrer'>{resumeSimpleDOCXfilename_short}</a>
						<a href={resumeTXTurl_short} download target='_blank' rel='noreferrer'>{resumeTXTfilename_short}</a>

						{/* <div className='dialogHed dialogHed02' id='dialogHed02ID'> */}
							<p>or download ALL...</p>
						{/* </div> */}

						{/* <div className='dialogMenu dialogMenu02' id='dialogMenu02ID'> */}
							{/* <a href={resumeZIPurl} download target='_blank' rel='noreferrer'>{resumeZIPfilename}</a> */}
							{/* <a href={resumeZIPurl} download target='_self' rel='noreferrer'>{resumeZIPfilename}</a> */}
							{/* <a href={resumeZIPurl} onClick={() => {downloadFileAtURL(resumeZIPurl)}}>{resumeZIPfilename}</a> */}
							<a href={resumeZIPurl_short} download target='_self' rel='noreferrer'>{resumeZIPfilename_short}</a>
						{/* </div> */}
					</div>

				{/* #endregion -------------------- dialogMenu: SHORT - REF: https://www.youtube.com/watch?v=IPEqb_AJbAQ -------------------- */}


				{/* #region -------------------- MARK: dialogMenu: LONG - REF: https://www.youtube.com/watch?v=IPEqb_AJbAQ -------------------- */}

					<div className='dialogMenu' id='dialogMenuID'>
						<p>long form...</p>

						<a href={resumePDFurl_long} download target='_blank' rel='noreferrer'>{resumePDFfilename_long}</a>
						<a href={resumeDOCXurl_long} download target='_self' rel='noreferrer'>{resumeDOCXfilename_long}</a>
						<a href={resumeSimpleDOCXurl_long} download target='_self' rel='noreferrer'>{resumeSimpleDOCXfilename_long}</a>
						<a href={resumeTXTurl_long} download target='_blank' rel='noreferrer'>{resumeTXTfilename_long}</a>

						{/* <div className='dialogHed dialogHed02' id='dialogHed02ID'> */}
							<p>or download ALL...</p>
						{/* </div> */}

						{/* <div className='dialogMenu dialogMenu02' id='dialogMenu02ID'> */}
							<a href={resumeZIPurl_long} download target='_self' rel='noreferrer'>{resumeZIPfilename_long}</a>
						{/* </div> */}
					</div>

				{/* #endregion -------------------- dialogMenu: LONG - REF: https://www.youtube.com/watch?v=IPEqb_AJbAQ -------------------- */}

				</div>
			</div>

		</dialog>
	);
};

//            ==================== MARK: ResumeModal REF01: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/ ====================
// #endregion ==================== MARK: ResumeModal REF02: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FDialog.jsx ====================

export default ResumeModal;
