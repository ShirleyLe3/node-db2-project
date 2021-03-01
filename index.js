const server = require("./api/server.js")
const router = require("./carRouter");
const PORT = 5000

server.use(router);




server.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})