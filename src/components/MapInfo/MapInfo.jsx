import React from "react";
import "./MapInfo.scss";
import Arrow from "../../images/icon-arrow.svg";

const MapInfo = ({ address, ipAddress, setIpAddress, handleSubmit }) => {
  return (
    <main className="mapInfo">
      <h1>IP Address Tracker</h1>
      <form className="inputWrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button>
          <img src={Arrow} alt="arrow" />
        </button>
      </form>

      <article className="details">
        <section className="info">
          <h2>IP ADDRESS</h2>
          <p>{address?.ip}</p>
        </section>

        <section className="info">
          <h2>LOCATION</h2>
          <p>{address?.location.city}, {address?.location.region}</p>
        </section>

        <section className="info">
          <h2>TIMEZONE</h2>
          <p>UTC{address?.location.timezone}</p>
        </section>

        <section className="info">
          <h2>ISP</h2>
          <p>{address?.isp}</p>
        </section>
      </article>
    </main>
  );
};

export default MapInfo;
