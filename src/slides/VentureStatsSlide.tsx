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
import FQXImg from '../assets/ventures/fqx/img_1.png';
import FQXLogo from '../assets/ventures/fqx/img_3.png';
import GioiaLogo from '../assets/ventures/gioia/img_4.png';
import GioiaImg from '../assets/ventures/gioia/img_5.png';
import LiveLogo from '../assets/ventures/livealytics/img_1.png';
import LiveImg from '../assets/ventures/livealytics/img_3.png';
import SibexLogo from '../assets/ventures/sibex/img_1.png';
import SibexImg from '../assets/ventures/sibex/img_2.png';
import SwypeImg from '../assets/ventures/swype/card.png';
import SwypeLogo from '../assets/ventures/swype/logo.png';
import FreyaLogo from '../assets/ventures/freya/img_1.png'
import FreyaImg from '../assets/ventures/freya/freya4.png'
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
	background: string;
	topFinTech?: string;
};

const TopFintechContainer = styled.div`
	width: 200px;
	height: 200px;
	background: red;
	position: absolute;
	right: 250px;
	bottom: 150px;
`;

const Verified = () => {
	return (
		<svg
			viewBox="0 0 512 512"
			style={{width: 55, height: 55, color: '#2E77D0'}}
		>
			<path
				fill="currentColor"
				d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31 4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28 11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28 4.32 4.26 11.29-.06 15.56z"
			/>
		</svg>
	);
};

const getElements = ({id}: VentureType): VentureStatsType | null => {
	switch (id) {
		case 'moflix':
			return {
				logo: SwypeLogo,
				image: createImage({src: SwypeImg, bottom: -100, left: -720}),
				hashtags: ['TelTech', 'Onboarding', 'KYC', 'Subscription'],
				stats: ['Start: Mai 2019', 'Go-Live: Dez 2019', 'Links: yalloswype.ch'],
				background: 'linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)',
			};
		case 'sibex':
			return {
				logo: SibexLogo,
				image: createImage({src: SibexImg, bottom: -100, left: -1162}),
				hashtags: ['FinTech', 'Blockchain', 'Crypto', 'AtomicSwaps'],
				stats: ['Start: June 2019', 'Go-Live: Sep 2019', 'Links: sibex.io'],
				background:
					'linear-gradient(180deg, rgba(22,28,34,1) 0%, #292E34 100%)',
				topFinTech: 'Top 10 Fintech in CH',
			};
		case 'livealytics':
			return {
				background: 'linear-gradient(79deg, #1FB985 2%, #1AE09E 100%)',
				logo: LiveLogo,
				stats: [
					'Start: June 2019',
					'Go-Live: Aug 2019',
					'Links: livealytics.com',
				],
				hashtags: ['FinTech', 'Marketing', 'IoT', 'AWS'],
				image: createImage({
					src: LiveImg,
					bottom: 0,
					left: -650,
				}),
			};
		case 'fqx':
			return {
				background: 'linear-gradient(224deg, #5980F0 0%, #2D49DC 100%)',
				topFinTech: 'Top 5 Fintech in CH',
				stats: ['Start: Dez 2019', 'Go-Live: Mai 2020', 'Links: fqx.ch'],
				logo: FQXLogo,
				image: createImage({
					src: FQXImg,
					bottom: -120,
					left: -910,
				}),
				hashtags: [
					'FinTech',
					'PromissoryNotes',
					'Onboarding',
					'KYC',
					'Blockchain',
				],
			};
		case 'gioia':
			return {
				background:
					'linear-gradient(135deg, #1C5096 0%, #0A63B4 66%, #0D86ED 100%)',
				stats: [
					'Start: Mai 2020',
					'Go-Live: April 2021',
					'Links: gkb.ch/de/private/vorsorgen-planen/produkte/gioia-3a',
				],
				logo: GioiaLogo,
				image: createImage({
					src: GioiaImg,
					width: 850,
					bottom: -320,
					left: -810,
				}),
				hashtags: ['FinTech', 'ThirdPillar', 'ResponsibleInvestments'],
			};
		case 'freya':
			return {
				background:
					'linear-gradient(225deg, #FFBB32 0%, #FFA212 100%)',
				stats: [
					'Start: Mai 2020',
					'Go-Live: April 2021',
					'Links: freya-savings.com',
				],
				logo: FreyaLogo,
				image: createImage({
					src: FreyaImg,
					width: 750,
					bottom: -120,
					left: -720,
				}),
				hashtags: ['FinTech', 'ThirdPillar', 'ResponsibleInvestments'],
			};
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
	const {logo, hashtags, topFinTech, stats, image, background} = getElements({
		id,
	}) as VentureStatsType;
	const spIn = spring({
		fps,
		frame: frame - durationInFrames / 2,
	});
	const spOut = spring({
		fps,
		frame: frame - durationInFrames + 20,
		config: {
			mass: 2,
			damping: 200,
			stiffness: 200,
		},
	});
	const scale = spIn * (1 - spOut);
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
			backgroundColor={background}
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
							durationInFrames - 10 - i,
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
					{topFinTech && <Spacer x2 />}
					{topFinTech && (
						<Flex
							row
							align="center"
							style={{
								transform: `scale(${scale})`,
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								padding: '12px 36px',
								borderRadius: 12,
							}}
						>
							<Verified />
							<Spacer x2 />
							<BlackTitle
								style={{
									fontSize: 36,
									color: 'white',
									marginTop: 10,
									textTransform: 'initial',
								}}
							>
								{topFinTech}
							</BlackTitle>
						</Flex>
					)}
				</Flex>
			</Flex>
		</AxelraSlideWithHeader>
	);
};
