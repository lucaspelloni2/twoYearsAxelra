import React from 'react';
import {Sequence} from 'remotion';
import {DefaultAxelraSlide} from './slides/DefaultAxelraSlide';

export const Sequences = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={90} layout="none">
				<DefaultAxelraSlide
					titleText="How it started"
					titleSubText="Our Journey from 05.2019 - 05.2021"
				/>
			</Sequence>
			<Sequence from={90} durationInFrames={180} layout="none">
				<DefaultAxelraSlide
					titleText="How it started"
					titleSubText="Our Journey from 05.2019 - 05.2021"
				/>
			</Sequence>
		</>
	);
};
