import { CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { makeChart, fetchData } from "./index.js";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import { Colors } from "chart.js";
Chart.register(Colors);

const CardContnt = ({ heading, chartType, documents }) => {
  useEffect(() => {
    console.log("why two times?");
    const dataArray = fetchData(heading, documents);
    const chart = makeChart(dataArray, chartType, heading);
    return () => {
      chart?.destroy();
    };
  }, [heading, chartType, documents]);
  return (
    <>
      <CardContent
        sx={{
          backgroundColor: "#f8f6ea",
          border: "1px solid #bababa",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            padding: "0.5rem 2rem 2rem 1rem",
            font: "small-caps 1.6rem bold",
          }}
        >
          {heading}
        </Typography>
        <div
          className="chart-container"
          style={{
            position: "relative",
            height: "60vh",
          }}
        >
          <p id={`${heading}-para`}></p>
          <canvas
            id={`${heading}-canvas`}
            aria-label={`${heading} canvas`}
            role="img"
          ></canvas>
        </div>
      </CardContent>
    </>
  );
};

CardContnt.propTypes = {
  heading: PropTypes.string,
  chartType: PropTypes.string,
  documents: PropTypes.array,
};

export default CardContnt;
