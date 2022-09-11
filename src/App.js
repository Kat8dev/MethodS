import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext"
import ProtextedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route
            path="account"
            element={
              <ProtextedRoute>
                <Account />
              </ProtextedRoute>
            } />
          <Route
            path="/createevent"
            element={
              <ProtextedRoute>
                <CreateEvent />
              </ProtextedRoute>
            } />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App;
