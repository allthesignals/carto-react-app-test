import GeocoderLayer from './GeocoderLayer';
import FacilitiesLayer from './FacilitiesLayer';
// Auto import

export const getLayers = () => {
  return [
    GeocoderLayer(),
    FacilitiesLayer(),
    // Auto import layers
  ];
};
