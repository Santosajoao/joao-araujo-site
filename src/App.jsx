import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VideoGallery from './components/VideoGallery'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
export default function App() {
  return (<>
    <Header />
    <main><Hero /><About /><VideoGallery /><Plans /><HowItWorks /><BookingForm /></main>
    <Footer />
  </>)
}
