//#region ==================== MARK: IMPORTS ====================

// import React, { useRef, useEffect } from 'react';
import { useRef, useEffect } from 'react';

import '../stylesheets/App.css';

//#endregion ==================== MARK: IMPORTS ====================


//#region ==================== MARK: CONSTANTS - RESUME URLs ====================

// const remoteResumeLoc = 'https://www.shigimcp.com/assets/resume/';
const remoteResumeLoc = '/resume/';

const resumePDFurl = remoteResumeLoc + 'smcpherson_resume_2025.pdf';
const resumeDOCXurl = remoteResumeLoc + 'smcpherson_resume_2025.docx';
const resumeSimpleDOCXurl = remoteResumeLoc + 'smcpherson_resume_2025_simplified.docx';
const resumeTXTurl = remoteResumeLoc + 'smcpherson_resume_2025.txt';
const resumeZIPurl = remoteResumeLoc + 'smcpherson_resume_2025.zip';

const resumePDFfilename = 'smcpherson_resume_2025.pdf';
const resumeDOCXfilename = 'smcpherson_resume_2025.docx';
const resumeSimpleDOCXfilename = 'smcpherson_resume_2025_simplified.docx';
const resumeTXTfilename = 'smcpherson_resume_2025.txt';
const resumeZIPfilename = 'smcpherson_resume_2025.zip';

//#endregion ==================== MARK: CONSTANTS - RESUME URLs ====================


// #region ==================== MARK: ResumeModal REF01: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/ ====================
//         ==================== MARK: ResumeModal REF02: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FDialog.jsx ====================

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

				<div className='dialogHed' id='dialogHedID'>
					<p>Choose your format...</p>
				</div>


			{/* #region -------------------- MARK: dialogMenu REF: https://www.youtube.com/watch?v=IPEqb_AJbAQ -------------------- */}

				<div className='dialogMenu' id='dialogMenuID'>
					{/* <a href={resumePDFurl} download target='_blank' rel='noreferrer'>{resumePDFfilename}</a>
					<a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>{resumeDOCXfilename}</a>
					<a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
					<a href={resumeTXTurl} download target='_blank' rel='noreferrer'>{resumeTXTfilename}</a> */}

					{/* <a href={resumePDFurl} download target='_self' rel='noreferrer'>{resumePDFfilename}</a>
					<a href={resumeDOCXurl} download target='_self' rel='noreferrer'>{resumeDOCXfilename}</a>
					<a href={resumeSimpleDOCXurl} download target='_self' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
					<a href={resumeTXTurl} download target='_self' rel='noreferrer'>{resumeTXTfilename}</a> */}

					<a href={resumePDFurl} download target='_blank' rel='noreferrer'>{resumePDFfilename}</a>
					<a href={resumeDOCXurl} download target='_self' rel='noreferrer'>{resumeDOCXfilename}</a>
					<a href={resumeSimpleDOCXurl} download target='_self' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
					<a href={resumeTXTurl} download target='_blank' rel='noreferrer'>{resumeTXTfilename}</a>

					{/* <a href={resumePDFurl} onClick={() => {downloadFileAtURL(resumePDFurl)}}>{resumePDFfilename}</a>
					<a href={resumeDOCXurl} onClick={() => {downloadFileAtURL(resumeDOCXurl)}}>{resumeDOCXfilename}</a>
					<a href={resumeSimpleDOCXurl} onClick={() => {downloadFileAtURL(resumeSimpleDOCXurl)}}>{resumeSimpleDOCXfilename}</a>
					<a href={resumeTXTurl} onClick={() => {downloadFileAtURL(resumeTXTurl)}}>{resumeTXTfilename}</a> */}
				</div>

				<div className='dialogHed dialogHed02' id='dialogHed02ID'>
					<p>or download ALL...</p>
				</div>

				<div className='dialogMenu dialogMenu02' id='dialogMenu02ID'>
					{/* <a href={resumeZIPurl} download target='_blank' rel='noreferrer'>{resumeZIPfilename}</a> */}
					<a href={resumeZIPurl} download target='_self' rel='noreferrer'>{resumeZIPfilename}</a>
					{/* <a href={resumeZIPurl} onClick={() => {downloadFileAtURL(resumeZIPurl)}}>{resumeZIPfilename}</a> */}
				</div>

			{/* #endregion -------------------- MARK: dialogMenu REF: https://www.youtube.com/watch?v=IPEqb_AJbAQ -------------------- */}

			</div>

		</dialog>
	);
};

//            ==================== MARK: ResumeModal REF01: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/ ====================
// #endregion ==================== MARK: ResumeModal REF02: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FDialog.jsx ====================

export default ResumeModal;
