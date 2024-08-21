import SectionBemVindo from './SectionBemVindo';
import SectionObjetivo from './SectionObjetivo'
import Cards from './Cards';
import SectionEquipe from './SectionEquipe';
import Footer from './Footer';
import './App.css';


function App() {
  
  return(
    <div className='app'>
      <div className='cover-art'></div>
      
      <SectionBemVindo />
      
      <SectionObjetivo />
      
      <Cards/>

      <SectionEquipe />

      <Footer/>

      <p className="creditos">Iustrações por <a href='https://undraw.co' target='_blank'>undraw.co</a> e <a href='https://storyset.com' target='_blank'>storyset.com</a></p>
    </div>
  )
}

export default App
