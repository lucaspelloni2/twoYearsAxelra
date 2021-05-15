import React from 'react';
import {Img, Sequence} from 'remotion';
import LiveLogo from '../src/assets/ventures/livealytics/img_5.png';
import SwypeLogo from '../src/assets/ventures/swype/logo.png';
import Inc1 from './assets/inc1.jpeg';
import Inc3 from './assets/inc3.jpeg';
import Inc4 from './assets/inc4.jpeg';
import Inc5 from './assets/inc5.jpeg';
import Live1 from './assets/ventures/livealytics/images/img.png';
import Live2 from './assets/ventures/livealytics/images/img_1.png';
import Live3 from './assets/ventures/livealytics/images/img_2.png';
import Live4 from './assets/ventures/livealytics/images/img_3.png';
import Live5 from './assets/ventures/livealytics/images/img_4.png';
import Swype1 from './assets/ventures/swype/img_1.png';
import Swype2 from './assets/ventures/swype/img_2.png';
import Swype3 from './assets/ventures/swype/img_3.png';
import Swype4 from './assets/ventures/swype/img_4.png';
import Swype5 from './assets/ventures/swype/img_5.png';
import Swype6 from './assets/ventures/swype/img_6.png';
import {AxelraLogo} from './AxelraLogo';
import {ColorTransition} from './ColorTransition';
import {EmployeeGrowth} from './EmployeeGrowth';
import {FoundingTeam} from './FoundingTeam';
import {createImage, ImageType} from './ImageType';
import {Logos} from './Logos';
import {RandomImages} from './RandomImages';
import {Scaler} from './Scaler';
import {seconds} from './seconds';
import {AxelraSlideWithHeader} from './slides/AxelraSlideWithHeader';
import {DefaultAxelraSlide} from './slides/DefaultAxelraSlide';
import {ImagesWithCenteredLogo} from './slides/ImagesWithCenteredLogo';
import {VentureHeroSlide} from './slides/VentureHeroSlide';
import {VentureProductSlide} from './slides/VentureProductSlide';
import {VentureStatsSlide} from './slides/VentureStatsSlide';
import {__COLORS} from './theme';
import {VideoFirstOffice} from './VideoFirstOffice';

const AXELRA_SLIDE_DURATION_IN_FRAMES = seconds(3);

const incorporationImages: ImageType[] = [
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
		bottom: -48,
		width: 890,
		height: 'auto',
		src: Inc5,
	}),
	createImage({
		right: 500,
		zIndex: 2,
		bottom: -178,
		width: 740,
		height: 'auto',
		src: Inc4,
	}),
];

const swypeImages: ImageType[] = [
	createImage({
		left: -32,
		top: -10,
		width: 900,
		zIndex: 5,
		height: 'auto',
		src: Swype1,
	}),
	createImage({
		right: 0,
		top: -120,
		width: 650,
		zIndex: 6,
		height: 'auto',
		src: Swype2,
	}),
	createImage({
		left: -10,
		zIndex: 3,
		bottom: -10,
		width: 600,
		height: 'auto',
		src: Swype3,
	}),
	createImage({
		right: 600,
		zIndex: 1,
		bottom: -50,
		width: 830,
		height: 'auto',
		src: Swype4,
	}),
	createImage({
		right: 594,
		zIndex: 0,
		top: -105,
		width: 470,
		height: 'auto',
		src: Swype5,
	}),
	createImage({
		right: 0,
		zIndex: 1,
		bottom: -80,
		width: 650,
		height: 'auto',
		src: Swype6,
	}),
];

const liveImages: ImageType[] = [
	createImage({
		left: -32,
		top: -120,
		width: 950,
		zIndex: 5,
		height: 'auto',
		src: Live1,
	}),
	createImage({
		right: 390,
		top: -10,
		width: 750,
		zIndex: 2,
		height: 'auto',
		src: Live2,
	}),
	createImage({
		left: -10,
		zIndex: 3,
		bottom: -10,
		width: 920,
		height: 'auto',
		src: Live3,
	}),
	createImage({
		right: -50,
		zIndex: 1,
		top: -10,
		width: 500,
		height: 'auto',
		src: Live4,
	}),
	createImage({
		right: -0,
		zIndex: 2,
		bottom: -44,
		width: 1020,
		height: 'auto',
		src: Live5,
	}),
];

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
					<RandomImages images={incorporationImages} />
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
			<Sequence from={970} durationInFrames={390} layout="none">
				<AxelraSlideWithHeader
					title="How it started"
					subtitle="First office."
					titleColor={__COLORS.WHITE}
					logoColor={__COLORS.WHITE}
				>
					<VideoFirstOffice />
				</AxelraSlideWithHeader>
			</Sequence>
			<Sequence from={1360} durationInFrames={300}>
				<EmployeeGrowth
					step={1}
					title="4 + 1 Axelrators"
					subtitle="We started growing quickly."
				/>
			</Sequence>
			<Sequence from={1660} durationInFrames={15}>
				<ColorTransition from={__COLORS.AXELRA_DARK_BLUE} to="#FF0070" />
			</Sequence>
			<Sequence from={1675} durationInFrames={100}>
				<VentureHeroSlide
					title="Moflix"
					subtitle="Platform and app to radically simplify digital telecommunication services with a focus on onboarding."
					background="linear-gradient(46deg, #FF0070 0%, #FF0042 100%)"
				/>
			</Sequence>
			<Sequence from={1775} durationInFrames={15}>
				<ColorTransition from="#FF0070" to="#464D5B" />
			</Sequence>
			<Sequence from={1790} durationInFrames={200}>
				<VentureProductSlide id="moflix" />
			</Sequence>
			<Sequence from={1990} durationInFrames={200}>
				<VentureStatsSlide id="moflix" />
			</Sequence>
			<Sequence from={2190} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<Img src={SwypeLogo} />}
					backgroundLogo="linear-gradient(45deg, #FD45A8 0%, #FA2242 100%)"
					backgroundScreen="linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)"
				>
					<RandomImages images={swypeImages} />
				</ImagesWithCenteredLogo>
			</Sequence>
			<Sequence from={2390} durationInFrames={15}>
				<ColorTransition from="#464D5B" to="#187430" />
			</Sequence>
			<Sequence from={2405} durationInFrames={100}>
				<VentureHeroSlide
					title="Sibex"
					subtitle="Sibex atomic swaps"
					background="linear-gradient(224deg, #2DD82F 0%, #041332 100%);"
				/>
			</Sequence>
			<Sequence from={2505} durationInFrames={200}>
				<VentureProductSlide id="sibex" />
			</Sequence>
			<Sequence from={2705} durationInFrames={200}>
				<VentureStatsSlide id="sibex" />
			</Sequence>
			<Sequence from={2905} durationInFrames={300}>
				<EmployeeGrowth
					step={2}
					title="5 + 2 Axelrators"
					subtitle="We started growing quickly."
					sizeOldEmployees={200}
					sizeNewEmployees={300}
				/>
			</Sequence>
			<Sequence from={3205} durationInFrames={15}>
				<ColorTransition from={__COLORS.AXELRA_DARK_BLUE} to="#1FB985" />
			</Sequence>
			<Sequence from={3220} durationInFrames={100}>
				<VentureHeroSlide
					title="Livealytics"
					subtitle="Analytics and IoT services to measure visitor engagement."
					background="linear-gradient(79deg, #1FB985 2%, #1AE09E 100%)"
				/>
			</Sequence>
			<Sequence from={3320} durationInFrames={200}>
				<VentureProductSlide id="livealytics" />
			</Sequence>
			<Sequence from={3520} durationInFrames={200}>
				<VentureStatsSlide id="livealytics" />
			</Sequence>
			<Sequence from={3720} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<Img src={LiveLogo} />}
					backgroundLogo="linear-gradient(79deg, #1FB985 2%, #1AE09E 100%)"
					backgroundScreen="linear-gradient(79deg, #1FB985 2%, #1AE09E 100%)"
				>
					<RandomImages images={liveImages} />
				</ImagesWithCenteredLogo>
			</Sequence>
		</Scaler>
	);
};
