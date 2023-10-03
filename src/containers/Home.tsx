import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import axios from 'axios';
import type { Movie } from 'utils/types';
import { CardsWrapper } from 'containers/Home.styles';
import { formatter } from 'utils';
import Loader from 'components/Loader';
import { useCartState } from 'utils/context';

const Home = () => {
	const [moviesApi, setMoviesApi] = useState<Movie[]>([]);
	const [wasAddedStates, setWasAddedStates] = useState(
		Array(moviesApi.length).fill(false)
	);
	const {
		state: { movies },
		dispatch,
	} = useCartState();

	const handleActiveButton = (activate: boolean, index: number) => {
		const updatedWasAddedStates = [...wasAddedStates];
		updatedWasAddedStates[index] = activate;
		setWasAddedStates(updatedWasAddedStates);

		setTimeout(() => {
			const updatedWasAddedStates = [...wasAddedStates];
			updatedWasAddedStates[index] = !activate;
			setWasAddedStates(updatedWasAddedStates);
		}, 1000);
	};

	const addItem = (movie: Movie, index: number) => {
		handleActiveButton(true, index);
		dispatch({ type: 'ADD_MOVIE', movie });
	};

	const fetchMovieData = async () => {
		await axios('http://localhost:3001/products')
			.then(async (response) => {
				setMoviesApi(response.data);
			})
			.catch((error) => {
				throw new Error(error);
			});
	};

	useEffect(() => {
		void fetchMovieData();
	}, []);

	return (
		<>
			<Header />
			{moviesApi.length === 0 ? (
				<Loader />
			) : (
				<CardsWrapper>
					{moviesApi.map((movie, index) => {
						return (
							<Card
								key={movie.id}
								wasAdded={wasAddedStates[index]}
								movieName={movie.title}
								movieValue={formatter.format(movie.price)}
								imgSrc={movie.image}
								quantity={
									movies.filter((item) => item.title === movie.title).length
								}
								onClick={() => {
									addItem(movie, index);
								}}
							/>
						);
					})}
				</CardsWrapper>
			)}
		</>
	);
};

export default Home;
