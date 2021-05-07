import {Col, Container, Flex, Row, Spacer} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import styled from 'styled-components';
import Swype1 from '../assets/ventures/swype/swype_1.svg';
import Swype2 from '../assets/ventures/swype/swype_2.svg';
import Swype3 from '../assets/ventures/swype/swype_3.svg';
import {__COLORS} from '../theme';
import {BlackSubTitle, BlackTitle} from '../UI';
import {AxelraSlideWithHeader} from './AxelraSlideWithHeader';
type Props = {
	id: 'moflix' | 'sibex' | 'livealytics' | 'fqx' | 'gioia' | 'freya';
};

type ProductSlideProps = {
	images: {id: string; src: any}[];
	firstWordColor: string;
	smallTitle: string;
	description: string;
	ventureName: string;
};

const Title = styled(BlackTitle)`
	color: white;
	text-transform: initial;
`;
const Subtitle = styled(BlackSubTitle)`
	font-size: 40px;
	color: white;
`;

const getElements = ({id}: Props): ProductSlideProps | null => {
	switch (id) {
		case 'moflix':
			return {
				firstWordColor: '#FF0042',
				images: [
					{id: 'swype1', src: Swype1},
					{id: 'swype2', src: Swype2},
					{id: 'swype3', src: Swype3},
				],
				ventureName: 'Swype',
				smallTitle: 'with Axelra in 112 Days',
				description:
					'The first app-based mobile subscription platform in Switzerland offering a 100% digital customer experience. ',
			};
		case 'sibex':
			return null;
		case 'livealytics':
			return null;
		case 'fqx':
			return null;
		case 'gioia':
			return null;
		case 'freya':
			return null;
		default:
			throw new Error('venture not implemented');
	}
};

export const VentureProductSlide = ({id}: Props) => {
	const {
		smallTitle,
		ventureName,
		images,
		firstWordColor,
		description,
	} = getElements({id}) as ProductSlideProps;
	return (
		<AxelraSlideWithHeader
			title=""
			subtitle=""
			backgroundColor="linear-gradient(180deg, #464D5B 0%, #2A2F3B 100%)"
			logoColor={__COLORS.WHITE}
		>
			<Container fluid style={{height: '100%'}}>
				<Row flex={1} style={{height: '100%'}}>
					<Col xs={0.5}>ajosfjosaf</Col>
					<Col>
						<Flex row flex={1} style={{height: '100%'}}>
							<Flex column flex={1} justify="center">
								<Flex row align="center">
									<Subtitle>
										<span style={{color: firstWordColor}}>{ventureName} </span>
										{smallTitle}
									</Subtitle>
								</Flex>
								<Spacer x3 />
								<Title>
									{description?.charAt(0) + description?.slice(1).toLowerCase()}
								</Title>
							</Flex>
							<Flex flex={1}>askofajosfoasfjoasfjo</Flex>
						</Flex>
					</Col>
					<Col xs={0.5}>ajosfjosaf</Col>
				</Row>
			</Container>
		</AxelraSlideWithHeader>
	);
};
