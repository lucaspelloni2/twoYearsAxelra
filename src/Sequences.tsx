import React from 'react';
import {Sequence} from 'remotion';
import {seconds} from './seconds';
import {AxelraSlideWithHeader} from './slides/AxelraSlideWithHeader';
import {DefaultAxelraSlide} from './slides/DefaultAxelraSlide';

const AXELRA_SLIDE_DURATION_IN_FRAMES = seconds(3);

export const Sequences = () => {
	return (
		<>
			<Sequence
				from={0}
				durationInFrames={AXELRA_SLIDE_DURATION_IN_FRAMES}
				layout="none"
			>
				<DefaultAxelraSlide
					titleText="How it started"
					titleSubText="Our Journey from 05.2019 - 05.2021"
				/>
			</Sequence>
			<Sequence
				from={90}
				durationInFrames={AXELRA_SLIDE_DURATION_IN_FRAMES}
				layout="none"
			>
				<DefaultAxelraSlide
					titleText="How it started"
					titleSubText="Our Journey from 05.2019 - 05.2021"
				/>
			</Sequence>
			<Sequence
				from={180}
				durationInFrames={AXELRA_SLIDE_DURATION_IN_FRAMES}
				layout="none"
			>
				<AxelraSlideWithHeader
					title="How it started"
					subtitle="Logo Selection."
				>
					asjofjoasfjoafs
				</AxelraSlideWithHeader>
			</Sequence>
		</>
	);
};
