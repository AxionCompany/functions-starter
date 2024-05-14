// This is an example of an endpoint consuming a path parameter. 
// Path parameters are defined as [paramName] in the file name and are accessed via props.

export default (props) => {
    return `Hello using path params: ${props.myPathParam}`;
}

// Test it in browser:
// http://localhost:8001/123