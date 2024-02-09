import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { TopicPage } from "./views/TopicPage";
import { useAuthContext } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="h-screen">
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to={user ? "/topic" : "/"} />} />
        {user && (
          <>
            <Route path="/topic" element={<TopicPage />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
