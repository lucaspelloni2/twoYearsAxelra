import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
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
	const opacity = interpolate(frame, [0, 20], [1, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const blur = interpolate(frame, [10, 20], [40, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Container
			column
			flex={1}
			align="center"
			justify="center"
			background={background}
			style={{opacity}}
		>
			<TextWrapper column justify="center" align="center">
				<Title style={{filter: `blur(${blur}px)`}}>{title}</Title>
				<Spacer x1 />
				<Subtitle style={{filter: `blur(${blur}px)`}}>{subtitle}</Subtitle>
			</TextWrapper>
		</Container>
	);
};
