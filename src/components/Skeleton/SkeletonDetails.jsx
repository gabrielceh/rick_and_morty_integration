import React from 'react';

import ImagenSkeleton from '../icons/ImageSkeleton';
import {
	LinesSkeleton,
	SkeletonCardStyled,
	SkeletonDetailMiddleSectionStyled,
	SkeletonDetailsStyled,
	SkeletonGrid,
	SkeletonITemsGridDetail,
	SkeletonImgContStyled,
	SkeletonImgDetailStyled,
	TitleSkeleton,
} from './Skeleton.styled';

function SkeletonDetails() {
	return (
		<SkeletonDetailsStyled>
			<SkeletonImgContStyled>
				<div style={{ margin: '1rem auto' }}>
					<SkeletonImgDetailStyled>
						<ImagenSkeleton className='svg' />
					</SkeletonImgDetailStyled>
				</div>
			</SkeletonImgContStyled>

			<SkeletonDetailMiddleSectionStyled></SkeletonDetailMiddleSectionStyled>

			<SkeletonGrid>
				<SkeletonITemsGridDetail>
					<TitleSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<TitleSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<TitleSkeleton />
				</SkeletonITemsGridDetail>
				<SkeletonITemsGridDetail>
					<TitleSkeleton />
				</SkeletonITemsGridDetail>
			</SkeletonGrid>
		</SkeletonDetailsStyled>
	);
}

export default SkeletonDetails;
