import React from 'react';
import Chart from 'chart.js';
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
        type: 'bar',
        options: {
            maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 100
                }
              }
            ]
          }
        },
        data: {
        //   labels: this.props.label.map(d => d.label),
          datasets: [{
            label: this.props.label,
            data: this.props.data,
            backgroundColor: this.props.color
          }]
        }
      });
    }
  
    render() {
      return (
          <canvas ref={this.canvasRef} />
      );
    }
  }

export default BarChart;