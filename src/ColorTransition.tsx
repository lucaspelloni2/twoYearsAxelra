import React from 'react';
import {
	AbsoluteFill,
	interpolateColors,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

const Container = styled(AbsoluteFill)<{color: string}>`
	background-color: ${(props) => props.color};
`;

type Props = {
	from: string;
	to: string;
};
export const ColorTransition = ({from, to}: Props) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const color = interpolateColors(frame, [0, durationInFrames - 1], [from, to]);
	return <Container color={color} />;
};
