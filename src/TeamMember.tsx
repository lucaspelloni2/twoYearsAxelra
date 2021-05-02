import {Flex, Spacer, SPACING} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';
import {__COLORS} from './theme';
import {BlackSubTitle} from './UI';

const Container = styled.div<{size?: number}>`
	width: ${(props) => props.size ?? 400}px;
	height: ${(props) => props.size ?? 400}px;
	border-radius: 50%;
	border: 5px solid ${__COLORS.AXELRA_LIGHT_BLUE};
	overflow: hidden;
	margin: 0 ${SPACING * 2}px;

`;

const Image = styled(Img)`
	max-width: 100%;
	height: auto;
`;
const Subtitle = styled(BlackSubTitle)`
	color: white;
	font-size: 40px;
`;

export type TeamMemberType = {
	src: any;
	id: string;
	isNew?: boolean;
	role?: string;
	name?: string;
};

type Props = {
	member: TeamMemberType;
	size?: number;
	hasNoName?: boolean;
};
export const TeamMember = ({member, size, hasNoName}: Props) => {
	const {id, src, name} = member;
	return (
		<Flex column justify="center" align="center">
			<Container key={id} size={size}>
				<Image src={src} />
			</Container>
			<Spacer x8 />
			{name && !hasNoName && <Subtitle>{name}</Subtitle>}
		</Flex>
	);
};
