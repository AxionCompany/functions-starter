// This is an example of an endpoint that returns a page rendering a JSX component into HTML, but also using React State.
// Like the other examples, it is a regular function that accepts props, that can be used within the component itself.
// Here, YOU DO NOT NEED TO IMPORT REACT, as it has already been injected in the Global scope.

export default (props) => {
  const [color, setColor] = React.useState("red");
  return (
    <div>
      <h1 style={{ color }} className={`text-3xl text-black-800`}>
        Hello World
      </h1>
      <p>color: {color}</p>
      {/* input for testing color changes */}
      <input value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  );
};

// Test it in browser:
// http://localhost:8001/jsx/HelloWorldWithState
