import {Flex} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import Lucas from './assets/team/lucas_guetzli.jpg';
import Peach from './assets/team/peach_guetzli.jpg';
import Sevi from './assets/team/sevi_guetzli.jpg';
import Tom from './assets/team/tom_guetzli.jpg';
import {TeamMember, TeamMemberType} from './TeamMember';

const Container = styled(Flex)`
	width: 100%;
	color: white;
	height: 100%;
`;

export const founders: TeamMemberType[] = [
	{id: 'peach', src: Peach, name: 'Peach Zwyssig'},
	{id: 'tom', src: Tom, name: 'Thomas Bocek'},
	{id: 'lucas', src: Lucas, name: 'Lucas Pelloni'},
	{id: 'sevi', src: Sevi, name: 'Severin Wullschleger'},
];
export const FoundingTeam = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	return (
		<Container column justify="center" align="center">
			<Flex row>
				{founders.map((founder, i) => {
					const spIn = spring({
						fps,
						frame: frame - i * 8 - 20,
						config: {
							damping: 10,
							stiffness: 150,
							mass: 0.3,
						},
					});
					const spOut = spring({
						fps,
						frame: frame - durationInFrames + 30,
						config: {
							damping: 500,
							stiffness: 150,
							mass: 0.3,
						},
					});
					const scale = spIn * (1 - spOut);
					return (
						<div style={{transform: `scale(${scale})`}}>
							<TeamMember key={founder.id} member={founder} />
						</div>
					);
				})}
			</Flex>
		</Container>
	);
};
