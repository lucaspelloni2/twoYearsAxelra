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

const Row = styled(Flex)`
	padding-left: 100px;
	padding-right: 100px;
`;

export const Logos = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	/*	const scale = interpolate(frame, [130, 140], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});*/

	const scaleLogo = spring({fps, frame: frame - durationInFrames / 2 - 10});

	const shadow = interpolate(frame, [140, 155], [0.06, 0.13], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Container column justify="center">
			<Row row justify="space-between">
				{logos.map((logo, i) => {
					const spIn = spring({
						fps,
						frame: frame - i * 8 - 20,
						config: {
							damping: 200,
						},
					});
					const spOut = spring({
						fps,
						frame: frame - durationInFrames + durationInFrames / 2,
						config: {
							damping: 100,
							stiffness: 150,
							mass: 0.3,
						},
					});
					const scale = interpolate(spIn * (1 - spOut), [0, 1], [0, 0.9]);
					return (
						<Img
							key={logo.id}
							src={logo.src}
							style={{
								transform: `scale(${scale})`,
							}}
						/>
					);
				})}
			</Row>
			<LogoContainer
				column
				justify="center"
				align="center"
				style={{
					transform: `translate(-50%, -50%) scale(${scaleLogo}) `,
					boxShadow: `2px 30px 70px rgba(0, 0, 0, ${shadow})`,
				}}
			>
				<AxelraLogo />
				<Spacer x6 />
			</LogoContainer>
		</Container>
	);
};
