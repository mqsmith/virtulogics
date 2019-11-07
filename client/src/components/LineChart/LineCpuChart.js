// Import Links
import React from 'react';
import Chart from 'chart.js';

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }

    componentDidUpdate() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        options: {
            maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                type: 'category',
                label: this.props.hostLabels
              }
            ],
            yAxes: [
              {
                ticks: {
                  min: 0
                }
              }
            ]
          }
        },
        data: {
          labels: this.props.time,
          datasets: [{
            label: this.props.hostLabels,
            data: this.props.hostData,
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0
          }]
        }
      });
    }

    // Render Chart
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }

  // Export Link
export default LineChart;