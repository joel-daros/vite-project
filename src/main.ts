import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";
import { Map } from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
new Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
  accessToken:
    "pk.eyJ1Ijoiam9lbGRhcm9zIiwiYSI6ImNsM2luaG11ZTB1MHUzY3VtbmNubjFsYWcifQ.rlF1mn9KhZhHyzTAnpxleQ",
});
