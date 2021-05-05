import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {BlackSubTitle, BlackTitle} from '../UI';

const Container = styled(Flex)<{background: string}>`
	height: 100%;
	width: 100%;
	background: ${(props) => props.background};
`;

const TextWrapper = styled(Flex)`
	max-width: 90%;
`;

const Title = styled(BlackTitle)`
	text-align: center;
	color: white;
`;
const Subtitle = styled(BlackSubTitle)`
	text-align: center;
	font-size: 64px;
	color: white;
`;

type Props = {
	title: string;
	subtitle: string;
	background: string;
};
export const VentureHeroSlide = ({title, subtitle, background}: Props) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const blur = interpolate(
		frame,
		[0, 8, durationInFrames - 5, durationInFrames],
		[15, 0, 0, 15],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<Container
			column
			flex={1}
			align="center"
			justify="center"
			background={background}
		>
			<TextWrapper column justify="center" align="center">
				<Title style={{filter: `blur(${blur}px)`}}>{title}</Title>
				<Spacer x1 />
				<Subtitle style={{filter: `blur(${blur}px)`}}>{subtitle}</Subtitle>
			</TextWrapper>
		</Container>
	);
};
