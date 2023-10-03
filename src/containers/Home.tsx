import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import axios from 'axios';
import type { Movie } from 'utils/types';
import { CardsWrapper } from 'containers/Home.styles';
import Loader from 'components/Loader';
import { useCartState, useMovieManagement } from 'utils/context';

const Home = () => {
	const [moviesApi, setMoviesApi] = useState<Movie[]>([]);
	const [wasAddedStates, setWasAddedStates] = useState(
		Array(moviesApi.length).fill(false)
	);
	const {
		state: { movies },
	} = useCartState();
	const { addMovie } = useMovieManagement();

	const handleActiveButton = (index: number) => {
		const updatedWasAddedStates = [...wasAddedStates];
		updatedWasAddedStates[index] = true;
		setWasAddedStates(updatedWasAddedStates);

		setTimeout(() => {
			const updatedWasAddedStates = [...wasAddedStates];
			updatedWasAddedStates[index] = false;
			setWasAddedStates(updatedWasAddedStates);
		}, 1000);
	};

	const handleMovieAdd = (movie: Movie, index: number) => {
		handleActiveButton(index);
		addMovie(movie);
	};

	const handleQuantity = (comparator: string) => {
		return movies.filter((item) => item.title === comparator).length;
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
								movie={movie}
								quantity={handleQuantity(movie.title)}
								onClick={() => {
									handleMovieAdd(movie, index);
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
