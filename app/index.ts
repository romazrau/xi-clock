import clock, { TickEvent } from "clock";

import { isNewDate, updateDateLabel, updateTimeLabel } from './src/date-time' 
import { attachHeartRate } from './src/heart-rate' 
import { alertWhenBatteryLow } from "./src/battery";

// Update the clock every seconds, minutes, or hours
clock.granularity = "minutes";

// listen every tick
clock.addEventListener("tick", (evt: TickEvent) => {
  updateTimeLabel(evt);
  updateDateLabel(evt);
});
attachHeartRate();
alertWhenBatteryLow();