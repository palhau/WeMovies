import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 960px;
	height: 74px;
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 700;
	line-height: 27.24px;
`;

export const CartWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 135.93px;
	height: 38px;
`;

export const CartTextBlock = styled.div`
	display: flex;
	flex-direction: column;
	text-align: right;
	width: 95.95px;
	height: 38px;
`;

export const CartTitle = styled.span`
	font-size: 14px;
	font-weight: 600;
	line-height: 19.07px;
`;

export const CartItemsCounter = styled.span`
	font-size: 12px;
	font-weight: 600;
	line-height: 16.34px;
	color: #999999;
`;
