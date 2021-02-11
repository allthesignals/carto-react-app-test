import { useSelector } from 'react-redux';
import { CartoSQLLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react/redux';
import { useCartoLayerFilterProps } from '@carto/react/api';
import htmlForFeature from 'utils/htmlForFeature';

export const FACILITIES_LAYER_ID = 'facilitiesLayer';

function FacilitiesLayer() {
  const { facilitiesLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, facilitiesLayer?.source));
  const cartoFilterProps = useCartoLayerFilterProps(source);

  if (facilitiesLayer && source) {
    return new CartoSQLLayer({
      ...cartoFilterProps,
      id: FACILITIES_LAYER_ID,
      data: source.data,
      credentials: source.credentials,
      getFillColor: [241, 109, 122],
      pointRadiusMinPixels: 2,
      pickable: true,
      onHover: (info) => {
        if (info?.object) {
          info.object = {
            html: htmlForFeature(info.object),
            style: {},
          };
        }
      },
    });
  }
}

export default FacilitiesLayer;
