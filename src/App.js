
import './App.css';
import Login from './client/Login';
import Register from './client/Register';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>   
    </div>
  ); 
}

export default App;
