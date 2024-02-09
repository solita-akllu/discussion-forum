import { useAuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <div className="flex w-screen items-center justify-between bg-gray-400 p-4">
      <span className="text-xl font-bold">Logged in as: {user?.name}</span>
      <button
        onClick={logout}
        className="mr-5 rounded-md bg-gray-500 p-2 hover:bg-gray-600"
      >
        Sign out
      </button>
    </div>
  );
};
