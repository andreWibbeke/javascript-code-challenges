import data from "./data/data.js";

function* yieldTrainStops(array) {
  for (const item of array) {
    yield item;
  }
}

function logTrainStation(nextTrainStop) {
  return () => {
    const station = nextTrainStop.next();
    if (station.done) {
      console.log("We made it!");
      btn.setAttribute("disabled", true);
      return;
    }
    console.log(`Next stop: ${station.value}`);
  };
}

// const nextTrainStop = yieldTrainStops(data);
const btn = document.querySelector("#trainStop");
btn.onclick = logTrainStation(yieldTrainStops(data));

export { yieldTrainStops };
