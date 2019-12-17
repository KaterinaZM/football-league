import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Playgrounds.css';


class MapContainer extends Component {
  render() {


    return (
        <Map
          // style={{width: '40%', height: '40%'}}
          className="map"
          google={this.props.google}
          zoom={12}
          initialCenter={{ lat: 55.753239, lng: 37.619347 }}
          onClick={this.onMapClicked}
        />
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAVLdb--zGNChZmTYNevVMELn6zJCP-ZWU')
})(MapContainer)
