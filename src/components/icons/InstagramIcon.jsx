import * as React from 'react';
const InstagramIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={44}
		height={44}
		fill='none'
		stroke='#2c3e50'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={1.5}
		className='icon icon-tabler icon-tabler-brand-instagram'
		viewBox='0 0 24 24'
		{...props}>
		<path
			stroke='none'
			d='M0 0h24v24H0z'
		/>
		<rect
			width={16}
			height={16}
			x={4}
			y={4}
			rx={4}
		/>
		<circle
			cx={12}
			cy={12}
			r={3}
		/>
		<path d='M16.5 7.5v.001' />
	</svg>
);
export default InstagramIcon;
