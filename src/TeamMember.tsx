import {SPACING} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';
import {__COLORS} from './theme';

const Container = styled.div`
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background: red;
	border: 5px solid ${__COLORS.AXELRA_LIGHT_BLUE};
	overflow: hidden;
	margin: 0 ${SPACING * 2}px;
`;

const Image = styled(Img)`
	max-width: 100%;
	height: auto;
`;

type Props = {
	src: any;
};
export const TeamMember = ({src}: Props) => {
	return (
		<Container>
			<Image src={src} />
		</Container>
	);
};
