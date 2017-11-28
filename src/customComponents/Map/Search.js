/*eslint-disable*/
import React, { Component } from 'react';
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

import styles from "./Search.css";


export default class Search extends Component {
  onSearchBoxMounted = searchBox => {
    this.searchBox = searchBox;
  }

  handleOnPlacesChanged = () => {
    this.searchBox.getPlaces().map(place =>
      this.props.store.pushStop({
        id: place.place_id,
        name: place.name,
        location: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      })
    );
  }

  render() {
    return (
      <SearchBox
        ref={this.onSearchBoxMounted}
        controlPosition={1}
        onPlacesChanged={this.handleOnPlacesChanged}
      >
        <input
          type="text"
          placeholder="Add a bus stop"
          className={styles.search}
        />
      </SearchBox>
    );
  }
}