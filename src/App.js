import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import Main from './components/Main';
import { Route,Routes } from 'react-router-dom';
import Players from './components/Players';
import Detail from './components/Detail';
import Contact from './components/Contact';
function App() {
  return (
    <div className='app'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Players/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element="About"></Route>

      </Routes>
      {/* <Main/> */}
      <Footer/>
    </div>
  );
}

export default App;
