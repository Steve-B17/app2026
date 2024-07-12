import './App.css';
import Goals from './Goals.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
import logo from './assets/renewable-energy.svg';
import Video from "./assets/Video 1.mp4";
function App() {
  return (<>
  <header>
  <nav className='navigation'>
  <div> 
  <video autoPlay loop muted
  style={{
      position:'absolute',
      width:'100%',
      top:'50%',
      left:'50%',
      bottom:'50%',
      right:'50%',
      height:'100%',
      objectFit:'cover',
      transform:'translate(-50%,-50%)',
      zIndex:'-100'
    }}>
            <source src={Video} type="video/mp4" />
          </video></div>
  <div className ='logo_container'>
      <img className='logo' src={logo}></img>
      <div> <h1>Eco Gen Forecasts</h1></div></div>
          <ul>
          <a href='#'> Home</a>
          <a href='#'>Features</a>
          <a href='#'>Project Idea</a>
          <a href='#'>Our Goals</a>
          <a href='#'>Contact</a>
        </ul></nav>
      </header>
      <div className='container'>
        <h1>Predicting the Future of Energy Today!!!</h1>
        <p>Empower power generation with precise forecasts. Unlock renewable energy's potential with our innovative tech</p>
      </div>
      <Footer/>
</>);
}

export default App;
