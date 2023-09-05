import React from 'react';

import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';

const RecentTransactions = () => {
  return (
   
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          {/* Timeline items */}
          {/* Example timeline items */}
          <TimelineItem>
            {/* Timeline content */}
          </TimelineItem>
        </Timeline>
      </>
 
  );
};

export default RecentTransactions;
