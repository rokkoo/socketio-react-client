import React, { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';

const Socket = () => {
  const [endPoint] = useState('http://127.0.0.1:4001');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket == null) {
      // Get Socket
      const getSocket = async () => {
        await setSocket(socketIo(endPoint));
      };
      getSocket();
    } else {
      const listenSocket = async () => {
        socket.on('FromAPI', data => console.log(data)); // Recived data from server with key 'FromAPI'
      };
      socket.emit('cmd', 'on'); // Sen 'on' string to server
      listenSocket();
    }
  }, [endPoint, socket]);

  return <></>;
};

export default Socket;
