import React from 'react';

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

const Cart = () => {
	return (
		<>
			<Header />
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
						<CartFooterTextTotal>{formatter.format(9.99)}</CartFooterTextTotal>
					</CartFooterTextBlock>
				</CartFooterWrapper>
			</CartContainer>
		</>
	);
};

export default Cart;
