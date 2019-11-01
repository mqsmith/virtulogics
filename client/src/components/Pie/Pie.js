import React from 'react';
import {Pie} from 'react-chartjs-2';
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

// const state = {
//     labels: [],
//     datasets: [
//       {
//         backgroundColor: [
//           '#B21F00',
//           '#C9DE00',
//           '#2FDE00',
//           '#00A6B4',
//           '#6800B4'
//         ],
//         hoverBackgroundColor: [
//         '#501800',
//         '#4B5000',
//         '#175000',
//         '#003350',
//         '#35014F'
//         ],
//         data: []
//       }
//     ]
//   }

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
            type: 'doughnut',
            data: {
            labels: this.props.label,
            datasets: [
                {
                data: this.props.data,
                label: 'Points',
                  backgroundColor: [
                    '#696969',
                    '#A9A9A9',
                    '#2FDE00'
             
                  ],
                  hoverBackgroundColor: [
                  '#808080',
                  '#C0C0C0',
                  '#175000'

                  ],
               
                }
            ]
        }
    });
        // console.log(Object.values(this.props.data));
        // console.log(this.myChart);
        // console.log( this.chartRef);
       
        
    }

    render() {
            return  (
         
            <canvas 
            {...this.props} 
            ref={this.chartRef}
            data={this.props.data}
             />
            )
    }
}

export default PieComponent;
// const state = {
//   labels: ['lab-esxi-01.vdilab.int', 'lab-esxi-02.vdilab.int', 'Total'],
//   datasets: [
//     {
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: [15, 46, 80]
//     }
//   ]
// }
// console.log(this.state);
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <Pie
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Total Memory Usage',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         /> */}
//         <Pie />

//       </div>
//     );
//   }
// }

