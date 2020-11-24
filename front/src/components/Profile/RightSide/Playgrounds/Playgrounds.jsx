import React, { Component } from 'react';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper
} from 'google-maps-react';
import './Playgrounds.css';

class MapContainer extends Component {
  state = {

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    styles: [
      { elementType: 'geometry', stylers: [{ color: '#202123' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#202123' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#202123' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#22252a' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#dedcdc' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]

  }

  onMarkerClick = (props, marker) => this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <Map
          className="map"
          styles = {this.state.styles}
          google={this.props.google}
          zoom={12}
          initialCenter={{ lat: 55.753239, lng: 37.619347 }}
          onClick={this.onMapClicked}
          >

          <Marker
            onClick={this.onMarkerClick}
            name={'FCPub'}
            address={'Новослободская, 16а'}
            phone={'8 (929) 989-78-64'}
            position={{ lat: 55.782147, lng: 37.599792 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Rusty Pub'}
            address={'Большая Новодмитровская ул., 36, стр. 6'}
            phone={'8 (999) 880-20-03'}
            position={{ lat: 55.805891, lng: 37.585325 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Pub no Pub'}
            address={'Таганская площадь, 86/1'}
            phone={'8 (495) 724-59-04'}
            position={{ lat: 55.741556, lng: 37.652996 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Pivzavod 77'}
            address={'Спартаковский пер. д.2 стр.1'}
            phone={'8 (929) 572-67-87'}
            position={{ lat: 55.778450, lng: 37.672340 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Свои'}
            address={'1-й Гончарный пер.4 стр.1'}
            phone={'8 (926) 890-80-20'}
            position={{ lat: 55.741790, lng: 37.652151 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Крафтмен'}
            address={'ул. Щепкина, 33, этаж 1'}
            phone={'8 (926) 799-89-10'}
            position={{ lat: 55.779880, lng: 37.628628 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Папа Вейдер'}
            address={'Большой златоустинский пер., д.3/5с1'}
            phone={'8 (929) 629-15-53'}
            position={{ lat: 55.759318, lng: 37.632841 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Антон Палыч'}
            address={'Цветной бульвар д.26 стр.1'}
            phone={'8 (495) 792-39-80'}
            position={{ lat: 55.771368, lng: 37.622482 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Лиля Брик'}
            address={'Большой Лёвшинский пер., 19'}
            phone={'8 (906) 019-89-89'}
            position={{ lat: 55.741421, lng: 37.586004 }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <p>{this.state.selectedPlace.address}</p>
                <p>{this.state.selectedPlace.phone}</p>
              </div>
           </InfoWindow>

        </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAVLdb--zGNChZmTYNevVMELn6zJCP-ZWU')
})(MapContainer);
