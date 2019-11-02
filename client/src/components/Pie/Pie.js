import React from "react";
import Chart from "chart.js";
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class PieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidUpdate() {
    console.log(this.props);
    this.myChart = new Chart(this.chartRef.current, {
      type: "doughnut",
      data: {
        labels: this.props.label,
        datasets: [
          {
            data: this.props.data,
            label: "Points",
            backgroundColor: ["rgba(106, 164, 176, 1)", "rgba(65, 103, 144, 1)", "#2FDE00"],
            hoverBackgroundColor: ["RGBA(106, 164, 176, .5)", "rgba(65, 103, 144, .5)", "#175000"]
          }
        ]
      }
    });
  }

  render() {
    return (
      <canvas {...this.props} ref={this.chartRef} data={this.props.data} />
    );
  }
}

export default PieComponent;