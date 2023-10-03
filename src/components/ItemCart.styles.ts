import styled from 'styled-components';

export const ItemCartContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
	align-items: center;
	width: 902px;
	height: 114px;
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
`;

export const ItemCartTextTitle = styled.span`
	font-size: 14px;
	font-weight: 700;
	line-height: 19.07px;
	color: #2f2e41;
	margin-bottom: 5px;
`;

export const ItemCartTextPrice = styled.span`
	font-size: 16px;
	font-weight: 700;
	line-height: 21.79px;
	color: #2f2e41;
`;

export const ItemCartQtdBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 120px;
	height: 26px;
`;

export const ItemCartQtdInput = styled.input`
	width: 62px;
	height: 26px;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
`;

export const ItemCartTrashIconWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
