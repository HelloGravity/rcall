Calling AJAX RPCs easily.  
rcall should be used in the client side along with rdeclare in the server side.

API:
```
rcall(name, args, callback, context)

name - the name of the RPC method.
args - an array of args to send to the RPC method.
callback - a callback to be called with the result. not required.
context - an optional 'this' context that will be used.
```

Example Usage (matching server example exist in rdeclare's readme):
```js
var rcall = require('rcall'); 

/* Call RPC method */
rcall('some_function', ['a', 'b'], function (arg1, arg2) {
    console.log(arg1, arg2);
}, this);
```

