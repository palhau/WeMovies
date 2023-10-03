import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg);   }
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Spinner = styled.div`
	border-radius: 50%;
	height: 55.41px;
	width: 55.41px;
	position: relative;

	&:before {
		content: '';
		position: absolute;

		width: 100%;
		height: 100%;
		border: 4px solid transparent;
		border-top: 4px solid #fff; /* Change the color as needed */
		border-radius: 50%;
		animation: ${spin} 1s linear infinite;
	}
`;
