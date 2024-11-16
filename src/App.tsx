import { useEffect, useRef, useState } from "react";
import { BirthdayCountdown } from "./components/Countdown";
import { DvdRichard } from "./components/DvdRichard";
import "./App.css";
import Confetti from "./components/Confetti";
import { RollingAlert } from "./components/RollingAlert";
import { AudioPlayer } from "./components/AudioPlayer";
import youreNotMyDad from "./assets/Your-not-my-dad-full-version-from-Vine.ogg";
import ReactAudioPlayer from "react-audio-player";

function App() {
  const isConfettiOn = useRef(false);
  useEffect(() => {
    Confetti(isConfettiOn)
  }, []);
  const [play, setPlay] = useState(false);

  // reference for the inner audio player element
  const audioRef = useRef<ReactAudioPlayer | null>(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      onClick={() => {
        if (audioRef.current?.audioEl.current) {
          if (play) {
              audioRef.current.audioEl.current.pause();
          } else {
              audioRef.current.audioEl.current.play();
          }
          setPlay(!play);
        }
      }} 
    >
      <BirthdayCountdown />
      <div className="dvd-container">
        <DvdRichard size={250} />
      </div>
      <RollingAlert />
      <AudioPlayer audioRef={audioRef} src={youreNotMyDad} />
    </div>
  );
}

export default App;