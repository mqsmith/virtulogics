import React from 'react';
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
      console.log(this.props);
    }

    
  
    // componentDidUpdate() {
    //   this.myChart.data.labels = this.props.esxhostname.map(d => console.log(d.name));
    //   // this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    //   this.myChart.update();
    // }
  
    componentDidMount() {
      this.chart()
    }

    chart = ()=>{
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        options: {
            maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'hour'
                }
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
          // labels: this.props.data.map(d => d.time),
          datasets: [{
            label: this.props.label,
            data: this.props.data,
            fill: 'none',
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0
          }]
        }
      });
    }
      
    
  
    render() {

      return <canvas ref={this.chartRef} />;
    }
  }

export default LineChart;