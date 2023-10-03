import React from 'react';
import {
	PurchasedBackBtn,
	PurchasedBackBtnText,
	PurchasedContainer,
	PurchasedImageWrapper,
	PurchasedText,
} from 'containers/Purchased.styles';
import PurchaseImage from 'assets/images/PurchaseImage';
import Header from 'components/Header';

const Purchased = () => {
	return (
		<>
			<Header />
			<PurchasedContainer>
				<PurchasedText>Compra realizada com sucesso!</PurchasedText>
				<PurchasedImageWrapper>
					<PurchaseImage />
				</PurchasedImageWrapper>
				<PurchasedBackBtn to="/">
					<PurchasedBackBtnText>VOLTAR</PurchasedBackBtnText>
				</PurchasedBackBtn>
			</PurchasedContainer>
		</>
	);
};

export default Purchased;
