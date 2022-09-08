import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Mint from './components/Mint';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='bg min-h-screen'>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mint' element={<Mint />} />
          {/* <Route path='/my-items' element={} />
          <Route path='/my-nfts' element={} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
