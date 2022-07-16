import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    // position: 'relative',
    width: '100%',
    height: '35%'
};

export class GoogleLocation extends React.Component {
    render() {

        return (
            <div className="d-help-map">
                <div id="map-canvas" className="map-canvas">
                    <Map google={this.props.google}
                        zoom={14}
                        style={style}
                        initialCenter={{ lat: 23.02099013548565, lng: 72.63739022422784 }}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state?.selectedPlace.name}</h1>
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