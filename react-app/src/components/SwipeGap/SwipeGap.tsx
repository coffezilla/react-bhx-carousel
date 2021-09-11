import './SwipeGap.css';

interface IPropsGap {
	children: any;
	fullscreen?: boolean;
	column?: number;
	gap?: number;
	responsiveLimit?: number;
	customClass?: string;
}

interface IPropsItem {
	children: any;
	customClass?: string;
}

const SwipeGap = ({
	children,
	fullscreen = false,
	column = 2,
	gap = 10,
	responsiveLimit = 700,
	customClass,
}: IPropsGap) => {
	console.log(responsiveLimit, gap);
	return (
		<div
			className={`${fullscreen ? 'grid-swipe--full' : 'grid-swipe--gap'}  ${
				customClass && customClass
			} grid-col-${column}
      grid-swipe
      grid-swipe--gap-1
      grid-swipe--margin-1
      grid-swipe--default
`}
		>
			{children}
		</div>
	);
};

export const SwipeItem = ({ children, customClass }: IPropsItem) => {
	return <div className={`grid-item  ${customClass && customClass}`}>{children}</div>;
};

export default SwipeGap;
