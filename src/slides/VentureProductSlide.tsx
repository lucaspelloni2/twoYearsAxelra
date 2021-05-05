import React from 'react';
import styled from 'styled-components';
import {AxelraSlideWithHeader} from './AxelraSlideWithHeader';
import {__COLORS} from '../theme';

const Container = styled.div``;

type Props = {
	id: 'moflix' | 'sibex' | 'livealytics' | 'fqx' | 'gioia' | 'freya';
};

type ProductSlideProps = {
	images: [{id: string; src: any}];
	firstWordColor: string;
};

export const VentureProductSlide = () => {
	return (
		<AxelraSlideWithHeader
			title=""
			subtitle=""
			backgroundColor="linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)"
			logoColor={__COLORS.WHITE}
		>
			VentureProductSlide
		</AxelraSlideWithHeader>
	);
};
