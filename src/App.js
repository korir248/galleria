import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>      
    </Routes>
    </div>


    </BrowserRouter>
  );
}

export default App;
