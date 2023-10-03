import React from 'react';
import Header from 'components/Header';

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
