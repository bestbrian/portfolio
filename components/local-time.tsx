import React, { useEffect, useState } from "react";

const LocalTime: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Function to update time state with the current local time (without seconds)
    const updateTime = () => {
      const now = new Date();
      // Use options to display only hour and minute
      setTime(
        now.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    // Set up an interval to update the time every second
    const timerId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return <p>{time}</p>;
};

export default LocalTime;
