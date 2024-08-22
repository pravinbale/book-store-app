import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogOut = () => {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("Users");
      toast.success("Logout was successful!!!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 1000);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogOut}
        className="py-2 px-3 bg-red-500 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
