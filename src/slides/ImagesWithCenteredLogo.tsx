import {Flex} from 'axelra-styled-bootstrap-grid';
import React, {ReactNode} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {__COLORS} from '../theme';

const Container = styled.div<{backgroundScreen?: string}>`
	width: 100%;
	height: 100%;
	background: ${(props) => props.backgroundScreen ?? __COLORS.WHITE};
`;

const LogoContainer = styled(Flex)<{background: string}>`
	position: absolute;
	top: 50%;
	left: 50%;
	background: ${(props) => props.background};
	border-radius: 10px;
	padding: 10px 50px;
	z-index: 10;
	box-shadow: 0 2px 16px 11px rgba(0, 0, 0, 0.11);
`;

type Props = {
	logo: ReactNode;
	backgroundLogo: string;
	backgroundScreen?: string;
	children: ReactNode;
};
export const ImagesWithCenteredLogo = ({
	logo,
	backgroundLogo,
	backgroundScreen,
	children,
}: Props) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const scaleLogoIn = spring({fps, frame});
	const scaleLogoOut = spring({fps, frame: frame - durationInFrames + 20});
	const scale = Math.max(scaleLogoIn * (1 - scaleLogoOut), 0);
	return (
		<Container backgroundScreen={backgroundScreen}>
			<LogoContainer
				column
				align="center"
				justify="center"
				background={backgroundLogo}
				style={{transform: `translate(-50%, -50%) scale(${scale})`}}
			>
				{logo}
			</LogoContainer>
			{children}
		</Container>
	);
};
