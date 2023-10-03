import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import ItemCart from 'components/ItemCart';
import {
	CartContainer,
	CartFooterTextBlock,
	CartFooterWrapper,
	CartText,
	CartHeaderWrapper,
	CartBtn,
	CartBtnText,
	CartFooterTextTotal,
} from 'containers/Cart.styles';
import { formatter } from 'utils';
import EmptyCart from 'components/EmptyCart';
import { useCartState } from 'utils/context';
import { type Movie } from 'utils/types';

const Cart = () => {
	const {
		state: { movies },
		dispatch,
	} = useCartState();
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>();
	const [cartTotal, setCartTotal] = useState(0);

	const addMovie = (movie: Movie) => {
		dispatch({ type: 'ADD_MOVIE', movie });
	};

	const removeMovie = (movieId: number) => {
		dispatch({ type: 'REMOVE_MOVIE', movieId });
	};

	const removeSpecificTitle = (movieId: number) => {
		dispatch({ type: 'REMOVE_ALL_MOVIE', movieId });
	};

	const finishPurchase = () => {
		dispatch({ type: 'RESET_STATE' });
	};

	const handleTotal = (movies: Movie[]) => {
		let cartSubTotal = 0;
		movies.map((movie) => {
			return (cartSubTotal += movie.price);
		});
		setCartTotal(cartSubTotal);
	};

	useEffect(() => {
		const filterArray = movies.filter(
			(item, index) => movies.indexOf(item) === index
		);
		setFilteredMovies(filterArray);
		handleTotal(movies);
	}, [movies]);

	return (
		<>
			<Header />
			{movies.length > 0 ? (
				<CartContainer>
					<CartHeaderWrapper>
						<CartText>PRODUTO</CartText>
						<CartText>QTD</CartText>
						<CartText>SUBTOTAL</CartText>
					</CartHeaderWrapper>
					{filteredMovies?.map((movie) => {
						return (
							<ItemCart
								key={movie.id}
								movie={movie}
								quantity={
									movies.filter((item) => item.title === movie.title).length
								}
								addItem={addMovie}
								removeItem={removeMovie}
								removeTitle={removeSpecificTitle}
							/>
						);
					})}
					<CartFooterWrapper>
						<CartBtn to="/purchased" onClick={finishPurchase}>
							<CartBtnText>FINALIZAR PEDIDO</CartBtnText>
						</CartBtn>
						<CartFooterTextBlock>
							<CartText>TOTAL</CartText>
							<CartFooterTextTotal>
								{formatter.format(cartTotal)}
							</CartFooterTextTotal>
						</CartFooterTextBlock>
					</CartFooterWrapper>
				</CartContainer>
			) : (
				<EmptyCart />
			)}
		</>
	);
};

export default Cart;
