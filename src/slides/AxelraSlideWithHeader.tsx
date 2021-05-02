import {Flex} from 'axelra-styled-bootstrap-grid';
import React, {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AxelraLogo} from '../AxelraLogo';
import {__COLORS} from '../theme';
import {BlackSubTitle, BlackTitle, DEFAULT_PADDING} from '../UI';

const Container = styled(Flex)`
	background-color: ${__COLORS.WHITE};
	width: 100%;
`;

const Header = styled(Flex)`
	${DEFAULT_PADDING};
	position: fixed;
	width: 100%;
`;

const Title = styled(BlackTitle)`
	font-size: 48px;
`;
const SubTitle = styled(BlackSubTitle)`
	font-size: 48px;
`;

type Props = {
	title: string;
	subtitle: string;
	children: ReactNode;
};
export const AxelraSlideWithHeader = ({title, subtitle, children}: Props) => {
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
	return (
		<Container column>
			<Header row align="center" style={{opacity}}>
				<Flex column>
					<Title>{title}</Title>
					<SubTitle>{subtitle}</SubTitle>
				</Flex>
				<Flex flex={1} />
				<Flex column>
					<AxelraLogo width="170" />
				</Flex>
			</Header>
			{children}
		</Container>
	);
};
