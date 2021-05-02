import React from 'react';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import Inc1 from './assets/inc1.jpeg';
import Inc2 from './assets/inc2.jpeg';
import Inc3 from './assets/inc3.jpeg';
import Inc4 from './assets/inc4.png';
import Inc5 from './assets/inc5.jpeg';
import {createImage, ImageType} from './ImageType';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const images: ImageType[] = [
	createImage({
		left: 0,
		top: -10,
		width: 840,
		zIndex: 5,
		height: 'auto',
		src: Inc1,
	}),

	createImage({
		right: 0,
		top: -20,
		width: 650,
		zIndex: 6,
		height: 'auto',
		src: Inc3,
	}),
	createImage({
		left: -10,
		zIndex: 6,
		bottom: -120,
		width: 890,
		height: 'auto',
		src: Inc5,
	}),
	createImage({
		right: 600,
		zIndex: 2,
		bottom: 0,
		width: 650,
		height: 'auto',
		src: Inc4,
	}),
	createImage({
		right: 620,
		top: -130,
		width: 500,
		height: 'auto',
		src: Inc2,
	}),
];

export const IncorporationImages = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	return (
		<Container>
			{images.map((image, i) => {
				const {src, id, ...style} = image;
				const spIn = spring({
					fps,
					frame: frame - i * 8 - 20,
					config: {
						damping: 100,
						stiffness: 150,
						mass: 0.3,
					},
				});
				const spOut = spring({
					fps,
					frame: frame - durationInFrames + 50,
					config: {
						damping: 100,
						stiffness: 150,
						mass: 0.3,
					},
				});
				const scale = spIn * (1 - spOut);
				return (
					<Img
						key={id}
						src={src}
						style={{transform: `scale(${scale})`, ...style}}
					/>
				);
			})}
		</Container>
	);
};
