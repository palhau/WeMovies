import MinusIcon from 'assets/icons/MinusIcon';
import PlusIcon from 'assets/icons/PlusIcon';
import TrashIcon from 'assets/icons/TrashIcon';
import {
	ItemCartContainer,
	ItemCartImage,
	ItemCartMinusIconWrapper,
	ItemCartPlusIconWrapper,
	ItemCartQtdBlock,
	ItemCartQtdInput,
	ItemCartTextBlock,
	ItemCartTextPrice,
	ItemCartTextTitle,
	ItemCartTrashIconWrapper,
} from 'components/ItemCart.styles';
import React from 'react';
import { currencyFormatter } from 'utils';
import type { Movie } from 'utils/types';

interface ItemCartProps {
	movie: Movie;
	quantity: number;
	addItem: () => void;
	removeItem: () => void;
	removeTitle: () => void;
}

const ItemCart = ({
	movie,
	quantity,
	addItem,
	removeItem,
	removeTitle,
}: ItemCartProps) => {
	const { title, price, image } = movie;
	return (
		<ItemCartContainer>
			<ItemCartImage src={image} />
			<ItemCartTextBlock>
				<ItemCartTextTitle>{title}</ItemCartTextTitle>
				<ItemCartTextPrice>{currencyFormatter.format(price)}</ItemCartTextPrice>
			</ItemCartTextBlock>
			<ItemCartQtdBlock>
				<ItemCartMinusIconWrapper onClick={removeItem}>
					<MinusIcon />
				</ItemCartMinusIconWrapper>
				<ItemCartQtdInput type="number" value={quantity} />
				<ItemCartPlusIconWrapper onClick={addItem}>
					<PlusIcon />
				</ItemCartPlusIconWrapper>
			</ItemCartQtdBlock>
			<ItemCartTextPrice type="subtotal">
				{currencyFormatter.format(price * quantity)}
			</ItemCartTextPrice>
			<ItemCartTrashIconWrapper onClick={removeTitle}>
				<TrashIcon />
			</ItemCartTrashIconWrapper>
		</ItemCartContainer>
	);
};

export default ItemCart;
