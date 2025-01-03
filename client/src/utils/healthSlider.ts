import { HealthSliderValue } from "../types";
import { v4 as uuidv4 } from "uuid";

export function createNewHealthSlider(min?: number, max?: number) {
  const _healthSlider: HealthSliderValue = {
    id: uuidv4(),
    value: 100,
    min: min ?? 0,
    max: max ?? 100,
  };
  return _healthSlider;
}

export function getSavedHealthSliders() {
  const healthSliderData = window.localStorage.getItem("health-trackers");
  if (!healthSliderData) return [];

  const healthSliders = JSON.parse(healthSliderData) as HealthSliderValue[];
  return healthSliders;
}

export function saveHealthSliders(healthSliders: HealthSliderValue[]) {
  const data = JSON.stringify(healthSliders);
  window.localStorage.setItem("health-trackers", data);
}
