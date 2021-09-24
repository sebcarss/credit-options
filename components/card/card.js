import React from 'react';
import styled from 'styled-components';
// import Colour from '@sd-style/colour';
// import Spacing from '@sd-layout/spacing';
// import BorderRadius from '@sd-style/border-radius';
// import Typography from '@sd-style/typography';
// import { Button } from '@sd-component/button';
// import Icon from '@sd-component/icon';
// import { ChevonRight } from '@sd-component/iconlibrary';
// import AnnualPercentageRate from '../presentation/annualPercentageRate';
// import Take3 from './take3';
import Bnpl from './bnpl';
import {Button} from '../common';

// const { useContext } = React;
// const { renderToString } = ReactDOMServer;


// const Chevron = Buffer.from(
// 	renderToString(<Icon source={ChevonRight} fill={Colour.blue.mid} />),
// ).toString('base64');

const Wrapper = styled.div`
	padding: 24px 24px 16px 24px;
`;

const HowDoesItWork = styled.div`
	padding: 0 24px;
	height: 40px;
	color: rgb(58, 100, 203);
	font-size: 1.4rem;
	font-weight: bold;
	background-color: #fff;
	border-style: solid;
	border-color: rgb(245, 245, 245);
	border-width: 1px 0 0 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	:after {
		content: '>';
		width: 16px;
		height: 39px;
	}
`;

const Card = styled(Button)`
	appearance: none;
	background: #fff;
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
	border: 1px solid rgb(245, 245, 245);
	border-radius: 4px;
	font-size: 1.4rem;
	margin-bottom: 16px;
	text-align: left;
	padding: 0;
	width: 100%;
`;

const Component = ({ className, creditOffer, onClick }) => {
	const handeClick = () => {
		onClick();
	};

	return (
		<Card dataTestId="creditOptions-Card" className={className} onClick={handeClick}>
			<Wrapper>
				<Bnpl />
			</Wrapper>
			<HowDoesItWork>How does it work?</HowDoesItWork>
		</Card>
	);
};

export default Component;
