import React from 'react';
import Plot from 'react-plotly.js';

class GanttChart extends React.Component {
  render() {

    const trace1 = {
      x: ['2009-01-01', '2009-02-28'], 
      y: [0, 0],
      yaxis: 'y2',
      name: '', 
      type: 'scatter'
    };
    const trace2 = {
      x: ['2009-03-05', '2009-04-15'], 
      y: [-1, -1], 
      yaxis: 'y2',
      name: '', 
      type: 'scatter'
    };
    const trace3 = {
      x: ['2009-02-20 12:40:00', '2009-05-30 15:12:44'], 
      y: [-2, -2], 
      yaxis: 'y2',
      name: '', 
      type: 'scatter'
    };
    const trace4 = {
      x: ['2009-03-10', '2009-04-30'], 
      y: [-3, -3], 
      yaxis: 'y2',
      name: '', 
      type: 'scatter'
    };
    const trace5 = {
      x: ['2009-02-25', '2009-06-30'], 
      y: [-4, -4],
      yaxis: 'y2',
      name: '', 
      type: 'scatter'
    };
    const dummy = {
      x: ['2009-01-01', '2009-02-28'], 
      y: [0, -4],
      yaxis: 'y',
      name: '', 
      type: 'scatter'
    };
    
    const data = [trace1, trace2, trace3, trace4, trace5, dummy];
    
    const layout = {
      height: 600, 
      hovermode: 'closest', 
      showlegend: false, 
      title: 'Gantt Chart', 
      width: 1100, 
      xaxis: {
        domain: [0.2, 1.0],
        rangeselector: {buttons: [
            {
              count: 7, 
              label: '1w', 
              step: 'day', 
              stepmode: 'backward'
            }, 
            {
              count: 1, 
              label: '1m', 
              step: 'month', 
              stepmode: 'backward'
            }, 
            {
              count: 6, 
              label: '6m', 
              step: 'month', 
              stepmode: 'backward'
            }, 
            {
              count: 1, 
              label: 'YTD', 
              step: 'year', 
              stepmode: 'todate'
            }, 
            {
              count: 1, 
              label: '1y', 
              step: 'year', 
              stepmode: 'backward'
            }, 
            {step: 'all'}
          ]}, 
        showgrid: true, 
        type: 'date',
        tickformat: "%Y/%m/%d-%H:%M:%S", 
        zeroline: false
      },
      annotations: [{
        xref: 'paper',
        yref: 'paper',
        x: 0.2,
        xanchor: 'right',
        y: 1,
        yanchor: 'bottom',
        text: 'PRIORITY',
        showarrow: false
      }, {
        xref: 'paper',
        yref: 'paper',
        x: 0.1,
        xanchor: 'right',
        y: 1,
        yanchor: 'bottom',
        text: 'JOB',
        showarrow: false
      }],
      yaxis: {
        showgrid: true, 
        ticktext: ['A', 'B', 'A', 'S', 'B'],
        tickvals: [0, -1, -2, -3, -4],
        zeroline: false
      },
      yaxis2: {
        anchor: 'y',
        scaleanchor: 'y',
        ticktext: ['Job A', 'Job B', 'Job C', 'Job D', 'Job E'],
        tickvals: [0, -1, -2, -3, -4], 
        overlaying: 'free',
        side: 'left',
        zeroline: false,
        position: 0.1
      }
    };

    return (
      <Plot
        data={data}
        layout={layout}
      />
    );
  }
}

export default GanttChart;