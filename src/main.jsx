//#region ==================== MARK: IMPORTS ====================

import { BrowserRouter } from 'react-router-dom';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./stylesheets/index.css";

//#endregion ==================== MARK: IMPORTS ====================


// console.log('');
// console.log('==================== COMPONENT: main.jsx ====================');


// #region ========================= MARK: ROUTING - REF: https://hygraph.com/blog/routing-in-react =========================

const root = createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		{/* <BrowserRouter> */}
		{/* <BrowserRouter basename={import.meta.env.BASE_URL}> */}
		<BrowserRouter basename='/shigimcp2025_reactvite/'>
			<App />
		</BrowserRouter>
	</StrictMode>
);

// #endregion ========================= MARK: ROUTING - REF: https://hygraph.com/blog/routing-in-react =========================
