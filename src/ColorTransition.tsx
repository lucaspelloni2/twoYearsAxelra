import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	interpolateColors,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

type Props =
	| {
			type: 'color';
			from: string;
			to: string;
	  }
	| {
			type: 'linear-gradient';
			from: [string, string];
			to: [string, string];
			angle: [number, number];
	  };

export const ColorTransition = (props: Props) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const style: React.CSSProperties = useMemo(() => {
		if (props.type === 'color') {
			return {
				backgroundColor: interpolateColors(
					frame,
					[0, durationInFrames - 1],
					[props.from, props.to]
				),
			};
		}
		if (props.type === 'linear-gradient') {
			return {
				background: `linear-gradient(${interpolate(
					frame,
					[0, durationInFrames - 1],
					props.angle
				)}deg, ${interpolateColors(
					frame,
					[0, durationInFrames - 1],
					[props.from[0], props.to[0]]
				)}, ${interpolateColors(
					frame,
					[0, durationInFrames - 1],
					[props.from[1], props.to[1]]
				)})`,
			};
		}
		throw new Error('this guil');
	}, [durationInFrames, frame, props]);

	return <AbsoluteFill style={style} />;
};
