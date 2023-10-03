import React, { useEffect } from 'react';

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
// import { Movie } from 'utils/types';

const Cart = () => {
	const hasItems = true;
	const {
		state: { movies },
	} = useCartState();

	// const addItem = (item: Movie) => {
	// 	dispatch({ type: 'ADD_MOVIE', item });
	// };

	// const removeItem = (itemId: number) => {
	// 	dispatch({ type: 'REMOVE_MOVIE', itemId });
	// };

	useEffect(() => {
		console.log('ContextState: ', movies);
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
					<ItemCart />
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
