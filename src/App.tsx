import './App.css'
import { Carousel } from './components';
import { useImages } from './hooks'

function App() {
  const { images } = useImages();

  return (
    <Carousel>
      {images.length > 0 && images.map(image => (
        <img key={image.url} src={image.url} />
      ))}
    </Carousel>
  )
}

export default App
