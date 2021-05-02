import {Flex, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import Calvin from './assets/team/calvin_guetzli.jpg';
import Jonas from './assets/team/jonas_guetzli.jpg';
import Jonny from './assets/team/jonny_guetzli.jpg';
import {founders} from './FoundingTeam';
import {AxelraSlideWithHeader} from './slides/AxelraSlideWithHeader';
import {TeamMember, TeamMemberType} from './TeamMember';
import {__COLORS} from './theme';

const Divider = styled.div`
	background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0.1));
	width: 7px;
	height: 100%;
	border-radius: 10px;
`;

const jonny: TeamMemberType = {
	id: 'jonny',
	src: Jonny,
	name: 'Jonathan Burger',
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
	}
	return founders;
};

type Props = {
	title: string;
	step: number;
	subtitle: string;
};
export const EmployeeGrowth = ({step, title, subtitle}: Props) => {
	const team = getTeam(step);
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
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
										frame: frame - i * 3 - 20,
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
											<TeamMember hasNoName member={m} size={210} />
										</div>
									);
								})}
						</Flex>
					</Flex>
					<Flex flex={1} />
				</Flex>
				<Divider />
				<Flex column flex={1} justify="center" align="center">
					{team
						.filter((m) => m.isNew)
						.map((m, i) => {
							const spIn = spring({
								fps,
								frame: frame - i * 3 - 50,
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
									<TeamMember member={m} size={400} />
								</div>
							);
						})}
				</Flex>
			</Flex>
		</AxelraSlideWithHeader>
	);
};
