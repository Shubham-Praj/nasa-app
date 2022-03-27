import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";

function App() {
  return (
    <div style={{"display" : "flex", "justifyContent" : "center"}}>
     <Background/>
     <Header/>
    </div>
  );
}

export default App;
