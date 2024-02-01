import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/Login";

const App = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
