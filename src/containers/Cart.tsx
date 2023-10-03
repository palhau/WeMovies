import React from 'react';

import Header from 'components/Header';
import ItemCart from 'components/ItemCart';
import { CartContainer } from 'containers/Cart.styles';

const Cart = () => {
	return (
		<>
			<Header />
			<CartContainer>
				<ItemCart />
			</CartContainer>
		</>
	);
};

export default Cart;
