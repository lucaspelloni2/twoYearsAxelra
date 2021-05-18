import React from 'react';
import {Img, Sequence} from 'remotion';
import LiveLogo from '../src/assets/ventures/livealytics/img_5.png';
import SwypeLogo from '../src/assets/ventures/swype/logo.png';
import FirstOfficeVideo from './assets/first-office.mp4';
import Inc1 from './assets/inc1.jpeg';
import Inc3 from './assets/inc3.jpeg';
import Inc4 from './assets/inc4.jpeg';
import Inc5 from './assets/inc5.jpeg';
import SecondOfficeVideo from './assets/second-office.mp4';
import ThirdOfficeVideo from './assets/third-office.mp4';
import ThirdOffice1 from './assets/third-office/img.png';
import ThirdOffice2 from './assets/third-office/img_1.png';
import ThirdOffice3 from './assets/third-office/img_2.png';
import ThirdOffice4 from './assets/third-office/img_3.png';
import ThirdOffice5 from './assets/third-office/img_4.png';
import ThirdOffice6 from './assets/third-office/img_5.png';
import ThirdOffice7 from './assets/third-office/img_6.png';
import FQX1 from './assets/ventures/fqx/images/img.png';
import FQX2 from './assets/ventures/fqx/images/img_1.png';
import FQX3 from './assets/ventures/fqx/images/img_2.png';
import FQX4 from './assets/ventures/fqx/images/img_3.png';
import FQX5 from './assets/ventures/fqx/images/img_4.png';
import FQXLogo from './assets/ventures/fqx/images/img_6.png';
import Freya1 from './assets/ventures/freya/images/img.png';
import Freya2 from './assets/ventures/freya/images/img_1.png';
import Freya3 from './assets/ventures/freya/images/img_2.png';
import Freya5 from './assets/ventures/freya/images/img_4.png';
import Freya6 from './assets/ventures/freya/images/img_5.png';
import FreyaLogo from './assets/ventures/freya/img.png';
import Gioia1 from './assets/ventures/gioia/images/img.png';
import Gioia2 from './assets/ventures/gioia/images/img_1.png';
import Gioia3 from './assets/ventures/gioia/images/img_2.png';
import Gioia4 from './assets/ventures/gioia/images/img_3.png';
import Gioia5 from './assets/ventures/gioia/images/img_4.png';
import GioiaLogo from './assets/ventures/gioia/img_4.png';
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

const fqxImages: ImageType[] = [
	createImage({
		left: -32,
		top: -10,
		width: 950,
		zIndex: 5,
		height: 'auto',
		src: FQX1,
	}),
	createImage({
		right: 650,
		top: -10,
		width: 360,
		zIndex: 2,
		height: 'auto',
		src: FQX2,
	}),
	createImage({
		left: -10,
		zIndex: 3,
		bottom: -10,
		width: 925,
		height: 'auto',
		src: FQX3,
	}),
	createImage({
		right: -10,
		zIndex: 1,
		top: -10,
		width: 680,
		height: 'auto',
		src: FQX4,
	}),
	createImage({
		right: -10,
		zIndex: 2,
		bottom: -44,
		width: 1020,
		height: 'auto',
		src: FQX5,
	}),
];

const thirdOffice: ImageType[] = [
	createImage({
		left: -32,
		top: -50,
		width: 950,
		zIndex: 5,
		height: 'auto',
		src: ThirdOffice1,
	}),
	createImage({
		right: -10,
		bottom: -10,
		width: 650,
		zIndex: 2,
		height: 'auto',
		src: ThirdOffice2,
	}),
	createImage({
		left: 910,
		zIndex: 3,
		top: -10,
		width: 450,
		height: 'auto',
		src: ThirdOffice3,
	}),
	createImage({
		right: -90,
		zIndex: 1,
		top: -10,
		width: 665,
		height: 'auto',
		src: ThirdOffice4,
	}),
	createImage({
		right: -10,
		zIndex: 3,
		bottom: 270,
		width: 650,
		height: 'auto',
		src: ThirdOffice5,
	}),
	createImage({
		left: -10,
		zIndex: 2,
		bottom: -30,
		width: 800,
		height: 'auto',
		src: ThirdOffice6,
	}),
	createImage({
		right: 332,
		zIndex: 1,
		bottom: -10,
		width: 930,
		height: 'auto',
		src: ThirdOffice7,
	}),
];

const gioiaImages: ImageType[] = [
	createImage({
		left: -32,
		top: -50,
		width: 950,
		zIndex: 5,
		height: 'auto',
		src: Gioia1,
	}),
	createImage({
		right: -10,
		bottom: -25,
		width: 570,
		zIndex: 5,
		height: 'auto',
		src: Gioia2,
	}),
	createImage({
		left: 910,
		zIndex: 3,
		top: -150,
		width: 450,
		height: 'auto',
		src: Gioia3,
	}),
	createImage({
		left: -10,
		zIndex: 1,
		bottom: -10,
		width: 750,
		height: 'auto',
		src: Gioia4,
	}),
	createImage({
		right: 533,
		zIndex: 3,
		bottom: -10,
		width: 650,
		height: 'auto',
		src: Gioia5,
	}),
];

const freyaImages: ImageType[] = [
	createImage({
		left: -32,
		top: -50,
		width: 950,
		zIndex: 5,
		height: 'auto',
		src: Freya1,
	}),
	createImage({
		right: -10,
		bottom: -25,
		width: 650,
		zIndex: 5,
		height: 'auto',
		src: Freya2,
	}),
	createImage({
		left: 850,
		zIndex: 5,
		top: -18,
		width: 450,
		height: 'auto',
		src: Freya3,
	}),

	createImage({
		right: 533,
		zIndex: 3,
		bottom: -10,
		width: 650,
		height: 'auto',
		src: Freya5,
	}),
	createImage({
		right: -130,
		zIndex: 3,
		top: -10,
		width: 870,
		height: 'auto',
		src: Freya6,
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
					titleText="2 Years with Axelra"
					titleSubText="THANK YOU ALL!"
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
				<ColorTransition
					type="color"
					from={__COLORS.WHITE}
					to={__COLORS.AXELRA_DARK_BLUE}
				/>
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
				<ColorTransition
					type="color"
					from={__COLORS.AXELRA_DARK_BLUE}
					to={__COLORS.WHITE}
				/>
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
					<VideoFirstOffice video={FirstOfficeVideo} />
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
				<ColorTransition
					type="color"
					from={__COLORS.AXELRA_DARK_BLUE}
					to="#FF0070"
				/>
			</Sequence>
			<Sequence from={1675} durationInFrames={100}>
				<VentureHeroSlide
					title="Moflix"
					subtitle="Platform and app to radically simplify digital telecommunication services with a focus on onboarding."
					background="linear-gradient(46deg, #FF0070 0%, #FF0042 100%)"
				/>
			</Sequence>
			<Sequence from={1775} durationInFrames={15}>
				<ColorTransition type="color" from="#FF0070" to="#464D5B" />
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
				<ColorTransition
					type="linear-gradient"
					from={['#464D5B', '#2A2F3B']}
					to={['#2DD82F', '#041332']}
					angle={[180, 224]}
				/>
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
				<ColorTransition
					type="linear-gradient"
					from={[__COLORS.AXELRA_DARK_BLUE, __COLORS.AXELRA_DARK_BLUE]}
					to={['#1FB985', '#1AE09E']}
					angle={[0, 79]}
				/>
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
			<Sequence from={3920} durationInFrames={15}>
				<ColorTransition
					type="color"
					from="#1FB985"
					to={__COLORS.AXELRA_DARK_BLUE}
				/>
			</Sequence>
			<Sequence from={3935} durationInFrames={200}>
				<EmployeeGrowth
					step={3}
					title="7 + 2 Axelrators"
					subtitle="We started growing quickly."
					sizeOldEmployees={190}
					sizeNewEmployees={300}
				/>
			</Sequence>
			<Sequence from={4135} durationInFrames={15}>
				<ColorTransition
					type="color"
					from={__COLORS.AXELRA_DARK_BLUE}
					to="#ffffff"
				/>
			</Sequence>
			<Sequence from={4150} durationInFrames={200} layout="none">
				<DefaultAxelraSlide titleText="Growth" titleSubText="Office Upgrade" />
			</Sequence>
			<Sequence from={4350} durationInFrames={390} layout="none">
				<AxelraSlideWithHeader
					title="Growth"
					subtitle="Office Upgrade."
					titleColor={__COLORS.WHITE}
					logoColor={__COLORS.WHITE}
					backgroundColor={__COLORS.WHITE}
				>
					<VideoFirstOffice video={SecondOfficeVideo} />
				</AxelraSlideWithHeader>
			</Sequence>
			<Sequence from={4740} durationInFrames={200}>
				<EmployeeGrowth
					step={4}
					title="9 + 2 Axelrators"
					subtitle="More projects more talents."
					sizeOldEmployees={190}
					sizeNewEmployees={300}
				/>
			</Sequence>
			<Sequence from={4940} durationInFrames={15}>
				<ColorTransition
					type="linear-gradient"
					from={[__COLORS.AXELRA_DARK_BLUE, __COLORS.AXELRA_DARK_BLUE]}
					to={['#5980F0', '#2D49DC']}
					angle={[0, 224]}
				/>
			</Sequence>
			<Sequence from={4955} durationInFrames={100}>
				<VentureHeroSlide
					title="FQX"
					subtitle="Liquidity where needed."
					background="linear-gradient(224deg, #5980F0 0%, #2D49DC 100%)"
				/>
			</Sequence>
			<Sequence from={5055} durationInFrames={200}>
				<VentureProductSlide id="fqx" />
			</Sequence>
			<Sequence from={5255} durationInFrames={200}>
				<VentureStatsSlide id="fqx" />
			</Sequence>
			<Sequence from={5455} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<Img src={FQXLogo} style={{height: 70}} />}
					backgroundLogo="#ffffff"
					backgroundScreen="linear-gradient(224deg, #5980F0 0%, #2D49DC 100%)"
				>
					<RandomImages images={fqxImages} />
				</ImagesWithCenteredLogo>
			</Sequence>
			<Sequence from={5655} durationInFrames={15}>
				<ColorTransition
					type="color"
					from="#5980F0"
					to={__COLORS.AXELRA_DARK_BLUE}
				/>
			</Sequence>
			<Sequence from={5670} durationInFrames={200}>
				<EmployeeGrowth
					step={5}
					title="11 + 2 Axelrators"
					subtitle="New projects new talents."
					sizeOldEmployees={130}
					sizeNewEmployees={300}
				/>
			</Sequence>
			<Sequence from={5870} durationInFrames={15}>
				<ColorTransition
					type="color"
					from={__COLORS.AXELRA_DARK_BLUE}
					to="#ffffff"
				/>
			</Sequence>
			<Sequence
				from={5885}
				durationInFrames={AXELRA_SLIDE_DURATION_IN_FRAMES}
				layout="none"
			>
				<DefaultAxelraSlide
					titleText="More people  = new home"
					titleSubText="From co-working to our own office."
				/>
			</Sequence>
			<Sequence from={5975} durationInFrames={390} layout="none">
				<AxelraSlideWithHeader
					title="TODO: replace with other format"
					subtitle="From co-working to our own office."
					titleColor={__COLORS.WHITE}
					logoColor={__COLORS.WHITE}
				>
					<VideoFirstOffice video={ThirdOfficeVideo} />
				</AxelraSlideWithHeader>
			</Sequence>
			<Sequence from={6365} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<AxelraLogo />}
					backgroundLogo="#ffffff"
					backgroundScreen="#ffffff"
				>
					<RandomImages images={thirdOffice} />
				</ImagesWithCenteredLogo>
			</Sequence>

			<Sequence from={6565} durationInFrames={15}>
				<ColorTransition type="color" from="#ffffff" to="#1C5096" />
			</Sequence>
			<Sequence from={6580} durationInFrames={100}>
				<VentureHeroSlide
					title="GKB Gioia 3a"
					subtitle="Macht Vorsorge zur Vorfreude."
					background="linear-gradient(135deg, #1C5096 0%, #0A63B4 66%, #0D86ED 100%)"
				/>
			</Sequence>
			<Sequence from={6680} durationInFrames={200}>
				<VentureProductSlide id="gioia" />
			</Sequence>
			<Sequence from={6880} durationInFrames={200}>
				<VentureStatsSlide id="gioia" />
			</Sequence>
			<Sequence from={7080} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<Img src={GioiaLogo} style={{height: 130}} />}
					backgroundLogo="linear-gradient(135deg, #1C5096 0%, #0A63B4 66%, #0D86ED 100%)"
					backgroundScreen="linear-gradient(135deg, #1C5096 0%, #0A63B4 66%, #0D86ED 100%)"
				>
					<RandomImages images={gioiaImages} />
				</ImagesWithCenteredLogo>
			</Sequence>

			<Sequence from={7280} durationInFrames={15}>
				<ColorTransition type="color" from="#1C5096" to="#FFBB32" />
			</Sequence>

			<Sequence from={7295} durationInFrames={100}>
				<VentureHeroSlide
					title="Freya 3a"
					subtitle="Gewinn mit Sinn in der Vorsorge verbinden."
					background="linear-gradient(225deg, #FFBB32 0%, #FFA212 100%)"
				/>
			</Sequence>
			<Sequence from={7395} durationInFrames={200}>
				<VentureProductSlide id="freya" />
			</Sequence>
			<Sequence from={7595} durationInFrames={200}>
				<VentureStatsSlide id="freya" />
			</Sequence>
			<Sequence from={7795} durationInFrames={200} layout="none">
				<ImagesWithCenteredLogo
					logo={<Img src={FreyaLogo} style={{height: 130}} />}
					backgroundLogo="#ffffff"
					backgroundScreen="linear-gradient(225deg, #FFBB32 0%, #FFA212 100%)"
				>
					<RandomImages images={freyaImages} />
				</ImagesWithCenteredLogo>
			</Sequence>
		</Scaler>
	);
};
