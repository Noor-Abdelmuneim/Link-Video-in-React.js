import Homepage from "./Assets/HomePage";
import Video from "./Assets/Video";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/Video" className="nav-item">Video</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Video" element={<Video />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
