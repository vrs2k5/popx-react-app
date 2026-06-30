import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
