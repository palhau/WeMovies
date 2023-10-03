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
import { formatter } from 'utils';
import type { Movie } from 'utils/types';

interface ItemCartProps {
	movie: Movie;
	quantity: number;
	addItem: (movie: Movie) => void;
	removeItem: (movieId: number) => void;
	removeTitle: (movieId: number) => void;
}

const ItemCart = ({
	movie,
	quantity,
	addItem,
	removeItem,
	removeTitle,
}: ItemCartProps) => {
	const { id, title, price, image } = movie;
	return (
		<ItemCartContainer>
			<ItemCartImage src={image} />
			<ItemCartTextBlock>
				<ItemCartTextTitle>{title}</ItemCartTextTitle>
				<ItemCartTextPrice>{formatter.format(price)}</ItemCartTextPrice>
			</ItemCartTextBlock>
			<ItemCartQtdBlock>
				<ItemCartMinusIconWrapper
					onClick={() => {
						removeItem(id);
					}}
				>
					<MinusIcon />
				</ItemCartMinusIconWrapper>
				<ItemCartQtdInput type="number" value={quantity} />
				<ItemCartPlusIconWrapper
					onClick={() => {
						addItem(movie);
					}}
				>
					<PlusIcon />
				</ItemCartPlusIconWrapper>
			</ItemCartQtdBlock>
			<ItemCartTextPrice type="subtotal">
				{formatter.format(price * quantity)}
			</ItemCartTextPrice>
			<ItemCartTrashIconWrapper
				onClick={() => {
					removeTitle(id);
				}}
			>
				<TrashIcon />
			</ItemCartTrashIconWrapper>
		</ItemCartContainer>
	);
};

export default ItemCart;
