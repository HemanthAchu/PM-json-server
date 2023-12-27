const JSONServer = require('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleware = JSONServer.defaults()
const PORT = 3000 || process.env.PORT
MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`mp server started at port:${PORT} and wait for client request`);
})