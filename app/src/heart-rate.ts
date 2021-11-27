import document from "document";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { me as appbit } from "appbit";

function attachHeartRate() {
  if (HeartRateSensor && appbit.permissions.granted('access_heart_rate')) {
    const heartRateLabel = document.getElementById("heartRateLabel") as GraphicsElement;
    const hrm = new HeartRateSensor();

    hrm.addEventListener("reading", () => {
      heartRateLabel.text = `${hrm.heartRate}`;
    });

    display.addEventListener("change", () => {
      // Automatically stop the sensor when the screen is off to conserve battery
      display.on ? hrm.start() : hrm.stop();
    });

    hrm.start();
  }
}

export { attachHeartRate };
