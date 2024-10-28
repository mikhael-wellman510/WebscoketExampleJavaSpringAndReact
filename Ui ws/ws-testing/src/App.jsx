import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import "./App.css";
import { connectToWebSocket, sendMessage } from "./WebsocketUtils";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connect = async () => {
      await connectToWebSocket();
    };

    connect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ name: JSON.stringify(message) });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>

      <div>Tes</div>
    </>
  );
}

export default App;
