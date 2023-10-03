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
	imgSrc?: string;
	movieName?: string;
	movieValue?: string;
}

const Card = ({ imgSrc, movieName, movieValue, wasAdded }: CardProps) => {
	return (
		<Wrapper>
			<MovieInfoBlock>
				<MovieImage src={imgSrc} />
				<MovieName>{movieName}</MovieName>
				<MovieValue>{movieValue}</MovieValue>
			</MovieInfoBlock>
			<AddToCartBtn wasAdded={wasAdded} />
		</Wrapper>
	);
};

export default Card;
