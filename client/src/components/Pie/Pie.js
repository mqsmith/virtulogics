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
      type: "doughnut",
      data: {
        labels: this.props.label,
        datasets: [
          {
            data: this.props.data,
            label: "Points",
            backgroundColor: ["#696969", "#A9A9A9", "#2FDE00"],
            hoverBackgroundColor: ["#808080", "#C0C0C0", "#175000"]
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
