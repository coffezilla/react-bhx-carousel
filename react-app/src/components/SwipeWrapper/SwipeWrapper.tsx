/* eslint-disable */
import { useEffect, useState } from 'react';
import './SwipeWrapper.css';

interface IPropsWrapper {
	children: any;
	customClass?: string;
	column?: 1 | 2 | 3 | 4 | 5 | 6;
	gap?: 0 | 5 | 10 | 15 | 20 | 25 | 30;
	margin?: 0 | 5 | 10 | 15 | 20 | 25 | 30;
	responsiveLimit?: number;
	snap?: boolean;
	fluid?: boolean;
	snapDirection?: 'start' | 'center' | 'end';
	dots?: boolean;
}

interface IPropsItem {
	children: any;
	customClass?: string;
}

export const SwipeWrapper = ({
	children,
	column = 1,
	gap = 5,
	margin = 10,
	snap = false,
	fluid = false,
	responsiveLimit = 700,
	customClass,
	dots = false,
	snapDirection = 'start',
}: IPropsWrapper) => {
	const [currentItem, setCurrentItem] = useState<number>(1); // current item swiped
	const [width, setWidth] = useState<number>(window.innerWidth); // check width size of the window
	const totalChilds = children.length; // total childrens

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		console.log(dots);
		handleWindowSizeChange();
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return width < responsiveLimit ? (
		<>
			<div
				className={`${customClass && customClass} 
        grid-swipe
        grid-swipe--default
        grid-swipe-custom__column--${column}
        grid-swipe-custom__margin--${margin}
        grid-swipe-custom__gap--${gap}
        grid-swipe--snap--${snapDirection}
        ${snap && 'grid-swipe--snap'}
        ${fluid && 'grid-swipe--fluid'}`}
			>
				{children}
			</div>
			<div>
				<SwipeDots totalChilds={totalChilds} />
			</div>
		</>
	) : (
		<div>{children}</div>
	);
};

export const SwipeItem = ({ children, customClass }: IPropsItem) => {
	return <div className={`grid-item  ${customClass && customClass}`}>{children}</div>;
};

export const SwipeDots = ({ totalChilds }: { totalChilds: number }) => {
	// const totalChilds
	// let allDots = totalChilds;
	let htmlDots = [];
	for (let i = 0; i < totalChilds; i++) {
		htmlDots.push(<div className="grid-swipe--dots--item"></div>);
	}

	return (
		<div className="grid-swipe--dots">
			{htmlDots.map((item) => {
				return item;
			})}
		</div>
	);
};
