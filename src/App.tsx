import "./App.css";
import Question from "./components/Question"

function App() {
  return (
    <div
      style={{
        backgroundColor: "orange",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1C1B29",
          border: "1px solid black",
          padding: "70px",
          color:"white",
          borderRadius:"20px",
          width:"500px",
          height:"400px"
        }}
      >
        <h1 style={{textAlign:"center",fontSize:"35px"}}>Quiz</h1>
        <Question />
      </div>
    </div>
  );
}

export default App;
