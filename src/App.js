import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AddQuestion from "./components/AddQuestion";
import StartGame from "./components/StartGame";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{
        minHeight: "100vh",
        backgroundColor: "#5555ab",
      }}
    >
      <div
        className="w-100 rounded my-3 shadow-lg"
        style={{
          maxWidth: "600px",
          backgroundColor: "#181831",
        }}
      >
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-question"
                element={
                  <PrivateRoute>
                    <AddQuestion />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/start-game" element={<StartGame />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
