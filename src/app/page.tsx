import Image from "next/image";
import styles from "./page.module.css";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Month() {
  return(
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Eat</TimelineContent>
    </TimelineItem>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Timeline position="alternate-reverse">
          <Month/>
        </Timeline>
      </div>
    </main>
  );
}
