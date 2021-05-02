import {Flex} from 'axelra-styled-bootstrap-grid';
import React, {ReactNode} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
`;

const LogoContainer = styled(Flex)<{background: string}>`
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: ${(props) => props.background};
	border-radius: 10px;
	padding: 10px 50px;
	z-index: 10;
	box-shadow: 0 2px 16px 11px rgba(0, 0, 0, 0.11);
`;

type Props = {
	logo: ReactNode;
	backgroundLogo: string;
	children: ReactNode;
};
export const ImagesWithCenteredLogo = ({
	logo,
	backgroundLogo,
	children,
}: Props) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const scaleLogoIn = spring({fps, frame});
	const scaleLogoOut = spring({fps, frame: frame - durationInFrames + 20});
	const scale = Math.max(scaleLogoIn * (1 - scaleLogoOut), 0);
	return (
		<Container>
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
