import { Route, Routes } from "react-router-dom";
import { Main } from "./routes/Main";
import Dashboard from "./routes/Dashboard";
import CreateOrder from "./routes/CreateOrder";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-order" element={<CreateOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
