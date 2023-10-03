import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import Home from 'containers/Home';
import Cart from 'containers/Cart';
import Purchased from 'containers/Purchased';
import { CartStateProvider } from 'utils/context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<CartStateProvider>
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/purchased" element={<Purchased />} />
			</Routes>
		</BrowserRouter>
	</CartStateProvider>
);

reportWebVitals();
