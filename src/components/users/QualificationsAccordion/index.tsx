import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

type Props = Record<string, unknown>;

const useStyles = makeStyles({
  chip: {
    margin: '0.25em',
  },
});

const QualificationsAccordion: FunctionComponent<Props> = (): ReactElement<
  Props
> => {
  const classes = useStyles();

  return (
    <Fragment>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-about-me">
          <Typography component="h2" variant="h6">
            About Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I am a Software Developer with over 10 years of experience. My
            business recently closed due to COVID-19, and I am trying to utilise
            my free time to skill up in different areas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-skills">
          <Typography component="h2" variant="h6">
            Skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Chip className={classes.chip} color="primary" label="React" />
          <Chip className={classes.chip} color="primary" label="Angular" />
          <Chip className={classes.chip} color="primary" label="GraphQL" />
          <Chip className={classes.chip} color="primary" label="Python" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-skills">
          <Typography component="h2" variant="h6">
            Desired Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Chip
            className={classes.chip}
            color="secondary"
            label="Photography"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-skills">
          <Typography component="h2" variant="h6">
            Languages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Chip className={classes.chip} color="default" label="English" />
          <Chip className={classes.chip} color="default" label="Japanese" />
          <Chip
            className={classes.chip}
            color="default"
            label="Traditional Chinese"
          />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default QualificationsAccordion;
