import { useState, useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../reducers/timer";
import styles from "../styles/Timer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRotate } from '@fortawesome/free-solid-svg-icons';


function Timer() {
  const [label, setLabel] = useState("Session");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  let interval;

  const dispatch = useDispatch();

  const timer = useSelector((state) => state.timer.value);

  useEffect(() => {
    setMinutes(timer.sessionTime * 60 * 1000);
  }, [timer]);

  useEffect(() => {
    if (timerStart && minutes > 0) {
      interval = setInterval(() => {
        setMinutes((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!timerStart) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerStart]);

  if (minutes === 0 && timerStart === true) {
    const audio = document.getElementById("beep");
    setTimerStart(false);
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      if (label === "Session") {
        setLabel("Break");
        setMinutes(timer.breakTime * 60 * 1000);
        setTimerStart(true);
      } else if (label === "Break") {
        setLabel("Session");
        setMinutes(timer.sessionTime * 60 * 1000);
        setTimerStart(true);
      }
    }, 1000);
  }

  const handleReset = () => {
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;

    setTimerStart(false);
    setLabel("Session");
    dispatch(reset());
  };

  return (
    <div className={styles.timerContainer}>
      <h2 id="timer-label" className={styles.label}>{label}</h2>

      <div id="time-left" className={styles.time}>
          {minutes === 3600000 ? "60:00" : moment(minutes).format("mm:ss")}
     
        <audio
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          id="beep"
        ></audio>
        </div>
        <div className={styles.iconsContainer}>

        <div
          onClick={() => {
            setTimerStart(!timerStart);
          }}
          id="start_stop"
        >
          {timerStart ? <FontAwesomeIcon icon={faPause} size="2x" cursor={"pointer"}/> : <FontAwesomeIcon icon={faPlay} size="2x" cursor={"pointer"}/>}
        </div>
        <FontAwesomeIcon icon={faRotate} onClick={() => handleReset()} id="reset" size="2x" cursor={"pointer"}/>
        </div>

      
    </div>
  );
}

export default Timer;
