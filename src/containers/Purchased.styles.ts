import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PurchasedContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 960px;
	height: 532.8px;
	padding: 10px;
	background-color: white;
	border-radius: 4px;
	@media (max-width: 390px) {
		width: 370px;
		padding: 20px;
	}
`;

export const PurchasedText = styled.p`
	font-size: 20px;
	font-weight: 700;
	line-height: 27.24px;
	text-align: center;
	color: #2f2e41;
	margin-bottom: 30px;
	@media (max-width: 390px) {
		width: 200px;
	}
`;

export const PurchasedImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 294.96px;
	height: 307px;
`;

export const PurchasedBackBtn = styled(Link)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 40px;
	padding: 10px 20px;
	background-color: #009edd;
	border-radius: 4px;
	margin-top: 30px;
`;

export const PurchasedBackBtnText = styled.span`
	font-size: 14px;
	font-weight: 700;
	line-height: 19.07px;
	text-align: center;
	color: white;
`;
