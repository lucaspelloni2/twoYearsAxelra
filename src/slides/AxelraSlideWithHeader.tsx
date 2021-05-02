import {Flex} from 'axelra-styled-bootstrap-grid';
import React, {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AxelraLogo} from '../AxelraLogo';
import {__COLORS} from '../theme';
import {BlackSubTitle, BlackTitle, DEFAULT_PADDING} from '../UI';

const Container = styled(Flex)<{backgroundColor?: string}>`
	background-color: ${(props) => props.backgroundColor ?? __COLORS.WHITE};
	width: 100%;
`;

const Header = styled(Flex)`
	${DEFAULT_PADDING};
	position: fixed;
	width: 100%;
`;

const Title = styled(BlackTitle)<{color?: string}>`
	font-size: 48px;
	color: ${(props) => props.color ?? __COLORS.BLACK};
`;
const SubTitle = styled(BlackSubTitle)<{color?: string}>`
	font-size: 48px;
	color: ${(props) => props.color ?? __COLORS.BLACK};
`;

type Props = {
	title: string;
	subtitle: string;
	backgroundColor?: string;
	titleColor?: string;
	logoColor?: string;
	children: ReactNode;
};
export const AxelraSlideWithHeader = ({
	title,
	subtitle,
	children,
	backgroundColor,
	logoColor,
	titleColor,
}: Props) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const transitionStart = 10;
	const input = [
		transitionStart,
		30,
		videoConfig.durationInFrames - 10,
		videoConfig.durationInFrames,
	];
	const opacity = interpolate(frame, input, [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<Container column backgroundColor={backgroundColor}>
			<Header row align="center" style={{opacity}}>
				<Flex column>
					<Title color={titleColor}>{title}</Title>
					<SubTitle color={titleColor}>{subtitle}</SubTitle>
				</Flex>
				<Flex flex={1} />
				<Flex column>
					<AxelraLogo width="170" color={logoColor ?? undefined} />
				</Flex>
			</Header>
			{children}
		</Container>
	);
};
