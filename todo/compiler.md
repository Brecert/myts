Javascript is pretty great.

Metaprogramming is fun in it and it has some wild and weird features.

However syntax is a little hard on the fingers and can be a little weird to read at times.

The javascript syntax in general though is (mostly) pleasent.

However there are parts of it that could be worked on.

This compiler attempts fix them.

function definitions are renamed to a compiler option (usually fn or def)

It's a very small change that would save a lot of keystrokes and time

I personally like def as all the keys are close together
```
def stuff() {}

def* stuff() {}

fn stuff() {}

fn* generator() {}
```

Another problem with with javascript are the callbacks.

While less common now with promises, async and await, they are still commonly used.

Blocks should be sometimes that flows
```
// from
// using the url for nosie
client.get("https://example.com/", (res, ctx) => {
  // stuff
})

// to
client.get("https://example.com/") => (res, ctx) {
  // stuff
}

// or using function (can be function, or funtion renamed)
client.get("https://example.com/") do (res, ctx) {
  // stuff
}
```

while it doesn't change a ton, it's a little more fluid to write.

A third (and optional) change would be to make `()` optional for functions with arguments

While having `(arg, arg2)` does keep consistency and sometimes readabilty, it can waste time writing, especially for trivial operations

```
// from
console.log("Hello World!")

// to
console.log "Hello World!"
```

This can work well with certain blocks
```
// from
onlyCallback(() => {
})

onlyArg((arg) => {
})

// to 
onlyCallback => {
}

onlyArg => arg {
}
```

But not others
```
// too much noise and open and close not visible
client.get "https://example.com/", {query: "where am i"} do res, ctx {
}
```
