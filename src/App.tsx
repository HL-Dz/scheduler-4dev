import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
