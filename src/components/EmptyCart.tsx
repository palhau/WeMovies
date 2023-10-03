import React from 'react';
import {
	EmptyCartBackBtn,
	EmptyCartBackBtnText,
	EmptyCartContainer,
	EmptyCartImageWrapper,
	EmptyCartText,
} from 'components/EmptyCart.styles';
import EmpetyCartImage from 'assets/images/EmptyCartImage';

const EmptyCart = () => {
	return (
		<EmptyCartContainer>
			<EmptyCartText>Parece que não há nada por aqui :(</EmptyCartText>
			<EmptyCartImageWrapper>
				<EmpetyCartImage />
			</EmptyCartImageWrapper>
			<EmptyCartBackBtn to="/">
				<EmptyCartBackBtnText>VOLTAR</EmptyCartBackBtnText>
			</EmptyCartBackBtn>
		</EmptyCartContainer>
	);
};

export default EmptyCart;
