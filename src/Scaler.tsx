import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Container = styled.div<{scale: number}>`
	transform: scale(${(props) => props.scale});
	position: absolute;
	display: flex;
`;

type Props = {
	children: ReactNode;
	scale: number;
};
export const Scaler = ({children, scale}: Props) => {
	return (
		<Container
			scale={scale}
			style={{top: 540, width: 1920, height: 1080, left: 960}}
		>
			{children}
		</Container>
	);
};
