import Navbar from './components/layouts/Navbar';
import BodyContainer from './components/layouts/BodyContainer';
import Footer from './components/layouts/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BodyContainer/>
      <Footer/>
    </div>
  );
}

export default App;
