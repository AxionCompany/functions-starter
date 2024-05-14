// This is an example of an endpoint that only returns 'hello world'. 
// The 'default entrypoint is 'main', but can be changed by setting DIR_ENTRYPOINT environment variable.
// Example setting entrypoint to index.js as in node.js. In .env , add: `DIR_ENTRYPOINT=index`.

export default () => {
    return 'Hello World';
}

// Test it in browser:
// http://localhost:8001/helloworld