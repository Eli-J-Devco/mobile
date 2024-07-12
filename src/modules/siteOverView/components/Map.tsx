import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'sk.eyJ1IjoicXVpdHJvbmduZ3V5ZW4iLCJhIjoiY2x5aWM4Y3JhMGNoODJrc2hpZmNiZDcyYSJ9.EGU9vFoFoWo66K-g_ZDMPw',
);

const MapSiteOverview = () => {
  useEffect(() => {
    // Mapbox.setConnected(true);

    // Mapbox.setWellKnownTileServer('Mapbox');

    return () => {
      // Mapbox.setConnected(false);
      Mapbox.setTelemetryEnabled(false);
    };
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default MapSiteOverview;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
