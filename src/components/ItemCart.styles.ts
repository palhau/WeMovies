import styled, { css } from 'styled-components';

interface priceText {
	type?: string;
}

export const ItemCartContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
	align-items: center;
	width: 902px;
	height: 114px;
	margin-bottom: 10px;
	@media (max-width: 390px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 390px;
		margin-bottom: 10px;
	}
`;

export const ItemCartImage = styled.img`
	width: 89px;
	height: 114px;
`;

export const ItemCartTextBlock = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 253px;
	height: 48px;
	@media (max-width: 390px) {
		display: flex;
		flex-direction: row;
		align-self: flex-start;
		flex-wrap: nowrap;
	}
`;

export const ItemCartTextTitle = styled.span`
	font-size: 14px;
	font-weight: 700;
	line-height: 19.07px;
	color: #2f2e41;
	margin-bottom: 5px;
	@media (max-width: 390px) {
		margin-left: 10px;
	}
`;

export const ItemCartTextPrice = styled.span<priceText>`
	font-size: 16px;
	font-weight: 700;
	line-height: 21.79px;
	color: #2f2e41;
	@media (max-width: 390px) {
		margin-left: 20px;
		${(props) =>
			props.type === 'subtotal' &&
			css`
				display: flex;
				flex-direction: column;
				width: 98px;
				height: 30px;
				position: relative;
				top: -60px;
				left: 120px;
				&:before {
					content: 'SUBTOTAL';
					color: #999999;
					font-size: 12px;
					font-weight: 700;
					line-height: 16.34px;
					margin-right: 10px;
				}
			`}
	}
`;

export const ItemCartQtdBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 120px;
	height: 26px;
	@media (max-width: 390px) {
		position: relative;
		top: -60px;
		left: 100px;
	}
`;

export const ItemCartQtdInput = styled.input`
	width: 62px;
	height: 26px;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	text-align: center;
`;

export const ItemCartTrashIconWrapper = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	@media (max-width: 390px) {
		position: relative;
		top: -120px;
		left: 70px;
	}
`;

export const ItemCartMinusIconWrapper = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const ItemCartPlusIconWrapper = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
