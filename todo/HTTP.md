Create a better HTTP class and subclasses

```
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
