import document from "document";
import { display } from "display";
import { battery } from "power";

function alertWhenBatteryLow() {
    const batteryLowAlert = document.getElementById("batteryLowAlert") as GraphicsElement;

    const listenBattery = () => {
        console.log(Math.floor(battery.chargeLevel) + "%");
        batteryLowAlert.text = battery.chargeLevel < 30 ? Math.floor(battery.chargeLevel) + "%" : "";
    };

    listenBattery();
    // batteryLowAlert.text = Math.floor(battery.chargeLevel) + "%";
    display.addEventListener("change", () => {
        if (display.on) {
            battery.addEventListener("change", listenBattery);
        } else {
            battery.removeEventListener("change", listenBattery);
        }
    });
}

export { alertWhenBatteryLow };