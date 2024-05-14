// This is an example of an endpoint consuming a path parameter. 
// Path parameters are defined as [paramName] in the file name and are accessed via props.

export default (params) => {
    return `Hello using path params: ${params.myPathParam2}`
}

// Test it in browser:
// http://localhost:8001/helloworld/123