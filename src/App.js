import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Review from "./components/Review/Review";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="review" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
