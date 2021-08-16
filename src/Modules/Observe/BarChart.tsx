import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["10 대", "20 대", "30 대", "40 대", "50 대", "60 대"],
  datasets: [
    {
      label: "두통",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 1)"],
      // borderColor: [

      //   "rgba(255, 206, 86, 1)",
      //   "rgba(75, 192, 192, 1)",
      //   "rgba(153, 102, 255, 1)",
      //   "rgba(255, 159, 64, 1)",
      // ],
      borderWidth: 1,
    },
    {
      label: "발열",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 206, 86, 1)"],
    },
    {
      label: "식욕부진",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(75, 192, 192, 1)"],
    },
    {
      label: "어지러움",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(153, 102, 255, 1)"],
    },
    {
      label: "근육통",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 159, 64, 1)"],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <div className="header">
      <h1 className="title">백신 접종 후기 통계</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;
