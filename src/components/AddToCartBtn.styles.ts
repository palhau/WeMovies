import type { AddToCartBtnProps } from 'components/AddToCartBtn';
import styled from 'styled-components';

export const BtnWrapper = styled.button<AddToCartBtnProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 287.33px;
	height: 40px;
	padding: 10px 20px;
	background-color: ${(props) => (!props.wasAdded ? '#009edd' : '#039b00')};
	border-radius: 4px;
	border: none;
`;

export const QtdItems = styled.span`
	font-size: 12px;
	font-weight: 400;
	line-height: 16.34px;
	text-align: center;
	padding-left: 5px;
`;

export const BtnText = styled.span`
	font-size: 12px;
	font-weight: 700;
	line-height: 16.34px;
	text-align: center;
	padding-left: 10px;
`;
