import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Players from './components/Players';
import Footer from './components/Footer';
function App() {
  return (
    <div className='app'>
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  );
}

export default App;
