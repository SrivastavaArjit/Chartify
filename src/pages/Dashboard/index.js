// import axios from "axios";
import { Chart } from "chart.js";

export const fetchData = (heading, documents) => {
  //Defined a new map
  const mapHash = new Map();

  //Storing the count of intensities in a map
  documents?.forEach((records) => {
    if (
      records[heading] &&
      records[heading] !== null &&
      records[heading] !== ""
    ) {
      const key = String(records[heading]).toLowerCase();
      const value = mapHash.get(key);
      if (value) {
        mapHash.set(key, value + 1);
      } else {
        mapHash.set(key, 1);
      }
    }
  });

  //Converting Map to Array
  const mapToArray = Array.from(mapHash, ([key, count]) => {
    return { [heading]: key, count };
  });

  return mapToArray;
};

const createScatteredChart = (data, heading) => {
  const dataSets = [];
  data.forEach((records) => {
    if (!isNaN(Number(records[heading]))) {
      dataSets.push({ ["x"]: records[heading], ["y"]: records.count });
    }
  });
  if (dataSets.length === 0) {
    const p = document.getElementById(`${heading}-para`);
    p.innerHTML = "Numeric coordinate is required for Scatter chart";
  } else {
    const p = document.getElementById(`${heading}-para`);
    p.innerHTML = "";
    const myChart = new Chart(document.getElementById(`${heading}-canvas`), {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Scatter dataset",
            data: dataSets,
          },
        ],
      },
    });

    return myChart;
  }
};

const createChart = (data, heading, chartType) => {
  const myChart = new Chart(document.getElementById(`${heading}-canvas`), {
    type: chartType,
    data: {
      labels: data.map((row) => row[heading]),
      datasets: [
        {
          label: ` ${heading} count`,
          data: data.map((row) => row.count),
          fill: {
            target: "origin",
          },
        },
      ],
    },
    options: {
      tension: 0.5,
    },
  });

  return myChart;
};

export const makeChart = (data, chartType, heading) => {
  if (data.length === 0) {
    const p = document.getElementById(`${heading}-para`);
    p.innerHTML = "No Data Available";
  } else if (chartType === "scatter") {
    const chart = createScatteredChart(data, heading);
    return chart;
  } else {
    const p = document.getElementById(`${heading}-para`);
    p.innerHTML = "";
    const chart = createChart(data, heading, chartType);
    return chart;
  }
};
