import React from 'react';
import SwypeImg from '../assets/ventures/swype/card.png';
import SwypeLogo from '../assets/ventures/swype/logo.png';
import {createImage, ImageType} from '../ImageType';
import {__COLORS} from '../theme';
import {AxelraSlideWithHeader} from './AxelraSlideWithHeader';
import {VentureType} from './VentureProductSlide';

type VentureStatsType = {
	logo: ImageType;
	images: ImageType[];
	stats: string[];
	hashtags: string[];
};
const getElements = ({id}: VentureType): VentureStatsType | null => {
	switch (id) {
		case 'moflix':
			return {
				logo: SwypeLogo,
				images: [createImage({src: SwypeImg})],
				hashtags: ['#TelTech', '#Onboarding', '#KYC', '#Subscription'],
				stats: ['Start: Mai 2019', 'Go-Live: Dez 2019', 'Links: yalloswype.ch'],
			};
		case 'sibex':
			return null;
		case 'livealytics':
			return null;
		case 'fqx':
			return null;
		case 'gioia':
			return null;
		case 'freya':
			return null;
		default:
			throw new Error('venture not implemented');
	}
};

export const VentureStatsSlide = ({id}: VentureType) => {
	return (
		<AxelraSlideWithHeader
			title=""
			subtitle=""
			backgroundColor="linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)"
			logoColor={__COLORS.WHITE}
		>
			afojasjofsfajo
		</AxelraSlideWithHeader>
	);
};
