import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { FunctionComponent, ReactElement } from 'react';

type Props = Record<string, unknown>;

const RecentWorksAccordion: FunctionComponent<Props> = (): ReactElement<
  Props
> => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-skills">
        <Typography component="h2" variant="h6">
          Recent Works
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <span>Working in progress...</span>
      </AccordionDetails>
    </Accordion>
  );
};

export default RecentWorksAccordion;
