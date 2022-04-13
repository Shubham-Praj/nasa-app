import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background";
import ContentDiv from "./Components/ContentDiv";
import Header from "./Components/Header";

function App() {
  const [apodData, setapodData] = useState([]);

  //Function to get data from the nasa api
  async function getApodData(date) {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}date=${date}&&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setapodData(data);
  }

  useEffect(() => {
    getApodData("2017-01-02");
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Background />
      <Header />
      <ContentDiv data={apodData} />
    </div>
  );
}

export default App;
