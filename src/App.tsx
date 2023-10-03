import Header from 'components/Header/Header';
import React from 'react';

const itemsOnCart = 0;

function App() {
	return (
		<>
			<Header itemsCart={itemsOnCart} />
			<div className="App"></div>
		</>
	);
}

export default App;
