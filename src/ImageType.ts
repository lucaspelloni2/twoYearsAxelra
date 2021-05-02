import {CSSProperties} from 'react';

export type PartialImageType = {
	src: any;
} & CSSProperties;

export type ImageType = PartialImageType & {id: string; position: string};

export const createImage = ({...image}: PartialImageType): ImageType => ({
	position: 'absolute',
	id: String(Math.random()),
	...image,
});
