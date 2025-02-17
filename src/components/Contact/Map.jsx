import React from "react";
import { useState } from "react";

const Map = () => {
  const [tooltipInfo, setTooltipInfo] = useState(null);

  const handleMarkerClick = (location) => {
    setTooltipInfo(location);
  };

  const handleMapClick = () => {
    setTooltipInfo(null);
  };

  const markerStyle = {
    position: "absolute",
    cursor: "pointer",
    width: "26px",
    height: "26px",
  };

  const svgMarker = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="orange"
      width="24px"
      height="24px"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );

  return (
    <div
      className="map-container"
      style={{ position: "relative", width: "100%", height: "auto" }}
      onClick={handleMapClick}
    >
      <img
        src="/assets/img/map/map-img2.jpg"
        alt="World Map"
        style={{ width: "100%", height: "auto" }}
      />

      {/* Delaware Marker */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleMarkerClick({
            title: "Delaware, USA",
            address: "221 W 19ᵗʰ St, Wilmington, DE",
            postalCode: "19801",
            contact: "+1 332-322-6043",
            email: "delaware@finxlab.com ",
            top: "32%",
            left: "22%",
          });
        }}
        style={{ ...markerStyle, top: "29%", left: "23%" }}
        title="Delaware, USA"
      >
        {svgMarker}
      </div>

      {/* Kathmandu Marker */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleMarkerClick({
            title: "Kathmandu, Nepal",
            address: "Bhagwanpau, Swayambhu, Kathmandu",
            postalCode: " 44600",
            contact: "+977 1-5924442",
            email: "Kathmandu@finxlab.com ",
            top: "40%",
            left: "68%",
          });
        }}
        style={{ ...markerStyle, top: "39.4%", left: "67.8%" }}
        title="Kathmandu, Nepal"
      >
        {svgMarker}
      </div>

      {/* Tokyo Marker */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleMarkerClick({
            title: "Tokyo, Japan",
            address: "6-8-7 Hon-Nakayama, Funabashi City, Chiba Prefecture ",
            postalCode: "273-0035",
            contact: "+81 90-3889-1056",
            email: "Tokyo@finxlab.com ",
            top: "39%",
            left: "70%",
          });
        }}
        style={{ ...markerStyle, top: "32%", left: "82.8%" }}
        title="Tokyo, Japan"
      >
        {svgMarker}
      </div>

      {tooltipInfo && (
        <div
          style={{
            position: "absolute",
            top: tooltipInfo.top,
            left: tooltipInfo.left,
            backgroundColor: "#fff",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            zIndex: 10,
            transform: "translateY(-50%)",
          }}
        >
          <strong style={{ color: "orangered" }}>{tooltipInfo.title}</strong>
          <br />
          Address:{" "}
          <span style={{ color: "orange" }}>{tooltipInfo.address}</span>
          <br />
          Postal-Code: <span>{tooltipInfo.postalCode}</span>
          <br />
          Contact:<span>{tooltipInfo.contact}</span>
          <br />
          Email: <span>{tooltipInfo.email}</span>
        </div>
      )}
    </div>
  );
};

export default Map;
