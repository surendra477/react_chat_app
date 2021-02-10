import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SendIcon from "@material-ui/icons/Send";
import GifIcon from "@material-ui/icons/Gif";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectchannelId, selectchannelName } from "./features/appSlice";
import {db,auth} from "./firebase";
import firebase from "firebase";
import Picker from "emoji-picker-react";
function Chat() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);
  const channelId = useSelector(selectchannelId);
  //const channelName = useSelector(selectchannelName)
  const channelName = "iete";
const [Picker, showPicker] = useState(false)
const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (channelName) {
      db.collection("channels")
        .doc(channelName)
        .collection("messages")
        .orderBy("timestamp")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
       
  }, []);
useEffect(() => {
  
  setTimeout(() => {
    let messageBody = document.getElementById("messageBody");
    let data = messageBody.scrollHeight - messageBody.clientHeight;

    console.log(data);
    messageBody.scrollTop = data;
  }, 100);
})
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(input);
    if(input != ""){
 db.collection("channels").doc(channelName).collection("messages").add({
   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
   message: input,
   user: user,
 });
    }
   
    setinput("");
    setTimeout(() => {
     let messageBody = document.getElementById("messageBody");
     let data = messageBody.scrollHeight - messageBody.clientHeight;
   
     console.log(data);
     messageBody.scrollTop = data;
    }, 100);
      
  };
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  return (
    <div className="chat">
      <ChatHeader channel={channelName} />
      <div className="chat__messages" id="messageBody">
        {messages.map((message, i) => (
          <Message
            key={i}
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
    
      
      <div className="chat__input">
        <EmojiEmotionsIcon fontSize="larger" onClick={() => setOpen(true)} />

        <form>
          <input
            value={input}
            placeholder="Type a message"
            disabled={!channelName}
            onChange={(e) => setinput(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="chat__inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <SendIcon type="submit" onClick={sendMessage} fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
