import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllReview from "./components/AllReview/AllReview";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-review" element={<AllReview />} />
      </Routes>
    </div>
  );
}

export default App;
