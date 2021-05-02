import React from 'react';
import {__COLORS} from './theme';

type Props = {
	color?: string;
} & React.SVGProps<SVGSVGElement>;
export const AxelraLogo = ({color, ...other}: Props) => {
	return (
		<svg
			width="280px"
			height="146px"
			viewBox="0 0 280 146"
			version="1.1"
			{...other}
		>
			<title>axelra</title>
			<defs>
				<linearGradient x1="0%" y1="100%" x2="0%" y2="0%" id="linearGradient-1">
					<stop stopColor="#009BFA" offset="0%" />
					<stop stopColor="#00B4DD" offset="50%" />
					<stop stopColor="#00D3BC" offset="100%" />
				</linearGradient>
			</defs>
			<g
				id="Page-1"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="1"
					transform="translate(-820.000000, -278.000000)"
					fillRule="nonzero"
				>
					<g id="axelra" transform="translate(820.000000, 278.000000)">
						<path
							d="M23.1875,107.386364 L17.0625,107.386364 L0,145.568182 L7,145.568182 L20.125,115.196281 L33.25,145.568182 L40.25,145.568182 L23.1875,107.386364 Z M150.0625,107.386364 L150.0625,145.568182 L176.75,145.568182 L176.75,139.493802 L156.625,139.493802 L156.625,107.386364 L150.0625,107.386364 Z M87.5,145.568182 L73.5,126.043388 L87.0625,107.386364 L79.1875,107.386364 L69.5625,120.836777 L59.9375,107.386364 L52.0625,107.386364 L65.625,126.043388 L51.625,145.568182 L59.5,145.568182 L69.5625,131.25 L79.625,145.568182 L87.5,145.568182 Z M132.125,107.386364 L103.6875,107.386364 L103.6875,145.568182 L132.125,145.568182 L132.125,139.493802 L110.25,139.493802 L110.25,129.514463 L132.125,129.514463 L132.125,123.440083 L110.25,123.440083 L110.25,113.460744 L132.125,113.460744 L132.125,107.386364 Z M214.375,130.816116 C217.173253,130.228891 219.749731,128.876147 221.8125,126.911157 C223.5465,124.841634 224.477504,122.225591 224.4375,119.535124 C224.4375,117.799587 224,116.06405 223.5625,114.328512 C222.164576,111.271518 219.418325,109.02859 216.125,108.254132 C214.375,107.820248 212.1875,107.386364 210,107.386364 L192.9375,107.386364 L192.9375,145.568182 L199.5,145.568182 L199.5,132.117769 L207.8125,132.117769 L217.4375,145.568182 L225.3125,145.568182 L214.375,130.816116 Z M217.875,119.969008 C217.875,122.13843 217,123.440083 215.6875,124.741736 C214.375,126.043388 212.1875,126.477273 210,126.477273 L199.9375,126.477273 L199.9375,113.460744 L210,113.460744 C212.625,113.460744 214.375,113.894628 215.6875,115.196281 C217,116.497934 217.875,117.799587 217.875,119.969008 Z M263.375,107.386364 L256.375,107.386364 L238.4375,145.568182 L246.75,145.568182 L259.875,115.196281 L272.5625,145.568182 L280,145.568182 L263.375,107.386364 Z"
							id="Shape"
							fill={color ?? __COLORS.AXELRA_DARK_BLUE}
						/>
						<path
							d="M177.845807,59.7651515 L166.524295,77.5214646 L189.602763,77.5214646 L177.845807,59.7651515 Z M160.863538,26.8510101 L144.752155,51.969697 L160.428096,74.0568182 L190.909091,26.4179293 L160.863538,26.8510101 Z M139.526842,0 L89.8863636,77.9545455 L119.061031,77.9545455 L154.331897,22.520202 L139.526842,0 Z"
							id="Shape"
							fill="url(#linearGradient-1)"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};
