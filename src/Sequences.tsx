import React from 'react';
import {Sequence} from 'remotion';
import {AxelraLogo} from './AxelraLogo';
import {IncorporationImages} from './IncorporationImages';
import {Logos} from './Logos';
import {seconds} from './seconds';
import {AxelraSlideWithHeader} from './slides/AxelraSlideWithHeader';
import {DefaultAxelraSlide} from './slides/DefaultAxelraSlide';
import {ImagesWithCenteredLogo} from './slides/ImagesWithCenteredLogo';
import {__COLORS} from './theme';

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
			<Sequence from={180} durationInFrames={200} layout="none">
				<AxelraSlideWithHeader
					title="How it started"
					subtitle="Logo Selection."
				>
					<Logos />
				</AxelraSlideWithHeader>
			</Sequence>
			<Sequence
				from={380}
				durationInFrames={AXELRA_SLIDE_DURATION_IN_FRAMES}
				layout="none"
			>
				<DefaultAxelraSlide
					titleText="How it started"
					titleSubText="Founding Team & Incorporation"
				/>
			</Sequence>
			<Sequence from={470} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<AxelraLogo width={185} />}
					backgroundLogo={__COLORS.WHITE}
				>
					<IncorporationImages />
				</ImagesWithCenteredLogo>
			</Sequence>
		</>
	);
};
