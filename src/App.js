import "./App.scss";
import MapInfo from "./components/MapInfo/MapInfo";
import Map from "./components/Map/Map";
import { useEffect, useState } from "react";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=192.212.174.101`;

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(API_URL)
        const data = await resp.json()
        setAddress(data)

      } catch (err) {
        console.log(`Error: ${err.messaage}`);
      }
    };

    fetchData();
  }, []);


  // SEARCH AND GET LOCATION FUNCTION
  const getIpLocation = async () => {
    const resp = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      } `
    );
    const data = await resp.json();
    setAddress(data);
  };


// HANDLE SUBMIT FORM FUNCTION
const handleSubmit = (e) =>{
  e.preventDefault()
  getIpLocation()
  setIpAddress('')
}

  return (
    <div className="container">
      <MapInfo
        address={address}
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        getIpLocation={getIpLocation}
        handleSubmit={handleSubmit}
      />
      <Map address={address} />
    </div>
  );
}

export default App;
