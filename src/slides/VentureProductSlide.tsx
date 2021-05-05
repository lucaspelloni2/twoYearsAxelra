import {Col, Container, Flex, Row} from 'axelra-styled-bootstrap-grid';
import React from 'react';
import {__COLORS} from '../theme';
import {AxelraSlideWithHeader} from './AxelraSlideWithHeader';

type Props = {
	id: 'moflix' | 'sibex' | 'livealytics' | 'fqx' | 'gioia' | 'freya';
};

type ProductSlideProps = {
	images: [{id: string; src: any}];
	firstWordColor: string;
};

export const VentureProductSlide = () => {
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
					<Col style={{background: 'red'}}>
						<Flex>ajosfjoa</Flex>
					</Col>
					<Col xs={0.5}>ajosfjosaf</Col>
				</Row>
			</Container>
		</AxelraSlideWithHeader>
	);
};
