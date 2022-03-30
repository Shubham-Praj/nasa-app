import "./App.css";
import Background from "./Components/Background";
import ContentDiv from "./Components/ContentDiv";
import Header from "./Components/Header";

function App() {
  return (
    <div style={{"display" : "flex", "justifyContent" : "center"}}>
     <Background/>
     <Header/>
     <ContentDiv/>
    </div>
  );
}

export default App;
