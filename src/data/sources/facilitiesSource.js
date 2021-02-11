const FACILITIES_SOURCE_ID = 'facilitiesSource';

const source = {
  id: FACILITIES_SOURCE_ID,
  data: `
    SELECT the_geom_webmercator, cartodb_id FROM facdb_v2019_12
  `,
  type: 'sql',
};

export default source;
