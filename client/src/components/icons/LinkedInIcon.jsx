import * as React from 'react';
const LinkedInICon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={44}
		height={44}
		fill='none'
		stroke='#2c3e50'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={1.5}
		className='icon icon-tabler icon-tabler-brand-linkedin'
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
			rx={2}
		/>
		<path d='M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0' />
	</svg>
);
export default LinkedInICon;
