import {Flex} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import {__COLORS} from './theme';

const Container = styled(Flex)``;

type Props = {video: any};
export const VideoFirstOffice = ({video}: Props) => {
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
			style={{backgroundColor: __COLORS.WHITE}}
		>
			<Video src={video} width={width / 2} style={{opacity}} />
		</Container>
	);
};
