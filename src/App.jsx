import Navbar from './Navbar';
import SectionBemVindo from './SectionBemVindo';
import SectionObjetivo from './SectionObjetivo'
import SectionDiferencial from './SectionDiferencial';
import SectionEquipe from './SectionEquipe';
import Footer from './Footer';
import './App.css';
import { Carousel } from './Carousel';
import { SectionPitch } from './SectionPitch';


function App() {
  
  return(
    <div className='app'>
      <div className='cover-art'></div>
      
      <Navbar />

      <SectionBemVindo />
      
      <SectionObjetivo />
      <Carousel/>
      <SectionPitch/>
      
      <SectionDiferencial/>

      <SectionEquipe />

      <Footer/>

      <p className="creditos">Iustrações por <a href='https://undraw.co' target='_blank'>undraw.co</a> e <a href='https://storyset.com' target='_blank'>storyset.com</a></p>
    </div>
  )
}

export default App
