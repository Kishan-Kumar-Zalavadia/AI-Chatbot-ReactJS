import { useRef } from "react";
const ChatForm = ({setChatHistory}) => {
  const inputRef = useRef();

  const handleFormSumbit = (e) =>{
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage)
      return;
    inputRef.current.value = "";
    setChatHistory((history) => [...history, {role: "user", text: userMessage}]);
  }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSumbit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="message.."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
}

export default ChatForm