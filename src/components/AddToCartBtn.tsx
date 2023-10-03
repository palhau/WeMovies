import React from 'react';
import { BtnText, BtnWrapper, QtdItems } from 'components/AddToCartBtn.styles';
import AddCartIcon from '../assets/icons/AddCartIcon';

export interface AddToCartBtnProps {
	wasAdded: boolean;
	onClick: () => void;
}

const AddToCartBtn = ({ wasAdded, onClick }: AddToCartBtnProps) => {
	return (
		<BtnWrapper onClick={onClick} wasAdded={wasAdded}>
			<AddCartIcon />
			<QtdItems>{!wasAdded ? 0 : 1}</QtdItems>
			<BtnText>
				{!wasAdded ? 'ADICIONAR AO CARRINHO' : 'ITEM ADICIONADO'}
			</BtnText>
		</BtnWrapper>
	);
};

export default AddToCartBtn;
