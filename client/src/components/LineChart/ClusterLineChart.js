// Import Links
import React from "react";
import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class ClusterLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart = new Chart(this.chartRef.current, {
      type: "line",
      options: {
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              id: "bottom-x-axis",
              type: "category",
              position: "bottom"
            },
            {
              id: "bottom-x-axis",
              type: "category",
              position: "bottom"
            }
          ] // yAxes: [ //   { //     ticks: { //       min: 200000, //       stepSize: 10000 //     } //   } // ]
        }
      },
      data: {
        labels: this.props.time,
        datasets: [
          {
            data: this.props.hostOneData,
            label: this.props.hostOneLabels,
            backgroundColor: "RGBA(43, 68, 95, 0.50)", // This binds the dataset to the left y axis           
            xAxisID: "bottom-x-axis"
          },
          {
            data: this.props.hostTwoData,
            label: this.props.hostTwoLabels,
            backgroundColor: "RGBA(106, 164, 176, 0.50)", // This binds the dataset to the right y axis
            xAxisID: "bottom-x-axis"
          }
        ]
      }
    });
  }

  // Render Chart
  render() {
    return <canvas ref={this.chartRef} />;
  }
}

// Export Link
export default ClusterLineChart;