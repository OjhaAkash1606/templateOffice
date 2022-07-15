import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleLocation extends React.Component {
    render() {

        return (
            <div className="d-help-map">
                <div id="map-canvas" className="map-canvas">
                    <Map google={this.props.google} zoom={14}
                        initialCenter={{ lat: 23.02213876801439, lng: 72.63747492059854 }}>
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCVINl8vCCMw7u1ydVCW5tsN4dvmLXv54E"
})(GoogleLocation); 