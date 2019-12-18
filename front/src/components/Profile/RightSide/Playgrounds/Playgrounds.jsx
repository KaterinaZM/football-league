import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Playgrounds.css';


class MapContainer extends Component {
  state = {
    
    styles: [
      {elementType: 'geometry', stylers: [{color: '#202123'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#202123'}]},
      // {elementType: 'labels.text.fill', stylers: [{color: '#202123'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#22252a'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#dedcdc'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
       
  }
  render() {


    return (
        <Map
          className="map"
          styles = {this.state.styles}
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
