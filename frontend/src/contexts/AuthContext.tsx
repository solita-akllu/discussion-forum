import { createContext, useContext, useState } from "react";
import { Account } from "../types/account";
import { login } from "../services/Authentication";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: Account | null;
  login: (username: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<Account | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (username: string) => {
    try {
      const user = await login({ username });
      console.log(user);
      setUser(user);
      navigate("/topic");
    } catch (error) {
      console.error(error);
      alert("Wrong username or password");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
