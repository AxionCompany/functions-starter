// This is an example of an endpoint that returns a page rendering a JSX component into HTML, but also using React State and Use Effect.
// Like the other examples, it is a regular function that accepts props, that can be used within the component itself.
// Here, YOU DO NOT NEED TO IMPORT REACT, as it has already been injected in the Global scope.

export default (props) => {
  const [count, setCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  React.useEffect(() => {
    console.log("effect started");
  }, [count]);

  return (
    <div>
      <p>id: {props["jsx"]}</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{inputValue}</p>
    </div>
  );
};

// Test it in browser:
// http://localhost:8001/jsx/HelloWorldWithUseEffect