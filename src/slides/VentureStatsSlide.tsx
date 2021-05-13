import {Flex, Spacer, SPACING} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';
import SwypeImg from '../assets/ventures/swype/card.png';
import SwypeLogo from '../assets/ventures/swype/logo.png';
import {createImage, ImageType} from '../ImageType';
import {__COLORS} from '../theme';
import {BlackSubTitle, BlackTitle} from '../UI';
import {AxelraSlideWithHeader} from './AxelraSlideWithHeader';
import {VentureType} from './VentureProductSlide';

type VentureStatsType = {
	logo: any;
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
				hashtags: ['TelTech', 'Onboarding', 'KYC', 'Subscription'],
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

const Divider = styled.div`
	background-color: rgba(256, 256, 256, 0.25);
	border-radius: 10px;
	width: 160px;
	height: 7px;
`;

const Hashtag = styled(BlackTitle)`
	color: white;
	font-size: 36px;
	text-transform: initial;
	font-weight: 100;
	margin: 0 ${SPACING - 2}px;
`;

const Stat = styled(BlackSubTitle)`
	color: white;
	margin: ${SPACING * 3}px 0;
	text-align: center;
	font-weight: 900;
	font-size: 36px;
`;

export const VentureStatsSlide = ({id}: VentureType) => {
	const {logo, hashtags, stats} = getElements({id}) as VentureStatsType;
	return (
		<AxelraSlideWithHeader
			title=""
			subtitle=""
			backgroundColor="linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)"
			logoColor={__COLORS.WHITE}
		>
			<Flex column flex={1} justify="center" align="center">
				<Img src={logo} />
				<Spacer x5 />
				<Flex row>
					{hashtags.map((h) => (
						<Hashtag key={h}>#{h}</Hashtag>
					))}
				</Flex>
				<Spacer x10 />
				<Divider />
				<Spacer x10 />
				<Flex column>
					{stats.map((s) => (
						<Stat>{s}</Stat>
					))}
				</Flex>
			</Flex>
		</AxelraSlideWithHeader>
	);
};
