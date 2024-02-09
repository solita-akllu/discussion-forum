import { createContext, useContext, useEffect, useState } from "react";
import { Account } from "../types/account";
import { login } from "../services/Authentication";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: Account | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<Account | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = window.sessionStorage.getItem("loggedUser");
    if (loggedUser) {
      try {
        const user: Account = JSON.parse(loggedUser);
        if (
          !user ||
          typeof user.id !== "number" ||
          typeof user.name !== "string"
        ) {
          removeUserFromStorage();
          return;
        }
        setUser(user);
        navigate("/topic");
      } catch (error) {
        console.error(error);
        removeUserFromStorage();
      }
    }
  }, []);

  const removeUserFromStorage = () => {
    window.sessionStorage.removeItem("loggedUser");
  };

  const handleLogin = async (username: string) => {
    try {
      const user = await login({ username });
      console.log(user);
      setUser(user);
      navigate("/topic");
      window.sessionStorage.setItem("loggedUser", JSON.stringify(user));
    } catch (error) {
      console.error(error);
      alert("Wrong username or password");
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    removeUserFromStorage();
  };

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
