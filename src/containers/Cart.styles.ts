import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
	width: 950px;
	min-height: 286px;
	background-color: white;
	border-radius: 4px;
	padding: 20px;

	@media (max-width: 390px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 370px;
		min-height: 716px;
	}
`;

export const CartHeaderWrapper = styled.div`
	display: grid;
	grid-template-columns: 16fr 5fr 3fr;
	justify-content: flex-end;
	align-items: center;
	width: 691px;
	height: 20px;
	margin-bottom: 20px;
	@media (max-width: 390px) {
		display: none;
	}
`;

export const CartText = styled.div`
	font-size: 14px;
	font-weight: 700;
	line-height: 19.07px;
	color: #999999;
`;

export const CartFooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 902px;
	height: 40px;
	border-top: 1px solid #999999;
	padding-top: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	@media (max-width: 390px) {
		margin-top: 0px;
		padding-top: 5px;
		flex-direction: column;
		width: 330px;
	}
`;

export const CartBtn = styled(Link)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 235.42px;
	height: 40px;
	padding: 10px 20px;
	background-color: #009edd;
	border-radius: 4px;
	@media (max-width: 390px) {
		position: relative;
		top: 30px;
		width: 330px;
	}
`;

export const CartBtnText = styled.span`
	font-size: 14px;
	font-weight: 700;
	line-height: 19.07px;
	color: #ffffff;
`;

export const CartFooterTextBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 197.26px;
	height: 21px;
	margin-top: 5px;
	@media (max-width: 390px) {
		position: relative;
		top: -40px;
		left: 130px;
	}
`;

export const CartFooterTextTotal = styled.span`
	font-size: 24px;
	font-weight: 700;
	line-height: 32.68px;
	color: #2f2e41;
`;
