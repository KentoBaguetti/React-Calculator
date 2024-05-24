import Navbar from "./components/Navbar";
import BasicCalculator from "./components/BasicCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<BasicCalculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
