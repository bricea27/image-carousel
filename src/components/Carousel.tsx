import React, { useState } from 'react';

import './Carousel.css'

interface Props {
	children: React.ReactNode
}

export const Carousel = (props: Props) => {
	const children = React.Children.toArray(props.children);

	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelectPrevious = () => {
		setActiveIndex(currentIndex => {
			if (currentIndex === 0) {
				return children.length - 1;
			}
			return currentIndex - 1;
		});
	}

	const handleSelectNext = () => {
		setActiveIndex(currentIndex => {
			if (currentIndex === children.length - 1) {
				return 0;
			}
			return currentIndex + 1;
		});
	}

	return (
		<section>
			<button onClick={handleSelectPrevious}>&#9664;</button>
			{children.find((_, index) => index === activeIndex)}
			<button onClick={handleSelectNext}>&#9654;</button>
		</section>
	)
}	