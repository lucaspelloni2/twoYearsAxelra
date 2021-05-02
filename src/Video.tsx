import {Composition} from 'remotion';
import './fonts.css';
import {Sequences} from './Sequences';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="DefaultAxelraSlide"
				component={Sequences}
				durationInFrames={400}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
