const ws = new WebSocket("ws://localhost:8000/ws");
const data = {
    message: "create",
    p: "12345",
};
ws.onopen = ()=>{ws.send(JSON.stringify(data))};
ws.onmessage = (m)=>{console.log(m.data)};
