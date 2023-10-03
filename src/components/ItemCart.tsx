import MinusIcon from 'assets/icons/MinusIcon';
import PlusIcon from 'assets/icons/PlusIcon';
import TrashIcon from 'assets/icons/TrashIcon';
import {
	ItemCartContainer,
	ItemCartImage,
	ItemCartQtdBlock,
	ItemCartQtdInput,
	ItemCartTextBlock,
	ItemCartTextPrice,
	ItemCartTextTitle,
	ItemCartTrashIconWrapper,
} from 'components/ItemCart.styles';
import React from 'react';

const ItemCart = () => {
	return (
		<ItemCartContainer>
			<ItemCartImage />
			<ItemCartTextBlock>
				<ItemCartTextTitle>Homem Aranha</ItemCartTextTitle>
				<ItemCartTextPrice>R$ 29,99</ItemCartTextPrice>
			</ItemCartTextBlock>
			<ItemCartQtdBlock>
				<MinusIcon />
				<ItemCartQtdInput type="number" />
				<PlusIcon />
			</ItemCartQtdBlock>
			<ItemCartTextPrice>R$ 29,99</ItemCartTextPrice>
			<ItemCartTrashIconWrapper>
				<TrashIcon />
			</ItemCartTrashIconWrapper>
		</ItemCartContainer>
	);
};

export default ItemCart;
