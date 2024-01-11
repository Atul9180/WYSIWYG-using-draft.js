import "./App.css";
import JoditTextEditor from "./component/JoditTextEditor";
import ReactQuillTextEditor from "./component/ReactQuillTextEditor";

function App() {
  return (
    <>
      <div style={{ marginBottom: " 5px" }}>
        <h2>Various Text Editor :</h2>
      </div>
      <div
        className="card"
        style={{
          marginBottom: " 0px",
          height: "300px",
        }}
      >
        <JoditTextEditor />
        <hr />
      </div>

      <div
        className="card"
        style={{
          marginBottom: " 80px",
          maxHeight: "200px",
        }}
      >
        <ReactQuillTextEditor />
      </div>

      <div
        className="card"
        style={{
          marginBottom: " 10px",
          height: "200px",
        }}
      >
        <JoditTextEditor />
        <hr />
      </div>
    </>
  );
}

export default App;
