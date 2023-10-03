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
import { currencyFormatter } from 'utils';
import EmptyCart from 'components/EmptyCart';
import { useCartState, useMovieManagement } from 'utils/context';
import { type Movie } from 'utils/types';

const Cart = () => {
	const {
		state: { movies },
	} = useCartState();
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>();
	const [cartTotal, setCartTotal] = useState(0);
	const { addMovie, removeMovie, removeSpecificTitle, finishPurchase } =
		useMovieManagement();

	const handleQuantity = (comparator: string) => {
		return movies.filter((item) => item.title === comparator).length;
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
								quantity={handleQuantity(movie.title)}
								addItem={() => {
									addMovie(movie);
								}}
								removeItem={() => {
									removeMovie(movie.id);
								}}
								removeTitle={() => {
									removeSpecificTitle(movie.id);
								}}
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
								{currencyFormatter.format(cartTotal)}
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
