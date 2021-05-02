import {SPACING} from 'axelra-styled-bootstrap-grid';
import styled, {css} from 'styled-components';

export const BlackTitle = styled.h1`
	color: black;
	text-transform: uppercase;
	font-size: 72px;
	font-family: 'Avenir Bold';
	margin: 0;
`;

export const BlackSubTitle = styled.h1`
	color: black;
	font-size: 72px;
	font-weight: 100;
	margin: 0;
	font-family: 'Avenir Regular';
`;

export const DEFAULT_PADDING = css`
	padding: ${SPACING * 6}px;
`;
