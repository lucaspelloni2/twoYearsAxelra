import {Flex} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import styled from 'styled-components';
import Lucas from './assets/team/lucas_guetzli.jpg';
import Peach from './assets/team/peach_guetzli.jpg';
import Sevi from './assets/team/sevi_guetzli.jpg';
import Tom from './assets/team/tom_guetzli.jpg';
import {TeamMember} from './TeamMember';

const Container = styled(Flex)`
	width: 100%;
	height: 100%;
`;

const founders = [
	{id: 'peach', src: Peach},
	{id: 'tom', src: Tom},
	{id: 'lucas', src: Lucas},
	{id: 'sevi', src: Sevi},
];
export const FoundingTeam = () => {
	return (
		<Container column justify="center" align="center">
			<Flex row>
				{founders.map((founder) => {
					return <TeamMember key={founder.id} src={founder.src} />;
				})}
			</Flex>
		</Container>
	);
};
