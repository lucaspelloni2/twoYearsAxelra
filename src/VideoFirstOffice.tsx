import {Flex} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import Vid from './assets/first-office.mp4';
import {__COLORS} from './theme';
const Container = styled(Flex)``;

// TODO: do it global
const scale = 2;

export const VideoFirstOffice = () => {
	const frame = useCurrentFrame();
	const {width, durationInFrames} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[0, 50, durationInFrames - 30, durationInFrames],
		[0, 1, 1, 0]
	);
	return (
		<Container
			column
			justify="center"
			align="center"
			flex={1}
			style={{backgroundColor: __COLORS.AXELRA_DARK_BLUE}}
		>
			<Video src={Vid} width={width / 2} style={{opacity}} />
		</Container>
	);
};
