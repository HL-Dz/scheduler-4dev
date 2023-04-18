import { Routes, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
