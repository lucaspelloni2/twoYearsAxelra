import {Composition} from 'remotion';
import './fonts.css';
import {DefaultAxelraSlide} from './slides/DefaultAxelraSlide';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="DefaultAxelraSlide"
				component={DefaultAxelraSlide}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'How it started',
					titleSubText: 'Our Journey from 05.2019 - 05.2021',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
