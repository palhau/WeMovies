import React from 'react';
import Header from 'components/Header';
import Card from 'components/Card';

const Home = () => {
	return (
		<>
			<Header />
			<Card wasAdded={false} movieName="Jose Santoro" movieValue={9.99} />
		</>
	);
};

export default Home;
