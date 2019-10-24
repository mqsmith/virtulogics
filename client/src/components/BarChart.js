import React from "react";
import Chart from "chart.js";
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  // componentDidUpdate() {
  //   this.myChart.data.labels = this.props.data.map(d => d.label);
  //   this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
  //   this.myChart.update();
  // }

  componentDidUpdate() {
    console.log(this.props);
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",
      options: {
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 70
              }
            }
          ]
          // xAxes: [
          //   {
          //     barPercentage: 0.5,
          //     barThickness: 6,
          //     maxBarThickness: 8,
          //     minBarLength: 2,
          //     gridLines: {
          //       offsetGridLines: true
          //     }
          //   }
          // ]
        }
      },
      data: {
          labels: this.props.labels,
        datasets: [
          {
            label: this.props.label,
            data: this.props.data,
            backgroundColor: this.props.color
          }
        ]
      }
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default BarChart;
