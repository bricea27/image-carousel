import './App.css'

import { useImages } from './hooks'

function App() {
  const { images } = useImages();

  console.log('IMAGES', images)

  return (
    <main>
      <h1>Image Carousel</h1>
      {images.length > 0 && images.map(image => (
        <img width={100} height={100} src={image.url} />
      ))}
    </main>
  )
}

export default App
