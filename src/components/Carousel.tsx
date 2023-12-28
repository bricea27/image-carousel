import React, { useCallback, useEffect, useState } from 'react';

import './Carousel.css'

interface Props {
	children: React.ReactNode
}

export const Carousel = (props: Props) => {
	const children = React.Children.toArray(props.children);

	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelectPrevious = useCallback(() => {
		setActiveIndex(() => {
			if (activeIndex === 0) {
				return children.length - 1;
			}
			return activeIndex - 1;
		});
	}, [activeIndex, children.length])

	const handleSelectNext = useCallback(() => {
		setActiveIndex(() => {
			if (activeIndex === children.length - 1) {
				return 0;
			}
			return activeIndex + 1;
		});
	}, [activeIndex, children.length])

	useEffect(() => {
		const timer = setTimeout(() => {
			handleSelectNext();
		}, 3000);

		return () => clearTimeout(timer);
	}, [children.length, handleSelectNext])

	return (
		<section>
			<button onClick={handleSelectPrevious}>&#9664;</button>
			{children.find((_, index) => index === activeIndex)}
			<button onClick={handleSelectNext}>&#9654;</button>
		</section>
	)
}	