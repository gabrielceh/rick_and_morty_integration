import ImagenSkeleton from './icons/ImageSkeleton';
import styled from 'styled-components';

function SkeletonCard() {
	return (
		<SkeletonCardStyled>
			<ImagenSkeleton className='svg' />
		</SkeletonCardStyled>
	);
}

export default SkeletonCard;

const SkeletonCardStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
	height: 300px;
	background-color: ${({ theme }) => theme.colors.slate['400']};
	border: ${({ theme }) => `5px solid ${theme.colors.slate['200']}`};
	border-radius: 10px;

	& .svg {
		width: 6rem;
		height: 6rem;
		fill: ${({ theme }) => theme.colors.slate['300']};
	}

	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

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
