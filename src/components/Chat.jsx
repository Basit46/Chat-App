import React from "react";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../AuthContext";

const Chat = ({ chat }) => {
  const { user } = useAuth();

  const idToUse = user?.uid;
  const docRef = doc(db, "chats", "basit46");
  const deleteText = () => {
    deleteDoc(docRef);
  };
  return (
    <div
      onClick={deleteText}
      className={`w-fit ${
        idToUse
          ? chat.userId === idToUse && "self-end flex flex-col items-end"
          : ""
      } text-right mb-1 cursor-pointer `}
    >
      <p className="w-fit">{chat.username}</p>
      <div
        className={`bg-white text-black w-fit p-2 rounded-2xl ${
          idToUse
            ? chat.userId === idToUse
              ? "rounded-br-none"
              : "rounded-bl-none"
            : "rounded-bl-none"
        }
        }`}
      >
        {chat.body}
      </div>
    </div>
  );
};

export default Chat;
