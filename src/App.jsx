import React from "react";
import Chatbox from "./components/Chatbox";
import Input from "./components/Input";
import { useAuth } from "./AuthContext";
import GoogleButton from "react-google-button";

function App() {
  const { user, signIn, logout } = useAuth();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[aqua]">
      <div className="h-[80%] w-[95%] sm:w-[400px] border-black border-2 bg-black text-white">
        <nav className="h-[10%] flex justify-between items-center bg-[tomato]">
          <h1 className="font-bold text-[1.7rem]">Chat Room</h1>{" "}
          {user == null && <GoogleButton onClick={signIn} className="h-full" />}
          {user != null && (
            <div
              onClick={logout}
              className="cursor-pointer text-[1.4rem] mr-1 font-bold"
            >
              Sign Out
            </div>
          )}
        </nav>
        <Chatbox />
        <Input />
      </div>
    </div>
  );
}

export default App;
