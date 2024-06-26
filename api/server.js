const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}))
server.use(router)

const port = process.env.PORT || 3030

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})

module.exports = server