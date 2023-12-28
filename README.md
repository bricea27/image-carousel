# Image Carousel
This repository is my solution to frontendeval's [Image Carousel prompt](https://frontendeval.com/questions/image-carousel).

## Requirements
- [x] Fetch images from the [endpoint](https://www.reddit.com/r/aww/top/.json?t=all)
- [] Cycle to the next image every 3 seconds
- [x] Allow the user to skip to the next/previous image

## Architecture
I wanted to take a moment to think through the component / data structure of this project before implementing any changes. I had several initial thoughts...
Implement a `Carousel` component that would simply render its children. It could then be aware of the active index, and embed the next / previous arrow buttons and associated state logic inside of it. This would prevent any state from needing to be stored up above, so that clicking the next / previous arrows would not cause any re-renders outside of the `Carousel` component.
```
<Carousel>
	{images.map(image => (
		<CarouselImage {...image} />
	))}
</Carousel>
```
The `Carousel` component could also accept an array of objects in the form of an `image` or `data` prop, however I liked the idea of composing the individual children components at the same level for flexibility sake - this API would allow the consumer to render any array of children inside of the `Carousel` component, not just images!

One potential performance concern I can foresee is that thought of rendering every image, even if it's not active. This can be mitigated by only rendering the active child from inside of the `Carousel` component.

As for data fetching, I wanted to store the logic inside of a custom hook, so that it was separate from the component logic. This would also allow me to expose certain helper functions to help deal with the images, if necessary.

## Technologies
For my solution, I've chosen to use [Vite](https://vitejs.dev/guide/) with [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/docs/). Vite is incredibly fast and easy to spin up, and can be easily deployed to [Vercel](https://vercel.com/) for a simple hosting solution.

## Todos
TBD