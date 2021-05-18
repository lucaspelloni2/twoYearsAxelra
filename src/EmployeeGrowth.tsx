import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import Calvin from './assets/team/calvin_guetzli.jpg';
import Daniela from './assets/team/daniela_guetzli.jpg';
import David from './assets/team/david_guetzli.jpg';
import Fra from './assets/team/francesca_guetzli.jpg';
import Ile from './assets/team/ile_guetzli.jpg';
import Jonas from './assets/team/jonas_guetzli.jpg';
import Jonny from './assets/team/jonny_guetzli.jpg';
import Manuel from './assets/team/manuel_g_guetzli.jpg';
import Nico from './assets/team/nico_guetzli.jpg';
import {founders} from './FoundingTeam';
import {AxelraSlideWithHeader} from './slides/AxelraSlideWithHeader';
import {TeamMember, TeamMemberType} from './TeamMember';
import {__COLORS} from './theme';

const Divider = styled.div`
	background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0.1));
	width: 7px;
	border-radius: 10px;
`;

const jonny: TeamMemberType = {
	id: 'jonny',
	src: Jonny,
	name: 'Jonny Burger',
	role: 'Full Stack Developer',
};

const calvin: TeamMemberType = {
	id: 'calvin',
	src: Calvin,
	name: 'Calvin Falter',
	role: 'Full Stack Developer',
};

const jonas: TeamMemberType = {
	id: 'jonas',
	src: Jonas,
	name: 'Jonas Brunner',
	role: 'Full Stack Developer',
};

const nico: TeamMemberType = {
	id: 'nico',
	src: Nico,
	name: 'Nicolas Gordillo',
	role: 'Full Stack Developer',
};

const ile: TeamMemberType = {
	id: 'ile',
	src: Ile,
	name: 'Ile Cepilov',
	role: 'Full Stack Developer',
};

const manuel: TeamMemberType = {
	id: 'manu',
	src: Manuel,
	name: 'Manuel Grossmann',
	role: 'Full Stack Developer',
};

const david: TeamMemberType = {
	id: 'david',
	src: David,
	name: 'David Duran',
	role: 'Full Stack Developer',
};

const fra: TeamMemberType = {
	id: 'manu',
	src: Fra,
	name: 'Francesca Monzeglio',
	role: 'Data Scientist',
};

const daniela: TeamMemberType = {
	id: 'fra',
	src: Daniela,
	name: 'Daniela Brügger',
	role: 'Venture Investmetn Coach',
};

const getTeam = (step: number): TeamMemberType[] => {
	if (step === 1) {
		return [...founders, {isNew: true, ...jonny}];
	} else if (step === 2) {
		return [
			...founders,
			jonny,
			...[
				{isNew: true, ...calvin},
				{isNew: true, ...jonas},
			],
		];
	} else if (step === 3) {
		return [
			...founders,
			jonny,
			calvin,
			jonas,
			...[
				{isNew: true, ...nico},
				{isNew: true, ...ile},
			],
		];
	} else if (step === 4) {
		return [
			...founders,
			jonny,
			calvin,
			jonas,
			nico,
			ile,
			...[
				{isNew: true, ...manuel},
				{isNew: true, ...david},
			],
		];
	} else if (step === 5) {
		return [
			...founders,
			jonny,
			calvin,
			jonas,
			nico,
			ile,
			manuel,
			david,
			...[
				{isNew: true, ...fra},
				{isNew: true, ...daniela},
			],
		];
	}
	return founders;
};

type Props = {
	title: string;
	step: number;
	subtitle: string;
	sizeOldEmployees?: number;
	sizeNewEmployees?: number;
};
export const EmployeeGrowth = ({
	step,
	title,
	subtitle,
	sizeOldEmployees,
	sizeNewEmployees,
}: Props) => {
	const team = getTeam(step);
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const height = interpolate(
		frame,
		[30, 46, durationInFrames - 15, durationInFrames - 5],
		[0, 100, 100, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AxelraSlideWithHeader
			title={title}
			subtitle={subtitle}
			titleColor={__COLORS.WHITE}
			backgroundColor={__COLORS.AXELRA_DARK_BLUE}
			logoColor={__COLORS.WHITE}
		>
			<Flex row flex={1}>
				<Flex row flex={1}>
					<Flex flex={1} />
					<Flex column flex={6} justify="center" align="center">
						<Spacer x10 />
						<Flex row wrap justify="center" align="center">
							{team
								.filter((m) => !m.isNew)
								.map((m, i) => {
									const spIn = spring({
										fps,
										frame: frame - i * 3 - 30,
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
											<TeamMember
												hasNoName
												member={m}
												size={sizeOldEmployees ?? 210}
											/>
										</div>
									);
								})}
						</Flex>
					</Flex>
					<Flex flex={1} />
				</Flex>
				<Divider style={{height: `${height}%`}} />
				<Flex column flex={1} justify="center" align="center">
					{team
						.filter((m) => m.isNew)
						.map((m, i) => {
							const spIn = spring({
								fps,
								frame: frame - i * 3 - 55,
								config: {
									damping: 10,
									stiffness: 150,
									mass: 0.6,
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
									<TeamMember member={m} size={sizeNewEmployees ?? 400} />
								</div>
							);
						})}
				</Flex>
			</Flex>
		</AxelraSlideWithHeader>
	);
};
