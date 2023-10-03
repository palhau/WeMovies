import React from 'react';
import { BtnText, BtnWrapper, QtdItems } from 'components/AddToCartBtn.styles';
import AddCartIcon from '../assets/icons/AddCartIcon';

export interface AddToCartBtnProps {
	wasAdded: boolean;
	quantity?: number;
	onClick: () => void;
}

const AddToCartBtn = ({ wasAdded, quantity, onClick }: AddToCartBtnProps) => {
	return (
		<BtnWrapper onClick={onClick} wasAdded={wasAdded}>
			<AddCartIcon />
			<QtdItems>{quantity}</QtdItems>
			<BtnText>
				{!wasAdded ? 'ADICIONAR AO CARRINHO' : 'ITEM ADICIONADO'}
			</BtnText>
		</BtnWrapper>
	);
};

export default AddToCartBtn;
