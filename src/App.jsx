import Home from "./usercomponents/Home";
import Login from "./usercomponents/Login";
import Navbar from "./usercomponents/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./usercomponents/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
