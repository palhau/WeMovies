import React from 'react';
import {
	CartItemsCounter,
	CartTextBlock,
	CartTitle,
	CartWrapper,
	Title,
	HeaderContainer,
} from './Header.styles';
import CartIcon from 'assets/icons/CartIcon';

interface HeaderProps {
	itemsCart?: number;
}

const Header = ({ itemsCart }: HeaderProps) => {
	return (
		<HeaderContainer>
			<Title to="/">WeMovies</Title>
			<CartWrapper to="/cart">
				<CartTextBlock>
					<CartTitle>Meu Carrinho</CartTitle>
					<CartItemsCounter>{itemsCart} itens</CartItemsCounter>
				</CartTextBlock>
				<CartIcon />
			</CartWrapper>
		</HeaderContainer>
	);
};

export default Header;
