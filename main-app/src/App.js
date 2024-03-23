import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PostRegistration from "./pages/Post-Registration/PostRegistration";
import Main from "./pages/Main/Main";
import ErrorPage from "./pages/404/ErrorPage";
import { AuthContext } from "./context/auth-context";



function App() {
  const {currentUser} = useContext(AuthContext); 
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-started" element={<PostRegistration />} />
          <Route path='/error' element={<ErrorPage />} /> 
          <Route
            path="/main"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
