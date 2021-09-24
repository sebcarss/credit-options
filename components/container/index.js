import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import MorePaymentOptions from '../presentation/more-payment-options';
import DialogManager from '../dialog/dialog-manager';

const { useState } = React;

const CreditOptions = styled.div`
	margin: 24px 0;
`;

const Container = () => {
	const [dialog, setDialog] = useState({
		open: false,
		content: 'bnpl',
	});

	return (

				<CreditOptions className="dcx-hybrid">
					<Card
						creditOffer='bnpl'
						onClick={() => alert('BNPL info')}
					/>
					<MorePaymentOptions
						onClick={() => alert('Payment options')}
					/>
					{/* <DialogManager
						open={dialog.open}
						content={dialog.content}
						onClose={() => setDialog({ ...dialog, open: false })}
					/> */}
				</CreditOptions>
	);
};

export default Container;
