import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './Components/Signup';
import Home from './Components/Home'
import CreatePost from './Components/CreatePost';
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    
    
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
    </Routes>
    </div>


    </BrowserRouter>
  );
}

export default App;
