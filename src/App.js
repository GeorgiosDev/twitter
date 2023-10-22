import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Widgets from './Components/Widgets';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from "./pages/Signup"
import LogIn from "./pages/LogIn"


function App() {
  return (
    <AuthContextProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/account" element={<Home />} />
              <Route path="/widgets" element={<Widgets />} />
            </Routes>
          </div>
        </BrowserRouter>
    </AuthContextProvider>
  
  );
}

export default App;
