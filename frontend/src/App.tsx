import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { TopicPage } from "./views/TopicPage";

const App = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/topic" element={<TopicPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
