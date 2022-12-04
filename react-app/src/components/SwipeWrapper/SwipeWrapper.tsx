/* eslint-disable */
import { useEffect, useState, useRef } from 'react';
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
	hasDots?: boolean;
	id?: string;
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
	hasDots = false,
	id,
	snapDirection = 'start',
}: IPropsWrapper) => {
	const [currentItem, setCurrentItem] = useState<number>(1); // current item swiped
	const [foo, setFoo] = useState<number>(1); // current item swiped
	const [width, setWidth] = useState<number>(window.innerWidth); // check width size of the window
	const totalChildren = children.length; // total childrens
	const refCarousel = useRef<any>();

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	const handleScrollSwipe = () => {
		if (hasDots) {
			// setFoo(refCarousel.current.scrollLeft.toFixed());

			for (let i = 0; i < totalChildren; i++) {
				if (
					refCarousel.current.scrollLeft >= ((width - (margin * 2 - gap)) * i) / column - 1 &&
					refCarousel.current.scrollLeft <= ((width - (margin * 2 - gap)) * i) / column + 1
				) {
					setCurrentItem(() => i + 1);
				}
			}
		}
	};

	useEffect(() => {
		// console.log(dots);
		handleWindowSizeChange();
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return width < responsiveLimit ? (
		<>
			<div
				ref={refCarousel}
				onScroll={handleScrollSwipe}
				id={id}
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
			{hasDots && (
				<SwipeDots totalChildren={totalChildren} column={column} currentItem={currentItem} />
			)}

			{/* <div>{currentItem}</div>
			<div>{width}</div>
			<div>{foo}</div> */}
		</>
	) : (
		<div>{children}</div>
	);
};

export const SwipeItem = ({ children, customClass }: IPropsItem) => {
	return <div className={`grid-item  ${customClass && customClass}`}>{children}</div>;
};

// not fluid
// not centered
// only mobile
export const SwipeDots = ({
	totalChildren,
	column,
	currentItem,
}: {
	totalChildren: number;
	column: number;
	currentItem: number;
}) => {
	// const totalChildren
	const totalDots = totalChildren - (column - 1);
	let htmlDots = [];
	for (let i = 0; i < totalDots; i++) {
		htmlDots.push(
			<div
				className={`grid-swipe--dots--item ${
					i === currentItem - 1 ? 'grid-swipe--dots--item__active' : 'grid-swipe--dots--item__idle'
				}`}
			></div>,
		);
	}

	return (
		<div className="grid-swipe--dots">
			{htmlDots.map((item) => {
				return item;
			})}
		</div>
	);
};
