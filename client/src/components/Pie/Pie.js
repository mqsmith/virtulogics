// Import Links
import React from "react";
import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class PieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart = new Chart(this.chartRef.current, {
      type: "horizontalBar",
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
      },
      options: {
        barPercentage: 0.4,
      legend: { display: false },
      title: {
        display: true,
        text: 'Cluster memory usage by host (%)'
      }
      }
    });
  }

  // Render Chart
  render() {
    return (
      <canvas {...this.props} ref={this.chartRef} data={this.props.data} />
    );
  }
}

// Export Link
export default PieComponent;