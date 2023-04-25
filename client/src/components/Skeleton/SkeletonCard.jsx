import ImagenSkeleton from '../icons/ImageSkeleton';
import styled from 'styled-components';
import { SkeletonCardStyled } from './Skeleton.styled';

function SkeletonCard() {
	return (
		<SkeletonCardStyled>
			<ImagenSkeleton className='svg' />
		</SkeletonCardStyled>
	);
}

export default SkeletonCard;
