import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AxelraLogo} from '../AxelraLogo';
import {__COLORS} from '../theme';
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
	const input = [transitionStart, videoConfig.durationInFrames / 3];
	const opacity = interpolate(frame, input, [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const translateY = interpolate(frame, input, [-30, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const translateYTitle = interpolate(frame, input, [30, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Container column justify="center" align="center">
			<Sequence
				from={0}
				durationInFrames={videoConfig.durationInFrames}
				layout="none"
			>
				<div style={{opacity, transform: `translateY(${translateY}px)`}}>
					<AxelraLogo color={__COLORS.AXELRA_DARK_BLUE} />
				</div>
				<Spacer x8 />
				<Flex
					column
					align="center"
					justify="center"
					style={{opacity, transform: `translateY(${translateYTitle}px`}}
				>
					<BlackTitle>{titleText}</BlackTitle>
					<BlackSubTitle>{titleSubText}</BlackSubTitle>
				</Flex>
			</Sequence>
		</Container>
	);
};
