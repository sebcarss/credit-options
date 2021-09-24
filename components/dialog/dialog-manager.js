// import React from 'react';
// import styled from 'styled-components';
// // import Panel from '@sd-component/panel';
// import { CSSTransition } from 'react-transition-group';
// import Dialog from './dialog';
// import Header from './header';
// // import PaymentOptions from './paymentOptions/paymentOptions';
// // import FlexiblePayments from './flexiblePayments/flexiblePayments';
// import Bnpl from './bnplDialog';

// const { useContext, useEffect, useState, useCallback } = React;

// const MainContentContainer = styled.div`
// 	width: 100%;
// 	transition: ${(props) => props.timeout}ms;

// 	&.enter-active,
// 	&.exit-active,
// 	&.exit-done {
// 		position: absolute;
// 		top: 64px;
// 		z-index: 0;
// 	}

// 	&.exit-done {
// 		visibility: hidden;
// 	}
// `;

// const StyledPanel = styled(Panel).attrs(() => ({
// 	offScreen: 'right',
// 	transitionDuration: 250,
// 	onExited: (element) => {
// 		element.scrollTop = 0;
// 	},
// }))`
// 	z-index: 1;
// 	height: auto;
// 	position: absolute;
// 	transition: ${(props) => props.transitionDuration}ms;

// 	&.panel-enter,
// 	&.panel-enter-active,
// 	&.panel-enter-done,
// 	&.panel-exit,
// 	&.panel-exit-active {
// 		z-index: 1;
// 		position: relative;
// 	}
// `;

// const dialogData = {
// 	take3: {
// 		title: 'Take 3',
// 		gaLabel: 'More options - Take 3',
// 		speedtrapId: 'MoreOptions-Take3',
// 	},
// 	flexiblePayments: {
// 		title: 'Flexible monthly payments',
// 		monthlyTitle: 'Monthly',
// 		gaLabel: 'More options - Flex Payments',
// 		speedtrapId: 'MoreOptions-FlexPayments',
// 	},
// 	bnpl: {
// 		title: 'Buy now pay later',
// 		gaLabel: 'More options - BNPL',
// 		speedtrapId: 'MoreOptions-BNPL',
// 	},
// 	paymentOptions: {
// 		title: 'More payment options',
// 		monthlyTitle: 'All payment options'
// 	},
// };

// const initalPanelState = {
// 	take3: false,
// 	flexiblePayments: false,
// 	bnpl: false,
// 	moreOptions: true,
// };

// const getDialogTitle = (content) => {
// 	let { title } = dialogData[`${content}`];
// 	const veryPayEnabled = content === 'paymentOptions';
// 	title = veryPayEnabled ? dialogData[`${content}`].monthlyTitle : title;

// 	return title;
// }

// const DialogManager = ({ onClose, content, open }) => {
// 	const { bnplEligible, toggles } = useContext(CreditContext);
// 	const [panels, setPanels] = useState(initalPanelState);
// 	const [header, setHeader] = useState({
// 		hasBack: false,
// 		title: getDialogTitle(content, toggles),
// 	});

// 	const resetHeader = useCallback(() => {
// 		setHeader({
// 			title: getDialogTitle(content, toggles),
// 			hasBack: false,
// 		});
// 	}, [content, toggles]);

// 	const resetDialog = useCallback(() => {
// 		resetHeader();
// 		setPanels(initalPanelState);
// 	}, [resetHeader]);

// 	const panelOpen = (panel) => {
// 		const { gaLabel, speedtrapId } = dialogData[`${panel}`];
// 		const monthlyEnabled = toggles.veryPayToggle && panel === 'flexiblePayments';

// 		let { title } = dialogData[`${panel}`];

// 		title = monthlyEnabled ? dialogData[`${panel}`].monthlyTitle : title;

// 		setPanels({
// 			...initalPanelState,
// 			moreOptions: false,
// 			[panel]: true,
// 		});
		
// 		setHeader({
// 			title,
// 			hasBack: true,
// 		});

// 		creditAnalytics({
// 			gaLabel,
// 			speedtrapId,
// 		});
// 	};

// 	const MainContent = () => {
// 		switch (content) {
// 			case 'take3':
// 				return <Take3 />;
// 			case 'bnpl':
// 				return <Bnpl />;
// 			case 'paymentOptions':
// 			default:
// 				return <PaymentOptions onButtonClick={panelOpen} />;
// 		}
// 	};

// 	useEffect(() => {
// 		resetHeader();
// 	}, [content, resetHeader]);

// 	return (
// 		<Dialog onClose={onClose} open={open} onExited={resetDialog}>
// 			<Header
// 				title={header.title}
// 				hasBackButton={header.hasBack}
// 				onClose={onClose}
// 				onBackButtonClick={resetDialog}
// 				hasDepth
// 				dataTestId="creditOptionsDialog-header"
// 			/>
// 			{content === 'paymentOptions' && (
// 				<StyledPanel open={panels.take3} dataTestId="creditOptionsDialog-take3Panel">
// 					<Take3 />
// 				</StyledPanel>
// 			)}
// 			{content === 'paymentOptions' && (
// 				<StyledPanel
// 					open={panels.flexiblePayments}
// 					dataTestId="creditOptionsDialog-flexiblePaymentsPanel"
// 				>
// 					<FlexiblePayments />
// 				</StyledPanel>
// 			)}
// 			{content === 'paymentOptions' && bnplEligible && (
// 				<StyledPanel open={panels.bnpl} dataTestId="creditOptionsDialog-bnplPanel">
// 					<Bnpl />
// 				</StyledPanel>
// 			)}
// 			<CSSTransition in={panels.moreOptions} timeout={250}>
// 				<MainContentContainer>
// 					<MainContent />
// 				</MainContentContainer>
// 			</CSSTransition>
// 		</Dialog>
// 	);
// };

// DialogManager.propTypes = propTypes;

// export default DialogManager;
