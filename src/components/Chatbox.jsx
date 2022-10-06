import React, { useEffect, useState, useRef } from "react";
import Chat from "./Chat";
import { db } from "../firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";

const colRef = collection(db, "chats");

const q = query(colRef, orderBy("timestamp", "asc"));

const Chatbox = () => {
  const chatsRef = useRef();

  const [chats, setChats] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setChats(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  useEffect(() => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  }, [chats, chatsRef]);

  return (
    <div
      ref={chatsRef}
      className="w-full break-all h-[80%] flex flex-col overflow-y-auto "
    >
      {chats.map((chat, index) => (
        <Chat key={index} chat={chat} />
      ))}
    </div>
  );
};

export default Chatbox;
