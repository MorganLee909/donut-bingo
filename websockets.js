import randomUUID from "node:crypto";

const games = [];
let p = "12345";

let create = (data)=>{
    if(data.p !== p) return "nope";
    return "yep";
}

export default (wss)=>{
    wss.on("connection", (ws, req)=>{
        ws.on("message", (body)=>{
            const data = JSON.parse(body.toString("utf8"));
            switch(data.message){
                case "create": ws.send(create(data)); break;
            }
        });
    });
}
