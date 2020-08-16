import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent, ReactElement } from 'react';

import { environment } from '../../environment';

const useStyles = makeStyles({
  heroImage: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${environment.baseUrl}/images/banners/hero-banner-1.jpg')`,
    height: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  heroText: {
    textAlign: 'center',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
});

const HeroBanner: FunctionComponent = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.heroImage}>
      <div className={classes.heroText}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h4">
              Are you a...
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="primary"
                  href="/jobs"
                  variant="contained"
                >
                  Jobseeker
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="default"
                  href="/jobs"
                  variant="contained"
                >
                  Potential Employer
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroBanner;
