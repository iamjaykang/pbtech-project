import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaptopFinder from "./pages/LaptopFinder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/laptop-finder" element={<LaptopFinder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
