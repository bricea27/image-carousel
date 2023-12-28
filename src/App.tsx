import './App.css'
import { Carousel } from './components';
import { useImages } from './hooks'

function App() {
  const { images } = useImages();

  return (
    <main>
      <h1>Image Carousel</h1>
      <Carousel>
        {images.length > 0 && images.map(image => (
          <img key={image.url} width={100} height={100} src={image.url} />
        ))}
      </Carousel>
    </main>
  )
}

export default App
