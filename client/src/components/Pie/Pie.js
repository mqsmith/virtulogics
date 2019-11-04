import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js";
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class PieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  // componentDidUpdate() {
  //   this.myChart.data.labels = this.props.esxhostname.map(d => console.log(d.name));
  //   // this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
  //   this.myChart.update();
  // }

  componentDidUpdate() {
    console.log(this.props);
    this.myChart = new Chart(this.chartRef.current, {
      type: "bar",
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
