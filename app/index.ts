import clock, { TickEvent } from "clock";

import { isNewDate, updateDateLabel, updateTimeLabel } from './src/date-time' 
import { attachHeartRate } from './src/heart-rate' 

// Update the clock every seconds, minutes, or hours
clock.granularity = "minutes";

// listen every tick
clock.addEventListener("tick", (evt) => {
  updateTimeLabel(evt);
  updateDateLabel(evt);
});
attachHeartRate();