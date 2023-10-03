import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 309.33px;
	height: 305px;
	padding: 10px;
	margin: 10px;
	background-color: white;
	border-radius: 4px;
`;

export const MovieInfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 287.33px;
	height: 237px;
	margin-bottom: 5px;
`;

export const MovieName = styled.span`
	font-size: 12px;
	font-weight: 700;
	line-height: 16.34px;
	text-align: center;
	color: #2f2e41;
	margin-top: 5px;
`;

export const MovieValue = styled.span`
	font-size: 16px;
	font-weight: 700;
	line-height: 21.79px;
	text-align: center;
	color: #2f2e41;
`;

export const MovieImage = styled.img`
	width: 147px;
	height: 188px;
`;
