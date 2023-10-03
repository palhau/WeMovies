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
// import { Movie } from 'utils/types';

const Cart = () => {
	const hasItems = true;
	const {
		state: { movies },
		dispatch,
	} = useCartState();
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>();

	const addItem = (movie: Movie) => {
		dispatch({ type: 'ADD_MOVIE', movie });
	};

	const removeItem = (movieId: number) => {
		dispatch({ type: 'REMOVE_MOVIE', movieId });
	};

	// const finishPurchase = (itemId: number) => {
	// 	dispatch({ type: 'RESET_STATE' });
	// };

	useEffect(() => {
		const filterArray = movies.filter(
			(item, index) => movies.indexOf(item) === index
		);
		setFilteredMovies(filterArray);
		console.log('ContextState: ', filterArray);
	}, [movies]);

	return (
		<>
			<Header />
			{hasItems ? (
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
								title={movie.title}
								price={movie.price}
								imgSrc={movie.image}
								quantity={
									movies.filter((item) => item.title === movie.title).length
								}
								addItem={addItem}
								removeItem={removeItem}
							/>
						);
					})}
					<CartFooterWrapper>
						<CartBtn to="/purchased">
							<CartBtnText>FINALIZAR PEDIDO</CartBtnText>
						</CartBtn>
						<CartFooterTextBlock>
							<CartText>TOTAL</CartText>
							<CartFooterTextTotal>
								{formatter.format(9.99)}
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
