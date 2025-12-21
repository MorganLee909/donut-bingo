export default (app)=>{
    app.get("/", (req, res)=>{res.sendFile(`${import.meta.dirname}/views/index.html`)});
}
