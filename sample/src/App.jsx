import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [stream, setStream] = useState(null);
  const [webSocket, setWebSocket] = useState(null);
  const [videoRef, setVideoRef] = useState(null);
  var ws;
  function startCamera() {
    ws = new WebSocket('ws://127.0.0.1:8000/ws');
    ws.onmessage = function(event) {
    document.getElementById('video').src = 'data:image/jpeg;base64,' + event.data;
    };
  }
  function stopCamera() {
    if(ws) {
      ws.close();
    }
  }
  return (
    <>
      <div>
        <button onClick={startCamera}>Start Stream</button>
      </div>
      <div>
      <img id="video" width="500" height="500"/>
      </div>
      <button onClick={stopCamera}>Stop Streaming</button>
    </>
  );
}

export default App;