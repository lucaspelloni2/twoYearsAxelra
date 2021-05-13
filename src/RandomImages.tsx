import React from 'react';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import Inc1 from './assets/inc1.jpeg';
import Inc3 from './assets/inc3.jpeg';
import Inc4 from './assets/inc4.jpeg';
import Inc5 from './assets/inc5.jpeg';
import {createImage, ImageType} from './ImageType';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;


type Props = {
	images: ImageType[];
};

export const RandomImages = ({images}: Props) => {
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
					frame: frame - durationInFrames + 20,
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
