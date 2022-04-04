import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="review" element={<Review />}></Route>
      </Routes>
    </div>
  );
}

export default App;
