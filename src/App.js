import "./App.scss";
import MapInfo from "./components/MapInfo/MapInfo";
import Map from "./components/Map/Map";
import { useEffect, useState } from "react";

function App() {
  const API_URL =
    "https://geo.ipify.org/api/v2/country?apiKey=&ipAddress=8.8.8.8";
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(API_URL);
        const data = await resp.json();
        console.log(data);
      } catch (err) {
        console.log(`Error: ${err.messaage}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <MapInfo />
      <Map />
    </div>
  );
}

export default App;
