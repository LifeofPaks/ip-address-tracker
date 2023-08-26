import React from "react";
import "./MapInfo.scss";
import Arrow from "../../images/icon-arrow.svg";

const MapInfo = ({ search, setSearch }) => {
  return (
    <main className="mapInfo">
      <h1>IP Address Tracker</h1>
      <form className="inputWrapper">
        <input type="text" placeholder="Search for any IP address or domain" />
        <button>
          <img src={Arrow} alt="arrow" />
        </button>
      </form>

      <article className="details">
        <section className="info">
          <h2>IP ADDRESS</h2>
          <p>192.212.174.101</p>
        </section>

        <section className="info">
          <h2>LOCATION</h2>
          <p>Brooklyn, NY 10001</p>
        </section>

        <section className="info">
          <h2>TIMEZONE</h2>
          <p>UTC-05:00</p>
        </section>

        <section className="info">
          <h2>ISP</h2>
          <p>SpaceX Starlink</p>
        </section>
      </article>
    </main>
  );
};

export default MapInfo;
