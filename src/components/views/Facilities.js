import { useEffect } from 'react';
import facilitiesSource from 'data/sources/facilitiesSource';

import { FACILITIES_LAYER_ID } from 'components/layers/FacilitiesLayer';

import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react/redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Facilities() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(facilitiesSource));

    dispatch(
      addLayer({
        id: FACILITIES_LAYER_ID,
        source: facilitiesSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(FACILITIES_LAYER_ID));
      dispatch(removeSource(facilitiesSource.id));
    };
  }, [dispatch]);

  // Auto import useEffect

  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item>Hello World</Grid>
    </Grid>
  );
}
