import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { FunctionComponent, ReactElement } from 'react';
import Carousel from 'react-multi-carousel';

import RecommendedJobCarouselItem from './RecommendedJobCarouselItem';

const RecommendedJobsCarousel: FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const isMediaSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: isMediaSmUp ? 3 : 1,
    },
  };

  return (
    <Carousel
      infinite
      arrows={isMediaSmUp}
      centerMode={!isMediaSmUp}
      responsive={responsive}
    >
      <RecommendedJobCarouselItem
        imageSource="/images/jobs/strawberry-picker.jpg"
        name="Strawberry Picker"
        uri="/jobs/strawberry%20picker"
      />
      <RecommendedJobCarouselItem
        imageSource="/images/jobs/auto-mechanic.jpg"
        name="Auto Mechanic"
        uri="/jobs/auto%20mechanic"
      />
      <RecommendedJobCarouselItem
        imageSource="/images/jobs/cleaner.jpg"
        name="Cleaner"
        uri="/jobs/Cleaner"
      />
    </Carousel>
  );
};

export default RecommendedJobsCarousel;
