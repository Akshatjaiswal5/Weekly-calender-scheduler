import React, { useContext } from "react";
import styles from "./WeekBar.module.css";
import GlobalContext from "../../context/global-context";
import DayBar from "./DayBar";
const WeekBar = (props) => {
  const ctx = useContext(GlobalContext);
  const startDate = new Date(ctx.currDate);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  return (
    <div className={styles.weekbar}>
      {ctx.currWeekArr.map((elem) => {
        return (
          <DayBar
            key={Math.random().toString()}
            date={elem}
            busy={
              ctx.appointments.hasOwnProperty(elem) &&
              ctx.appointments[elem].length > 0
            }
          />
        );
      })}
    </div>
  );
};

export default WeekBar;
