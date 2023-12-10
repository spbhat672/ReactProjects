import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputPage from "./components/InputPage";
import OutputPage from "./components/OutputPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/output" element={<OutputPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
