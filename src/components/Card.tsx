import React from 'react';
import {
	MovieImage,
	MovieInfoBlock,
	MovieName,
	MovieValue,
	Wrapper,
} from 'components/Card.styles';
import AddToCartBtn from 'components/AddToCartBtn';

interface CardProps {
	wasAdded: boolean;
	imgSrc?: number;
	movieName?: string;
	movieValue?: number;
}

const Card = ({ imgSrc, movieName, movieValue, wasAdded }: CardProps) => {
	return (
		<Wrapper>
			<MovieInfoBlock>
				<MovieImage />
				<MovieName>{movieName}</MovieName>
				<MovieValue>R$ {movieValue}</MovieValue>
			</MovieInfoBlock>
			<AddToCartBtn wasAdded={wasAdded} />
		</Wrapper>
	);
};

export default Card;
