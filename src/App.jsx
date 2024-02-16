import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from "./components/Home";
import HomePage from './components/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
