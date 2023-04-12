import React from 'react';

import ImagenSkeleton from '../icons/ImageSkeleton';
import {
	LinesSkeleton,
	SkeletonBottomStyled,
	SkeletonDetailsStyled,
	SkeletonImgContStyled,
	TitleSkeleton,
} from './Skeleton.styled';

function SkeletonDetails() {
	return (
		<SkeletonDetailsStyled>
			<SkeletonImgContStyled>
				<ImagenSkeleton className='svg' />
			</SkeletonImgContStyled>
			<SkeletonBottomStyled>
				<TitleSkeleton />
				<LinesSkeleton />
				<LinesSkeleton />
				<LinesSkeleton />
				<LinesSkeleton />
			</SkeletonBottomStyled>
		</SkeletonDetailsStyled>
	);
}

export default SkeletonDetails;
