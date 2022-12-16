import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";


function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
     
    </Routes>
    </div>
  );
}

export default App;
