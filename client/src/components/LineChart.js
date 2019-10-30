import React from 'react';
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
      // console.log(this.props);
    }

    
    // componentDidUpdate() {
    //   this.myChart.data.labels = this.props.esxhostname.map(d => console.log(d.name));
    //   // this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    //   this.myChart.update();
    // }
  
    componentDidUpdate() {
      console.log(this.props.hostOneData);
      console.log(this.props.hostTwoData);
      console.log(this.props.time);
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        options: {
            maintainAspectRatio: true,
          scales: {
            xAxes: [{
              id: 'bottom-x-axis',
              type: 'category',
              position: 'bottom'
          }, {
              id: 'bottom-x-axis',
              type: 'category',
              position: 'bottom'
          }]
            // yAxes: [
            //   {
            //     ticks: {
            //       min: 200000,
            //       stepSize: 10000
            //     }
            //   }
            // ]
          }
        },
        data: {
          labels: this.props.time,
          datasets: [{
            data: this.props.hostOneData,
            label: this.props.hostOneLabels,
            backgroundColor: "RGBA(0,173,255,0.26)",

            // This binds the dataset to the left y axis
            xAxisID: 'bottom-x-axis'
        }, {
            data: this.props.hostTwoData,
            label: this.props.hostTwoLabels,
            backgroundColor: 'RGBA(255,0,0,0.26)',

            // This binds the dataset to the right y axis
            xAxisID: 'bottom-x-axis'
        }]
          // datasets: [{
          //   label: this.props.label,
          //   data: this.props.data,
          //   fill: 'none',
          //   backgroundColor: this.props.color,
          //   pointRadius: 2,
          //   borderColor: this.props.color,
          //   borderWidth: 1,
          //   lineTension: 0
          // }]
        }
      });
      console.log(this.myChart);
    }

    
      
    
      
    
  
    render() {

      return <canvas ref={this.chartRef} />;
    }
  }

export default LineChart;