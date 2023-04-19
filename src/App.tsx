import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
