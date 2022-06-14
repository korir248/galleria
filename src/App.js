import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './Components/Signup';
import Home from './Components/Home'
import Footer from './Components/mini/Footer';
import { useSelector } from 'react-redux';
import AuthRoutes from './Components/mini/AuthRoutes';
import Header from './Components/mini/Header'

function App() {
  const {user} = useSelector(state=>state.user)
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    
    
    <Routes>
    
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    {
      user.username ? <AuthRoutes/> : 
      <>
      <p className='error'> Sign Up or Log in to view posts </p>
      
      </>
    }
    </div>

    <Footer/>


    </BrowserRouter>
  );
}

export default App;
