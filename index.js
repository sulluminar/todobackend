//1) import json-server
const jsonServer = require('json-server');

// 2 create json server
const todoServer = jsonServer.create();

// 3 create a connection to db.json. It uses a method named router
const router = jsonServer.router('db.json');

// 4 create a middleware
const middleware=jsonServer.defaults();

//5 use this middleware
todoServer.use(middleware)
todoServer.use(router)

const port = 5000;

todoServer.listen(port,()=>{
    console.log(`Server is up and running in port ${port}`)
})
