// import { Client, Stomp } from "@stomp/stompjs";
// import { over } from "stompjs";
// import SockJS from "sockjs-client/dist/sockjs";
// var stompClient = null;

// //https://medium.com/@samuelgbenga972/building-a-real-time-messaging-app-with-spring-boot-websocket-stompjs-and-react-part-ii-67ac5979c252
// export const connectToWebSocket = () => {
//   let sock = new SockJS("http://localhost:8080/gs-guide-websocket");

//   // we instantiate the stompClient
//   stompClient = over(sock);

//   // finally we connect
//   stompClient.connect({}, onConnected, onError);
// };

// const onConnected = () => {
//   // update user connect to true

//   console.log("connect ws : ");

//   //   // subscribe the public channel
//   //   stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
//   //   stompClient.subscribe(
//   //     "/user/" + userData.username + "/private",
//   //     onPrivateMessageReceived
//   //   );
// };

// // print default error message if connection fail
// const onError = (error) => {
//   console.log(error);
// };

// WebSocketUtils.js
import { Client } from "@stomp/stompjs";
import SockJS, { log } from "sockjs-client/dist/sockjs";
import { over } from "stompjs";
let stompClient = null;

// Fungsi untuk menghubungkan ke WebSocket
export const connectToWebSocket = () => {
  const sock = new SockJS("http://localhost:8080/gs-guide-websocket");
  stompClient = over(sock);

  // Mencoba terhubung
  stompClient.connect({}, onConnected, onError);
  //
};

const onConnected = (frame) => {
  // Isis

  console.log("ini frame : ", frame);

  stompClient.subscribe("/topic/greetings", get);
};

// Fungsi untuk menangani kesalahan koneksi
const onError = (error) => {
  console.log("Error connecting to WebSocket: ", error);
};

const get = (msg) => {
  console.log("gettt ", msg);
};

// Fungsi untuk mengirim pesan
export const sendMessage = (message) => {
  if (stompClient && stompClient.connected) {
    stompClient.send("/app/hello", {}, JSON.stringify(message));
  } else {
    console.error("STOMP client is not connected.");
  }
};

// Fungsi untuk menutup koneksi WebSocket
export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.disconnect(() => {
      console.log("Disconnected from WebSocket");
    });
  }
};
