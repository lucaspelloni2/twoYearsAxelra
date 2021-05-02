import React from 'react';
import {Sequence} from 'remotion';
import {AxelraLogo} from './AxelraLogo';
import {ColorTransition} from './ColorTransition';
import {FoundingTeam} from './FoundingTeam';
import {IncorporationImages} from './IncorporationImages';
import {Logos} from './Logos';
import {Scaler} from './Scaler';
import {seconds} from './seconds';
import {AxelraSlideWithHeader} from './slides/AxelraSlideWithHeader';
import {DefaultAxelraSlide} from './slides/DefaultAxelraSlide';
import {ImagesWithCenteredLogo} from './slides/ImagesWithCenteredLogo';
import {__COLORS} from './theme';

const AXELRA_SLIDE_DURATION_IN_FRAMES = seconds(3);

export const Sequences = () => {
	return (
		<Scaler scale={2}>
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
			<Sequence from={670} durationInFrames={5}>
				<ColorTransition from={__COLORS.WHITE} to={__COLORS.AXELRA_DARK_BLUE} />
			</Sequence>
			<Sequence from={675} durationInFrames={200} layout="none">
				<AxelraSlideWithHeader
					title="How it started"
					subtitle="Founding Team & first four Axelrators."
					backgroundColor={__COLORS.AXELRA_DARK_BLUE}
					titleColor={__COLORS.WHITE}
					logoColor={__COLORS.WHITE}
				>
					<FoundingTeam />
				</AxelraSlideWithHeader>
			</Sequence>
			<Sequence from={875} durationInFrames={5}>
				<ColorTransition from={__COLORS.AXELRA_DARK_BLUE} to={__COLORS.WHITE} />
			</Sequence>
			<Sequence
				from={880}
				durationInFrames={AXELRA_SLIDE_DURATION_IN_FRAMES}
				layout="none"
			>
				<DefaultAxelraSlide
					titleText="How it started"
					titleSubText="First Office"
				/>
			</Sequence>
		</Scaler>
	);
};
