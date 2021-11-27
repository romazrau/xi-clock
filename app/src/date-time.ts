import document from "document";
import * as util from "../../common/utils";
import { preferences } from "user-settings";
import { TickEvent } from "clock";

function isNewDate(evt: TickEvent) {
  let today = evt.date;
  let hours = today.getHours();
  let minutes = today.getMinutes();

  return hours === 0 && minutes === 0;
}

function updateDateLabel(evt: TickEvent) {
  const dateLabel = document.getElementById("dateLabel") as GraphicsElement;
  let today = evt.date;
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();
  let dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  dateLabel.text = `${month}／${date}  ${dayMap[day]}`;
}

function updateTimeLabel(evt: TickEvent) {
  // Get a handle on the <text> element
  const timeLabel = document.getElementById("timeLabel") as GraphicsElement;

  let today = evt.date;
  let hours = today.getHours();
  let formateHours: string; 
  // if (preferences.clockDisplay === "12h") {
  if (false) {
    // 12h format
    formateHours = (hours % 12 || 12) + '';
  } else {
    // 24h format
    formateHours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  // let secs = util.zeroPad(today.getSeconds());

  timeLabel.text = `${formateHours}:${mins}`;
}

export { isNewDate, updateDateLabel, updateTimeLabel };
