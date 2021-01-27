import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };

function UserMap(props) {

    /*
    WIP: GoogleMap utilising API deisgned to take the users Location (latitude and longitude) and display it on google maps.
    */

    const {latitude, longitude} = props

    const center = {
        lat: latitude,
        lng: longitude
      };

    console.log(center)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD9zc1_d9PWTjMYZNtQo1fYXBCpX78nmsI"
      })

      const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <></>
}

export default React.memo(UserMap);