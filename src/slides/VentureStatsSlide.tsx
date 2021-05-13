import {Flex, Spacer, SPACING} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
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
	image: ImageType;
	stats: string[];
	hashtags: string[];
};

const getElements = ({id}: VentureType): VentureStatsType | null => {
	switch (id) {
		case 'moflix':
			return {
				logo: SwypeLogo,
				image: createImage({src: SwypeImg, bottom: -100, left: -720}),
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
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const {logo, hashtags, stats, image} = getElements({id}) as VentureStatsType;

	const opacity1 = interpolate(
		frame,
		[0, 10, durationInFrames - 10, durationInFrames],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transformY1 = interpolate(
		frame,
		[0, 10, durationInFrames - 10, durationInFrames],
		[-10, 0, 0, -10],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const opacity2 = interpolate(
		frame,
		[10, 20, durationInFrames - 10, durationInFrames],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transformY2 = interpolate(
		frame,
		[10, 20, durationInFrames - 10, durationInFrames],
		[-10, 0, 0, -10],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const opacity4 = interpolate(
		frame,
		[20, 30, durationInFrames - 10, durationInFrames],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transformY4 = interpolate(
		frame,
		[20, 30, durationInFrames - 10, durationInFrames],
		[-10, 0, 0, -10],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const imageScaleIn = spring({
		fps,
		frame: frame - 45,
		config: {
			damping: 20,
			stiffness: 200,
			mass: 2,
		},
	});

	const imageScaleOut = spring({
		fps,
		frame: frame - durationInFrames + 20,
		config: {
			damping: 20,
			stiffness: 200,
			mass: 0.5,
		},
	});

	const imageScale =
		frame < durationInFrames / 2 ? imageScaleIn : 1 - imageScaleOut;

	const {src, ...style} = image;

	return (
		<AxelraSlideWithHeader
			title=""
			subtitle=""
			backgroundColor="linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)"
			logoColor={__COLORS.WHITE}
		>
			<Img
				src={src}
				style={{transform: `translateX(${imageScale * 550}px)`, ...style}}
			/>
			<Flex column flex={1} justify="center" align="center">
				<Img
					src={logo}
					style={{opacity: opacity1, transform: `translateY(${transformY1}px)`}}
				/>
				<Spacer x5 />
				<Flex
					row
					style={{opacity: opacity2, transform: `translateY(${transformY2}px)`}}
				>
					{hashtags.map((h) => (
						<Hashtag key={h}>#{h}</Hashtag>
					))}
				</Flex>
				<Spacer x10 />
				<Divider
					style={{opacity: opacity4, transform: `translateY(${transformY4}px)`}}
				/>
				<Spacer x10 />
				<Flex column>
					{stats.map((s, i) => {
						const inputRange = [
							i + 30,
							40,
							durationInFrames - 10  - i,
							durationInFrames - i,
						];
						const opacity3 = interpolate(frame, inputRange, [0, 1, 1, 0], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						});
						const transformY3 = interpolate(
							frame,
							inputRange,
							[-10, 0, 0, -10],
							{
								extrapolateLeft: 'clamp',
								extrapolateRight: 'clamp',
							}
						);
						return (
							<Stat
								style={{
									opacity: opacity3,
									transform: `translateY(${transformY3}px)`,
								}}
							>
								{s}
							</Stat>
						);
					})}
				</Flex>
			</Flex>
		</AxelraSlideWithHeader>
	);
};
