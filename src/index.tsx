import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'App';
import GlobalStyles from 'styles/global';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<GlobalStyles />
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);

reportWebVitals();
