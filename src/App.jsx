import { Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import StyledHomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StyledHomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
        
    </div>
  );
}

export default App;
