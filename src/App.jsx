import React, { useEffect } from "react";
import Chatbox from "./components/Chatbox";
import Input from "./components/Input";
import { useAuth } from "./AuthContext";

function App() {
  const { user, signIn, logout } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[aqua]">
      <div className="h-[80%] w-[95%] sm:w-[400px] border-black border-2 bg-black text-white">
        <nav className="h-[10%] flex justify-between items-center bg-[tomato] p-1">
          <h1 className="font-bold text-[2rem]">Chat Room</h1>{" "}
          {!user && (
            <div
              onClick={signIn}
              className="bg-blue-700 cursor-pointer px-2 py-1 text-[1.1rem]"
            >
              Sign In With Google
            </div>
          )}
          {user && <div onClick={logout}>Sign Out</div>}
        </nav>
        <Chatbox />
        <Input />
      </div>
    </div>
  );
}

export default App;
