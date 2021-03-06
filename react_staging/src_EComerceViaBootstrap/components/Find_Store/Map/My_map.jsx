import React, { Component } from 'react'
import { Map, GoogleApiWrapper ,InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';


const mapStyles = {
    position: 'absolute',
    width: '100%',
    height: '95%'
  };
  
class My_map extends Component {
    
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
        return (
            <div>
                <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
                >
                    <Marker
                    onClick={this.onMarkerClick}
                    name={'Current Location'}
                    />
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </CurrentLocation>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: '{mypublicGoogleMapAPIKey}'
  })(My_map);
