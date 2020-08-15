import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import React, { FunctionComponent, ReactElement } from 'react';

type Props = {
  imageSource: string;
  name: string;
  uri: string;
};

const useStyles = makeStyles({
  card: {
    margin: '0.5em',
  },
  cardContent: {
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});
const RecommendedJobCarouselItem: FunctionComponent<Props> = ({
  imageSource,
  name,
  uri,
}: Props): ReactElement<Props> => {
  const classes = useStyles();

  /**
   * Handle card click.
   */
  const handleClick = () => {
    Router.push(uri);
  };

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageSource} title={name} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecommendedJobCarouselItem;
