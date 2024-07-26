/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import MapboxGL, {Logger, UserLocation} from '@rnmapbox/maps';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../../assets';
import {MAP_BOX_ACCESS_TOKEN} from '@env';

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

MapboxGL.setAccessToken(MAP_BOX_ACCESS_TOKEN);
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
        <MapboxGL.PointAnnotation
          key="pointAnnotation"
          id="pointAnnotation"
          coordinate={[106.7040318, 10.8920713]}
          title="Test">
          <MapboxGL.Callout title="">
            <View style={styles.myLocal}></View>
          </MapboxGL.Callout>
        </MapboxGL.PointAnnotation>
        <MapboxGL.PointAnnotation
          key="pointAnnotation1"
          id="pointAnnotation1"
          coordinate={[106.7040318, 10.9020713]}
          title="Test">
          <MapboxGL.Callout title="">
            <View style={styles.myLocal}></View>
          </MapboxGL.Callout>
        </MapboxGL.PointAnnotation>

        {/* {location && (
          <MapboxGL.PointAnnotation
            id="userLocation"
            coordinate={location}
            title="Your Location">
            <View style={styles.myLocal}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Nguyen Trong Qui
              </Text>
            </View>
          </MapboxGL.PointAnnotation>
        )} */}
        <UserLocation
          visible={true}
          androidRenderMode="gps"
          showsUserHeadingIndicator={true}
          // onUpdate={(newLocation: any) => {
          //   const loca = [
          //     newLocation.coords.longitude,
          //     newLocation.coords.latitude,
          //   ];
          //   console.log('-----newLocation---: ', loca);

          //   setLocation(loca);
          // }}
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
  myLocal: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  annotationContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 20,
    borderColor: '#7a7a7a',
    borderWidth: 1,
  },
  annotationText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
