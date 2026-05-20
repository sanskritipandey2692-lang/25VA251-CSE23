import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <div style={{
        border: "1px solid #ccc",
        padding: "25px",
        width: "300px",
        margin: "auto",
        borderRadius: "10px"
      }}>
        <h2>React Counter Application</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ marginLeft: "10px" }}
        >
          Decrement (-)
        </button>
        <br /><br />
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;