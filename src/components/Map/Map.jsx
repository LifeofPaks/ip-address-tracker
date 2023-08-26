import React from "react";
import "./Map.scss";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import Icon from "../../Icon";

const Map = () => {
  return (
    <div className="map">
      <MapContainer
        center={[9.156369, 7.322036]}
        zoom={13}
        style={{ height: "65vh", width: "100vw" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={Icon} position={[9.156369, 7.322036]}>
          <Popup>Paks lives here. Come over for a cup of coffee 😊</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
