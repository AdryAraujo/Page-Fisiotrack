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
    </div>
  )
}

export default App
