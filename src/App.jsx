import CountdownTimer from "./components/Timer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast';
import Home from "./components/Home";

function App() {
  
  const handleSubmit = async() => {
    // console.log('Form submitted!');
    toast.success("Form submitted successfully");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" 
        element={<CountdownTimer onSubmit={handleSubmit} />} 
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
