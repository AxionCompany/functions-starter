// This is an example of an endpoint that returns a page rendering a JSX component into HTML.
// Like the other examples, it is a regular function that accepts props, that can be used within the component itself.

export default (props) => {
  return (
    <div>
      <h1 className={`text-3xl`}>
        Hello World
      </h1>
    </div>
  );
};

// Test it in browser:
// http://localhost:8001/jsx/HelloWorld