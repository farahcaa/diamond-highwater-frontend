import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Simon from "./pages/Simon";

function App() {
  return (
    // Default font is Inter
    <div className="font-['Inter']">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Simon />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
