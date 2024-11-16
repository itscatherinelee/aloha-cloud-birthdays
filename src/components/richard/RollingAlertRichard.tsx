import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const colors = [
  "#e81416",
  "#ffa500",
  "#faeb36",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d",
];

export function RollingAlert() {
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = colorIndex + 1;
      if (colors[nextIndex] === undefined) {
        nextIndex = 0;
      }
      setColorIndex(nextIndex);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Marquee>
      <h1
        style={{
          fontFamily: "comic sans ms",
          color: colors[colorIndex],
        }}
      >
        !!🚨ALERT ALERT ALERT🚨!! BRAKING NEWS: RICHARDS BDAY IS SOON (TM) I
        REPEAT BDAY IS SOON
      </h1>
    </Marquee>
  );
}
