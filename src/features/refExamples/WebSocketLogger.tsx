import { useEffect, useRef } from "react";

export const WebSocketLogger = () => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://echo.websocket.org");
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const incomingText = event.data;
      console.log("Новое сообщение от сервера:", incomingText);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, []);

  return <div>WebSocket Logger подключен</div>;
};
