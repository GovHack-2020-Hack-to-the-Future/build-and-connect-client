import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent, ReactElement } from 'react';

type Props = {
  imageSource: string;
  isNewArrival: boolean;
  name: string;
  onClick: () => void;
  numOfHours: number;
};

const JobListItem: FunctionComponent<Props> = ({
  imageSource,
  isNewArrival,
  name,
  onClick,
  numOfHours,
}: Props): ReactElement<Props> => {
  const titleElement = isNewArrival ? (
    <Grid container justify="space-evenly">
      <Grid item xs={1}>
        <Badge badgeContent="New!" color="primary" />
      </Grid>
      <Grid item xs={10}>
        <Typography gutterBottom variant="subtitle2">
          {name}
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <Typography gutterBottom variant="subtitle2">
      {name}
    </Typography>
  );

  return (
    <Card onClick={() => onClick()}>
      <CardMedia
        alt={name}
        component="img"
        height="300"
        image={imageSource}
        title={name}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {titleElement}
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography color="textSecondary" variant="overline">
                  {`Estimated: ${numOfHours} hrs`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobListItem;
