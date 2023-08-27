import React, { useEffect } from "react";
import "./Map.scss";
import { MapContainer,TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import MarkerPosition from "../MarkerPosition";

const Map = ({address}) => {

  const position = [address?.location.lat, address?.location.lng]

  return (
    address && 
    <div className="map">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "65vh", width: "100vw" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerPosition address={address}/>
      </MapContainer>
    </div>
  );
};

export default Map;
