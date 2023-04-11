import React from 'react';
import styled from 'styled-components';

import ImagenSkeleton from './icons/ImageSkeleton';

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

const SkeletonDetailsStyled = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			margin-bottom: 1.5rem;
			flex-direction: column;
			gap: 2rem;
			max-width: 1080px;
			max-height: 1080px;
		}
	}

	@media ${({ theme }) => theme.screenSize.laptop} {
		& {
			flex-direction: row;
			gap: 3rem;
		}
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
`;

const SkeletonImgContStyled = styled.div`
	width: 350px;
	height: 350px;
	overflow: hidden;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.slate['400']};
	border: ${({ theme }) => `5px solid ${theme.colors.slate['200']}`};

	& .svg {
		width: 300px;
		height: 300px;
		fill: ${({ theme }) => theme.colors.slate['300']};
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			width: 400px;
			height: 400px;
		}
		& img {
			width: 90%;
		}
	}
`;

const SkeletonBottomStyled = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	padding: 3rem 1rem;
	overflow: auto;
	background-color: ${({ theme }) => theme.colors.slate['500']};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			/* width: 100%; */
			min-height: 100%;
		}
	}

	@media ${({ theme }) => theme.screenSize.laptop} {
		width: 50%;
		min-height: 100%;
	}
`;

const TitleSkeleton = styled.article`
	height: 1.5rem;
	border-radius: 10px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.slate['300']};
`;

const LinesSkeleton = styled.article`
	height: 0.8rem;
	width: 65%;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.slate['300']};
`;
