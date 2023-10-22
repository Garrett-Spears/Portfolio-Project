import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Nav/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
