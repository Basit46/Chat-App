import React, { useState, useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../AuthContext";

const Input = () => {
  const { user } = useAuth();

  const inputRef = useRef();
  const [text, setText] = useState("");

  const addText = async () => {
    inputRef.current.value = "";
    const userId = user?.uid;
    const name = user?.displayName;
    const colRef = collection(db, "chats");
    await addDoc(colRef, {
      username: name,
      userId: userId,
      body: text,
      timestamp: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div className="flex h-[10%] items-center">
      <input
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-full text-black text-[1.3rem] font-[500] outline-none"
        type="text"
      />
      <button onClick={addText} className="bg-green-700 p-1 h-full px-4">
        POST
      </button>
    </div>
  );
};

export default Input;
