import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import axios from 'axios';
import type { Movie } from 'utils/types';
import { CardsWrapper } from 'containers/Home.styles';
import { formatter } from 'utils';
import Loader from 'components/Loader';

const Home = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const fetchMovieData = async () => {
		await axios('http://localhost:3001/products')
			.then(async (response) => {
				setMovies(response.data);
			})

			.catch((error) => {
				throw new Error(error);
			});
	};

	useEffect(() => {
		void fetchMovieData();
		console.log(movies);
	}, []);

	return (
		<>
			<Header />
			{movies.length === 0 ? (
				<Loader />
			) : (
				<CardsWrapper>
					{movies.map((movie, index) => {
						return (
							<Card
								key={index}
								wasAdded={false}
								movieName={movie.title}
								movieValue={formatter.format(movie.price)}
								imgSrc={movie.image}
							/>
						);
					})}
				</CardsWrapper>
			)}
		</>
	);
};

export default Home;
