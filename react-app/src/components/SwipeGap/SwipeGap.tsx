import './SwipeGap.css';

interface IPropsGap {
	children: any;
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
	column = 2,
	gap = 10,
	responsiveLimit = 700,
	customClass,
}: IPropsGap) => {
	console.log(responsiveLimit, gap);
	return (
		<div
			className={`${customClass && customClass} grid-col-${column}
      grid-swipe
      grid-swipe--default
      grid-swipe--snap

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
