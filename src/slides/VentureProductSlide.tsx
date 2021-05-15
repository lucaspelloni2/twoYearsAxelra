import {Col, Container, Flex, Row, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import FQX1 from '../assets/ventures/fqx/img.png';
import Live1 from '../assets/ventures/livealytics/img.png';
import Sibex1 from '../assets/ventures/sibex/img.png';
import Swype1 from '../assets/ventures/swype/swype_1.svg';
import Swype2 from '../assets/ventures/swype/swype_2.svg';
import Swype3 from '../assets/ventures/swype/swype_3.svg';
import {createImage} from '../ImageType';
import {__COLORS} from '../theme';
import {BlackSubTitle, BlackTitle} from '../UI';
import {AxelraSlideWithHeader} from './AxelraSlideWithHeader';
export type VentureType = {
	id: 'moflix' | 'sibex' | 'livealytics' | 'fqx' | 'gioia' | 'freya';
};

type ProductSlideProps = {
	images: {id: string; src: any}[];
	firstWordColor: string;
	smallTitle: string;
	description: string;
	background: string;
	ventureName: string;
};

const Title = styled(BlackTitle)`
	color: white;
	text-transform: initial;
	font-size: 63px;
`;
const Subtitle = styled(BlackSubTitle)`
	font-size: 40px;
	color: white;
`;

const getElements = ({id}: VentureType): ProductSlideProps | null => {
	switch (id) {
		case 'moflix':
			return {
				firstWordColor: '#FF0042',
				background: 'linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)',
				images: [
					createImage({src: Swype1, top: 100, left: 0, zIndex: 1}),
					createImage({src: Swype2, top: 180, left: 260, zIndex: 2}),
					createImage({src: Swype3, top: 260, left: 520, zIndex: 3}),
				],
				ventureName: 'Swype',
				smallTitle: 'with Axelra in 112 Days',
				description:
					'The first app-based mobile subscription platform in Switzerland offering a 100% digital customer experience. ',
			};
		case 'sibex':
			return {
				firstWordColor: '#12951B',
				background:
					'linear-gradient(180deg, rgba(22,28,34,1) 0%, #292E34 100%)',
				images: [createImage({src: Sibex1, top: 250, right: -250, zIndex: 1})],
				ventureName: 'Sibex',
				smallTitle: 'with Axelra in 112 Days',
				description:
					'Trade OTC with the Whole World. No Middlemen, No Centralized Custody. Global Liquidity',
			};
		case 'livealytics':
			return {
				firstWordColor: '#ffffff',
				background: 'linear-gradient(79deg, #1FB985 2%, #1AE09E 100%)',
				images: [createImage({src: Live1, top: 135, right: -300, zIndex: 1})],
				ventureName: 'Livealytics',
				smallTitle: 'with Axelra in 107 Days',
				description:
					'Measurement solutions provide insights to improve live customer experiences, optimise operational costs and increase sales.',
			};
		case 'fqx':
			return {
				firstWordColor: '#ffffff',
				background: 'linear-gradient(224deg, #5980F0 0%, #2D49DC 100%)',
				images: [createImage({src: FQX1, top: 138, right: -100, zIndex: 1})],
				ventureName: 'FQX',
				smallTitle: 'with Axelra in 112 Days',
				description:
					'FQX enables the issuance and transfer of electronic negotiable instruments (eNI™) with theenforceability in 164 countries based on a banking-grade DLT environment.',
			};
		case 'gioia':
			return null;
		case 'freya':
			return null;
		default:
			throw new Error('venture not implemented');
	}
};

export const VentureProductSlide = ({id}: VentureType) => {
	const {
		smallTitle,
		ventureName,
		background,
		images,
		firstWordColor,
		description,
	} = getElements({id}) as ProductSlideProps;
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = description.split(' ').map((t) => ` ${t} `);
	const springOpacityIn = spring({
		fps: videoConfig.fps,
		frame: frame - 40,
		config: {
			damping: 100,
			stiffness: 200,
			mass: 0.5,
		},
	});
	const springOpacityOut = spring({
		fps: videoConfig.fps,
		frame: frame - videoConfig.durationInFrames + 20,
		config: {
			damping: 100,
			stiffness: 150,
			mass: 0.3,
		},
	});
	const springOpacity = springOpacityIn * (1 - springOpacityOut);
	return (
		<AxelraSlideWithHeader
			title=""
			subtitle=""
			backgroundColor={background}
			logoColor={__COLORS.WHITE}
		>
			<Container fluid style={{height: '100%'}}>
				<Row flex={1} style={{height: '100%'}}>
					<Col xs={0.5} />
					<Col>
						<Flex row flex={1} style={{height: '100%'}}>
							<Flex column flex={1} justify="center">
								<Flex row align="center">
									<Subtitle style={{opacity: springOpacity}}>
										<span style={{color: firstWordColor}}>{ventureName} </span>
										{smallTitle}
									</Subtitle>
								</Flex>
								<Spacer x3 />
								<Title>
									{text.map((t, i) => {
										const springOpacityIn = spring({
											fps: videoConfig.fps,
											frame: frame - i * 3,
											config: {
												damping: 100,
												stiffness: 200,
												mass: 0.5,
											},
										});
										const springOpacityOut = spring({
											fps: videoConfig.fps,
											frame: frame - videoConfig.durationInFrames + 20,
											config: {
												damping: 100,
												stiffness: 150,
												mass: 0.3,
											},
										});
										const springOpacity =
											springOpacityIn * (1 - springOpacityOut);
										return (
											<span
												key={t}
												style={{
													marginRight: 20,
													opacity: springOpacity,
													display: 'inline-block',
												}}
											>
												{t}
											</span>
										);
									})}
								</Title>
							</Flex>
							<Flex flex={1}>
								<Flex
									row
									align="center"
									justify="center"
									style={{position: 'relative'}}
								>
									{images.map((image, i) => {
										const {src, id, ...style} = image;
										const spIn = spring({
											fps: videoConfig.fps,
											frame: frame - i * 8 - 20,
											config: {
												damping: 100,
												stiffness: 150,
												mass: 0.3,
											},
										});
										const spOut = spring({
											fps: videoConfig.fps,
											frame: frame - videoConfig.durationInFrames + 20,
											config: {
												damping: 100,
												stiffness: 150,
												mass: 0.3,
											},
										});
										const scale = spIn * (1 - spOut);
										return (
											<Img
												key={id}
												src={src}
												style={{transform: `scale(${scale})`, ...style}}
											/>
										);
									})}
								</Flex>
							</Flex>
						</Flex>
					</Col>
					<Col xs={0.5} />
				</Row>
			</Container>
		</AxelraSlideWithHeader>
	);
};
