/* eslint-disable */
import React, { Component } from "react";
import Map from "../customComponents/Map/Map";

export default class MapService extends Component{
    render(){
        return(
            <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDKDSuafvrYU87Yp5NUzFw_8allS4GRT5k"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            store={this.props.store}
            />
        );
    }
}
