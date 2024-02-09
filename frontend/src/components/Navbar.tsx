import { useAuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { logout } = useAuthContext();

  return (
    <div className="flex w-screen justify-end bg-gray-400 p-4">
      <button
        onClick={logout}
        className="mr-5 rounded-md bg-gray-500 p-2 hover:bg-gray-600"
      >
        Sign out
      </button>
    </div>
  );
};
