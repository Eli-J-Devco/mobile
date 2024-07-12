import React from 'react';
import Map from '../../modules/map';
import PrimaryLayoutDetailItem from '../../layouts/PrimaryLayoutDetailItem';

const MapScreen = () => {
  return (
    <PrimaryLayoutDetailItem title="Map">
      <Map />
    </PrimaryLayoutDetailItem>
  );
};

export default MapScreen;
