import './App.css'

import { useImages } from './hooks'

function App() {
  const { images } = useImages();

  console.log('IMAGES', images)

  return (
    <main>
      <h1>Image Carousel</h1>
    </main>
  )
}

export default App
