import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import Logo1 from './assets/logos/logo1.png';
import Logo2 from './assets/logos/logo2.png';
import Logo3 from './assets/logos/logo3.png';
import Logo4 from './assets/logos/logo4.png';
import Logo5 from './assets/logos/logo5.png';
import {AxelraLogo} from './AxelraLogo';

const Container = styled(Flex)`
	height: 100%;
	width: 100%;
`;

const LogoContainer = styled(Flex)`
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	width: 500px;
	height: 500px;
`;

const logos = [
	{id: 'logo1', src: Logo1},
	{id: 'logo2', src: Logo2},
	{id: 'logo3', src: Logo3},
	{id: 'logo4', src: Logo4},
	{id: 'logo5', src: Logo5},
];

export const Logos = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = interpolate(frame, [130, 140], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const scaleLogo = interpolate(frame, [135, 145], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const shadow = interpolate(frame, [140, 155], [0.03, 0.1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Container column justify="center">
			<Flex row justify="space-between" style={{transform: `scale(${scale})`}}>
				{logos.map((logo, i) => (
					<Img
						src={logo.src}
						style={{
							transform: `scale(${spring({
								fps,
								frame: frame - i * 8,
								config: {
									damping: 100,
									stiffness: 150,
									mass: 0.3,
								},
							})})`,
						}}
					/>
				))}
			</Flex>
			<LogoContainer
				column
				justify="center"
				align="center"
				style={{
					transform: `scale(${scaleLogo}) translate(-50%, -50%)`,
					boxShadow: `2px 30px 70px rgba(0, 0, 0, ${shadow})`,
				}}
			>
				<AxelraLogo />
				<Spacer x6 />
			</LogoContainer>
		</Container>
	);
};
