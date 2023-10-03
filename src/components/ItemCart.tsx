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
import { formatter } from 'utils';
import type { Movie } from 'utils/types';

interface ItemCartProps {
	imgSrc: string;
	title: string;
	price: number;
	quantity: number;
	addItem: (movie: Movie) => void;
	removeItem: (movieId: number) => void;
}

const ItemCart = ({ title, imgSrc, price, quantity }: ItemCartProps) => {
	return (
		<ItemCartContainer>
			<ItemCartImage src={imgSrc} />
			<ItemCartTextBlock>
				<ItemCartTextTitle>{title}</ItemCartTextTitle>
				<ItemCartTextPrice>{formatter.format(price)}</ItemCartTextPrice>
			</ItemCartTextBlock>
			<ItemCartQtdBlock>
				<MinusIcon />
				<ItemCartQtdInput type="number" value={quantity} />
				<PlusIcon />
			</ItemCartQtdBlock>
			<ItemCartTextPrice type="subtotal">
				{formatter.format(price * quantity)}
			</ItemCartTextPrice>
			<ItemCartTrashIconWrapper>
				<TrashIcon />
			</ItemCartTrashIconWrapper>
		</ItemCartContainer>
	);
};

export default ItemCart;
