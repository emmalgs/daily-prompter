import { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const difference = Math.max(Math.floor((nextMidnight.getTime() - now.getTime()) / 1000), 0);
    return difference;
  };
  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="timer">
      <p className="countdown">
        <span>{hours.toString().padStart(2, "0")}</span>
        <span> : </span>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span> : </span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </p>
    </div>
  );
};

export default Timer;
