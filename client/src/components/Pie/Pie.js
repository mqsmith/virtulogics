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
            backgroundColor: ["RGBA(255,0,0,0.26)", "RGBA(0,173,255,0.26)", "#2FDE00"],
            hoverBackgroundColor: ["RGBA(255,0,0,0.50)", "RGBA(0,173,255,0.50)", "#175000"]
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