import React from 'react';
import styled from 'styled-components';
import {Button} from '../common';

const MorePaymentOptionsButton = styled(Button)`
	height: 40px;
	color: rgb(60, 60, 60);
	font-family: Arial, Helvetica, sans-serif !important;
	background-color: #fff;
	appearance: none;
	border: 1px solid solid rgb(245, 245, 245);
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
`;

const MorePaymentOptionsSpan = styled.span`
	font-weight: 700;
`

const MorePaymentOptions = ({ onClick }) => {

	const handeClick = () => {
		onClick();
	};
	return (
		<MorePaymentOptionsButton
			onClick={handeClick}
			data-testid="creditOptions-morePaymentOptions"
		>
			All&nbsp;<MorePaymentOptionsSpan data-testid="veryPay">Very Pay</MorePaymentOptionsSpan>&nbsp;payment options
		</MorePaymentOptionsButton>
	);
};

export default MorePaymentOptions;
