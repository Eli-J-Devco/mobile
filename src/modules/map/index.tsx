/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import MapboxGL, {Logger, UserLocation} from '@rnmapbox/maps';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {images} from '../../assets';

Logger.setLogCallback(log => {
  const {message} = log;

  if (
    message.match('Request failed due to a permanent error: Canceled') ||
    message.match('Request failed due to a permanent error: Socket Closed')
  ) {
    return true;
  }
  return false;
});

MapboxGL.setAccessToken(
  'sk.eyJ1IjoicXVpdHJvbmduZ3V5ZW4iLCJhIjoiY2x5aWM4Y3JhMGNoODJrc2hpZmNiZDcyYSJ9.EGU9vFoFoWo66K-g_ZDMPw',
);
MapboxGL.UserTrackingMode.Follow;

const Map = () => {
  const [location, setLocation] = useState<any[]>();

  useEffect(() => {
    // Request permission to access location
    (async () => {
      await MapboxGL.requestAndroidLocationPermissions();
    })();
    return () => {
      MapboxGL.setTelemetryEnabled(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        style={styles.map}
        styleURL="mapbox://styles/mapbox/streets-v12"
        rotateEnabled={true}
        // onUserLocationUpdate={handleLocationUpdate}
        onDidFinishLoadingMap={async () => {
          // await createRouterLine(coords, selectedRouteProfile);
        }}>
        <MapboxGL.Camera
          zoomLevel={8}
          followUserLocation={true}
          animationMode={'flyTo'}
          animationDuration={6000}
          followZoomLevel={14}
        />
        <MapboxGL.UserLocation visible={true} showsUserHeadingIndicator />
        {/* <MapboxGL.Camera
          followUserLocation
          zoomLevel={14}
          centerCoordinate={location || [-73.9708, 40.7234]} // Default location if no location
          animationMode={'flyTo'}
          animationDuration={6000}
        /> */}

        {location && (
          <MapboxGL.PointAnnotation
            id="userLocation"
            coordinate={location}
            title="Your Location">
            <View style={styles.marker} />
          </MapboxGL.PointAnnotation>
        )}

        <UserLocation
          visible={true}
          androidRenderMode="gps"
          showsUserHeadingIndicator={true}
          onUpdate={(newLocation: any) => {
            console.log('-----newLocation---: ', newLocation);

            const loca = [
              newLocation.coords.longitude,
              newLocation.coords.latitude,
            ];
            console.log('-----newLocation---: ', loca);
            setLocation(loca);
          }}
        />
      </MapboxGL.MapView>
      <View style={styles.logoConteiner}>
        <Image source={images.logo} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 10,
    height: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  logoConteiner: {
    backgroundColor: '#FFF',
    position: 'absolute',
    left: 0,
    height: 60,
    bottom: 0,
    padding: 10,
    width: '100%',
  },
});
