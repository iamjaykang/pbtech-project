import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaptopFinder from "./components/LaptopFinder/LaptopFinderHome";
import LaptopFinderActivities from "./components/LaptopFinder/LaptopFinderActivities";
import LaptopFeatures from "./components/LaptopFinder/LaptopFeatures";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/laptop-finder" element={<LaptopFinder />} />
        <Route
          exact
          path="/laptop-finder/activities"
          element={<LaptopFinderActivities />}
        />
        <Route
          exact
          path="/laptop-finder/activities/features"
          element={<LaptopFeatures />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
