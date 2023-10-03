import styled from 'styled-components';

export const CardsWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	@media (max-width: 390px) {
		grid-template-columns: 1fr;
	}
`;
