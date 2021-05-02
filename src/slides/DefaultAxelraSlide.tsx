import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AxelraLogo} from '../AxelraLogo';
import {BlackSubTitle, BlackTitle} from '../UI';

const Container = styled(Flex)`
	background-color: white;
	width: 100%;
`;

type Props = {
	titleText: string;
	titleSubText: string;
};

export const DefaultAxelraSlide = ({titleSubText, titleText}: Props) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const transitionStart = 10;
	const input = [
		transitionStart,
		videoConfig.durationInFrames / 4,
		videoConfig.durationInFrames - 10,
		videoConfig.durationInFrames,
	];
	const opacity = interpolate(frame, input, [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const translateYTitle = spring({
		fps: videoConfig.fps,
		frame: frame - 2,
		config: {
			damping: 100,
			stiffness: 200,
			mass: 0.5,
		},
	});

	return (
		<Container column justify="center" align="center">
			<div style={{opacity, transform: `scale(${translateYTitle})`}}>
				<AxelraLogo />
			</div>
			<Spacer x8 />
			<Flex
				column
				align="center"
				justify="center"
				style={{opacity, transform: `scale(${translateYTitle})`}}
			>
				<BlackTitle>{titleText}</BlackTitle>
				<BlackSubTitle>{titleSubText}</BlackSubTitle>
			</Flex>
			<Spacer x8 />
		</Container>
	);
};
