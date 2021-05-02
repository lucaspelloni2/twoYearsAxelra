import {Composition} from 'remotion';
import './fonts.css';
import {Sequences} from './Sequences';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="DefaultAxelraSlide"
				component={Sequences}
				durationInFrames={2000}
				fps={30}
				width={3840}
				height={2160}
			/>
		</>
	);
};
