Create a better HTTP class and subclasses

# Complete Ideas
## Client
```js
class HTTP {
  Client
}

// Sync
const res = HTTP.Client.get("https://www.example.com/")
res.statusCode // 200

// Async?
// Uses generators as an iterative function to provide "streaming" to/as the result.
// Still async but with a little more conventional usage and more flexible.
const res = HTTP.Client.get("https://www.example.com/", res => {
  res.statusCode // 200
})


// Reusable
const client = new HTTP.Client("https://www.example.com/")
const res = client.get("/")
res.statusCode // 200
client.close()
```

# Incomplete Ideas
## Server (nodejs)
```
```
## Websocket
```
```
## WebApp (nodejs)
```js
const app = new WebApp()

// Assuming a get request is sent to '/api/v2/users'
// Using optional template literals to make syntax more lightweight
app.get `/api/:version/users`, ctx => {
  ctx.paramaters.version 
  // 'v2'
}

// assuming '/api/v2/users/v2/id'
// todo: make this make sense
app.get `/api/:version/users`, ctx => {
  ctx.get `/:version/id`, ctx => {
  }
}

// Websocket inspired from https://razecr.com/docs/websockets

// With websockets
// assuming connected to '/api/v2/general' with message 'Hello World!'
app.ws `/api/:version/:room_id`, (ws, ctx) => {
  const { version, room_id } = ctx.paramaters

  ws.on('message', msg => {
    msg // 'Hello World!'
  })
  
  ws.on('close', msg => {
    // socket closed
  })
  
  ws.send("connected to #{room_id}") // 'connected to general'
}
```

