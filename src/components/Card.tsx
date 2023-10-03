import React from 'react';
import {
	MovieImage,
	MovieInfoBlock,
	MovieName,
	MovieValue,
	CardContainer,
} from 'components/Card.styles';
import AddToCartBtn from 'components/AddToCartBtn';
import type { Movie } from 'utils/types';
import { currencyFormatter } from 'utils';

interface CardProps {
	wasAdded: boolean;
	movie: Movie;
	quantity?: number;
	onClick: () => void;
}

const Card = ({ movie, wasAdded, quantity, onClick }: CardProps) => {
	const { title, price, image } = movie;
	return (
		<CardContainer>
			<MovieInfoBlock>
				<MovieImage src={image} />
				<MovieName>{title}</MovieName>
				<MovieValue>{currencyFormatter.format(price)}</MovieValue>
			</MovieInfoBlock>
			<AddToCartBtn quantity={quantity} onClick={onClick} wasAdded={wasAdded} />
		</CardContainer>
	);
};

export default Card;
