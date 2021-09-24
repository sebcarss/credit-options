import React from 'react';
import styled from 'styled-components';
// import Icon from '@sd-component/icon';
// import { Clock } from '@sd-component/iconlibrary';
// import Spacing from '@sd-layout/spacing';

// const BnplIcon = styled(Icon)`
// 	float: right;
// `;

// const VeryPayHorizontal = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32"><g transform="translate(15946 12685)"><rect width="27" height="17" transform="translate(-15911 -12677)" fill="#de007b"/><rect width="33" height="32" transform="translate(-15946 -12685)" fill="#de007b"/><path d="M32,32H0V0H32V32ZM4.744,11.3v9.888H6.8V17.064a2.266,2.266,0,0,0,.834.744A2.561,2.561,0,0,0,8.86,18.1a2.754,2.754,0,0,0,1.5-.427,2.953,2.953,0,0,0,1.062-1.211,4.062,4.062,0,0,0,.39-1.818,4.022,4.022,0,0,0-.39-1.813,2.924,2.924,0,0,0-1.062-1.2,2.787,2.787,0,0,0-1.5-.42,2.555,2.555,0,0,0-1.236.288,2.246,2.246,0,0,0-.828.756V11.3Zm15.54,0,2.723,6.468L21.472,21.18H23.68l4.2-9.876H25.66l-1.536,4.188L22.576,11.3Zm-4.848-.1a2.787,2.787,0,0,0-1.5.42,2.928,2.928,0,0,0-1.062,1.2,4.033,4.033,0,0,0-.39,1.813,4.073,4.073,0,0,0,.39,1.818,2.957,2.957,0,0,0,1.062,1.211,2.734,2.734,0,0,0,1.489.427,2.594,2.594,0,0,0,1.242-.288,2.236,2.236,0,0,0,.833-.756V18h2.052V11.3H17.5v.948a2.134,2.134,0,0,0-.822-.756A2.589,2.589,0,0,0,15.436,11.208Zm.6,5.1A1.384,1.384,0,0,1,15,15.858a1.707,1.707,0,0,1-.426-1.218A1.664,1.664,0,0,1,15,13.434a1.442,1.442,0,0,1,2.076.005,1.684,1.684,0,0,1,.426,1.212,1.684,1.684,0,0,1-.426,1.212A1.388,1.388,0,0,1,16.036,16.308Zm-7.789,0a1.39,1.39,0,0,1-1.038-.444,1.688,1.688,0,0,1-.426-1.212A1.688,1.688,0,0,1,7.21,13.44,1.39,1.39,0,0,1,8.248,13a1.41,1.41,0,0,1,1.05.438,1.661,1.661,0,0,1,.426,1.206,1.691,1.691,0,0,1-.432,1.218A1.4,1.4,0,0,1,8.248,16.308Z" transform="translate(-15914 -12685)" fill="#fff"/><path d="M3.75,7.636a3.047,3.047,0,0,0,.617-.049c.283-.6,1.22-2.287,1.858-3.776A3.766,3.766,0,0,0,9.948,7.683a3.3,3.3,0,0,0,2.715-1.311c.149.693.681,1.271,2.1,1.271a3.92,3.92,0,0,0,.687-.069V2.168c0-.523.277-.651.424-.651-.057.921.476,1.573,1.184,1.573a1.311,1.311,0,0,0,1.127-.666,27.961,27.961,0,0,0,1.2,3.639,2.086,2.086,0,0,0,2.276,1.455,5.344,5.344,0,0,1-.886,1.127c-.113.1-.255.185-.326,0a1.745,1.745,0,0,0-1.666-1.257,1.361,1.361,0,0,0-1.453,1.32,1.6,1.6,0,0,0,1.716,1.51c1.3,0,2.532-1.27,3.914-3.866,1.156-2.168,1.779-3.665,1.779-4.687A1.521,1.521,0,0,0,23.221,0a1.563,1.563,0,0,0-1.587,1.558c0,1.353,1.148,1.73,1.723,1.971.135.055.17.144.128.336a11.885,11.885,0,0,1-.979,2.17,19.62,19.62,0,0,1-1.694-4.717C20.634.5,20.237,0,19.386,0a1.318,1.318,0,0,0-1.22.632A1.223,1.223,0,0,0,17.081,0a2.129,2.129,0,0,0-1.694,1.071c-.163-.625-.611-1-2.085-1a5.721,5.721,0,0,0-.695.048V1.517A2.635,2.635,0,0,0,9.99,0,3.75,3.75,0,0,0,6.841,1.676V1.663A1.515,1.515,0,0,0,5.331,0,1.563,1.563,0,0,0,3.744,1.558,2.113,2.113,0,0,0,5.417,3.53c.135.055.2.144.128.336A19.078,19.078,0,0,1,4.538,6.022a21.189,21.189,0,0,1-1.7-4.7C2.652.494,2.2,0,1.418,0A1.3,1.3,0,0,0,0,1.339,20,20,0,0,0,1.751,6.564a1.922,1.922,0,0,0,2,1.071M12.614,5.9c0,.068,0,.137.006.2A2.957,2.957,0,0,1,8.955,4.476c2.212.048,3.29-.508,3.659-1.325V5.9ZM8.651,2.919C8.657,1.47,9.169.736,9.75.736c.4,0,.737.267.737,1.118A2.074,2.074,0,0,1,8.792,4a4.094,4.094,0,0,1-.141-1.084" transform="translate(-15942.332 -12673.841)" fill="#fff"/><g transform="translate(-15914 -12685)" fill="none" stroke="#de007b" stroke-width="1"><rect width="32" height="32" stroke="none"/><rect x="0.5" y="0.5" width="31" height="31" fill="none"/></g></g></svg>';
 
// const VeryPayIcon = styled(Icon)`
// 	margin-bottom: ${Spacing.m};
// `;

const Header = styled.h2`
	&& {
		font-size:16px;
		line-height: 19px;
		font-weight: bold;
		margin-bottom: 16px;
	}
`;

const BnplCard = () => {

	return (
			<Header>
				Buy Now Pay Later available <br /> on this item
			</Header>
	);
}

{/* <div data-testid="veryPay">
	<VeryPayIcon source={VeryPayHorizontal} asImg width={64} altText="Very Pay" />
	<BnplIcon source={Clock} asImg width={24} altText="Buy now pay later" />
</div> */}

export default BnplCard;
