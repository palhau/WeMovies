import React from 'react';
import {
	CartItemsCounter,
	CartTextBlock,
	CartTitle,
	CartWrapper,
	Title,
	Wrapper,
} from './Header.styles';
import CartIcon from 'assets/cartIcon';

interface HeaderProps {
	itemsCart?: number;
}

const Header = ({ itemsCart }: HeaderProps) => {
	return (
		<Wrapper>
			<Title>WeMovies</Title>
			<CartWrapper>
				<CartTextBlock>
					<CartTitle>Meu Carrinho</CartTitle>
					<CartItemsCounter>{itemsCart} itens</CartItemsCounter>
				</CartTextBlock>
				<CartIcon />
			</CartWrapper>
		</Wrapper>
	);
};

export default Header;
