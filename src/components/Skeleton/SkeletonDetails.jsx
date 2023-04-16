import React from 'react';

import ImagenSkeleton from '../icons/ImageSkeleton';
import {
	LinesSkeleton,
	SkeletonCardStyled,
	SkeletonDetailsStyled,
	SkeletonGrid,
	SkeletonITemsGridDetail,
	SkeletonImgContStyled,
} from './Skeleton.styled';

function SkeletonDetails() {
	return (
		<SkeletonDetailsStyled>
			<SkeletonImgContStyled>
				<ImagenSkeleton className='svg' />
			</SkeletonImgContStyled>
			<SkeletonGrid>
				<SkeletonITemsGridDetail>
					<LinesSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<LinesSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<LinesSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<LinesSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<LinesSkeleton />
				</SkeletonITemsGridDetail>
			</SkeletonGrid>
			<div style={{ marginBottom: '2rem' }}>
				<SkeletonCardStyled>
					<ImagenSkeleton className='svg' />
				</SkeletonCardStyled>
			</div>
		</SkeletonDetailsStyled>
	);
}

export default SkeletonDetails;
