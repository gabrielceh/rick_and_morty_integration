import styled from 'styled-components';

export const SkeletonCardStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
	height: 300px;
	background-color: ${({ theme }) => theme.colors.slate['400']};
	border: ${({ theme }) => `5px solid ${theme.colors.slate['200']}`};
	border-radius: 10px;
	overflow: hidden;

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

export const SkeletonImgDetailStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 150px;
	background-color: ${({ theme }) => theme.colors.slate['400']};
	border: ${({ theme }) => `5px solid ${theme.colors.slate['200']}`};
	border-radius: 50%;
	overflow: hidden;

	& .svg {
		width: 6rem;
		height: 6rem;
		fill: ${({ theme }) => theme.colors.slate['300']};
	}

	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	@media ${({ theme }) => theme.screenSize.tablet} {
		width: 250px;
		height: 250px;
		min-height: 250px;
		max-height: 250px;
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

export const SkeletonDetailsStyled = styled.div`
	max-width: 850px;
	margin: 0 auto;
	border-radius: 20px;
	overflow: hidden;
	border: ${({ theme }) => `10px solid ${theme.colors.slate['100']}`};

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

export const SkeletonImgContStyled = styled.div`
	width: 100%;
	max-width: 1980px;
	height: 350px;
	min-height: 320px;
	max-height: 350px;
	overflow: hidden;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.slate['400']};
	border: ${({ theme }) => `1px solid ${theme.colors.slate['200']}`};

	& .svg {
		width: 300px;
		height: 300px;
		fill: ${({ theme }) => theme.colors.slate['300']};
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			height: 450px;
			min-height: 450px;
			max-height: 450px;
		}
		& img {
			width: 90%;
		}
	}
`;

export const SkeletonBottomStyled = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	max-height: 345px;
	padding: 3rem 1rem;
	overflow: auto;
	background-color: ${({ theme }) => theme.colors.slate['500']};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

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

export const TitleSkeleton = styled.div`
	height: 1.5rem;
	border-radius: 10px;
	width: 100%;
	min-width: 200px;
	background-color: ${({ theme }) => theme.colors.slate['300']};
`;

export const LinesSkeleton = styled.div`
	height: 0.8rem;
	width: 65%;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.slate['300']};
`;

export const SkeletonDetailMiddleSectionStyled = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	height: 116px;
	background-color: ${({ theme }) => theme.colors.slate['300']};
	transition: background-color 0.5s ease-in-out;
	border-top: ${({ theme }) => `2px solid ${theme.colors.slate['100']}`};
	border-bottom: ${({ theme }) => `2px solid ${theme.colors.slate['100']}`};
`;

export const SkeletonGrid = styled.section`
	width: 100%;
	display: grid;
	justify-items: center;
	@media ${({ theme }) => theme.screenSize.tablet} {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}
`;

export const SkeletonITemsGridDetail = styled.article`
	display: grid;
	place-content: center;
	width: 100%;
	height: 120px;
	background-color: ${({ theme }) => theme.colors.slate['500']};

	& div {
		width: 100px;
	}
	@media ${({ theme }) => theme.screenSize.tablet} {
		height: 200px;
	}
`;
