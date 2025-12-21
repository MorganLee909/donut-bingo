const games = [];

export default (wss)=>{
    wss.on("connection", (ws, req)=>{
        ws.on("message", (data)=>{
            console.log(data);
        });
    });
}
