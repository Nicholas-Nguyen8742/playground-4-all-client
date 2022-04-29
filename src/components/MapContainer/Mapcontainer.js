import './Mapcontainer.scss';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapcontainer({playgrounds}) {
  return (
    <MapContainer center={[39.257684, -99.434]} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      <Marker position={[33.5290172, -85.253076]}></Marker>
      {playgrounds.map(playground => (
        <Marker 
          key={playground.id} 
          position={[playground.latitude, playground.longitude]}>
          <Popup position={[playground.longitude, playground.latitude]}>
            <div>
              <h2>{"Name: " + playground.name}</h2>
              <p>{"Address: " + playground.address} {playground.city + ", " + playground.state }</p>
              <p>{playground.city + " " + playground.state }</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Mapcontainer;