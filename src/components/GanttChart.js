import React from 'react';
import Plot from 'react-plotly.js';

class GanttChart extends React.Component {
  render() {

    const trace1 = {
      x: ['2009-01-01', '2009-02-28'], 
      y: [0, 0], 
      marker: {color: 'white'}, 
      name: '', 
      type: 'scatter'
    };
    const trace2 = {
      x: ['2009-03-05', '2009-04-15'], 
      y: [1, 1], 
      marker: {color: 'white'}, 
      name: '', 
      type: 'scatter'
    };
    const trace3 = {
      x: ['2009-02-20 12:40:00', '2009-05-30 15:12:44'], 
      y: [2, 2], 
      marker: {color: 'white'}, 
      name: '', 
      type: 'scatter'
    };
    const trace4 = {
      x: ['2009-03-10', '2009-04-30'], 
      y: [3, 3], 
      marker: {color: 'white'}, 
      name: '', 
      type: 'scatter'
    };
    const trace5 = {
      x: ['2009-02-25', '2009-06-30'], 
      y: [4, 4], 
      marker: {color: 'white'}, 
      name: '', 
      type: 'scatter'
    };
    const trace6 = {
      x: ['2009-02-25', '2009-02-25'], 
      y: [4, 4], 
      marker: {
        cmax: 100, 
        cmin: 0, 
        color: 'white', 
        colorscale: [['0', 'rgb(51.0, 63.0, 68.0)'], ['1', 'rgb(147.0, 228.0, 193.0)']], 
        showscale: true
      }, 
      name: '', 
      type: 'scatter'
    };
    const data = [trace1, trace2, trace3, trace4, trace5, trace6];
    const layout = {
      height: 600, 
      hovermode: 'closest', 
      shapes: [
        {
          fillcolor: 'rgb(73.08, 100.95, 96.75)', 
          line: {width: 0}, 
          opacity: 1, 
          type: 'rect', 
          x0: '2009-01-01', 
          x1: '2009-02-28', 
          xref: 'x', 
          y0: -0.2, 
          y1: 0.2, 
          yref: 'y'
        }, 
        {
          fillcolor: 'rgb(103.8, 153.75, 136.75)', 
          line: {width: 0}, 
          opacity: 1, 
          type: 'rect', 
          x0: '2009-03-05', 
          x1: '2009-04-15', 
          xref: 'x', 
          y0: 0.8, 
          y1: 1.2, 
          yref: 'y'
        }, 
        {
          fillcolor: 'rgb(144.12, 223.05, 189.25)', 
          line: {width: 0}, 
          opacity: 1, 
          type: 'rect', 
          x0: '2009-02-20 12:40:00', 
          x1: '2009-05-30 15:12:44', 
          xref: 'x', 
          y0: 1.8, 
          y1: 2.2, 
          yref: 'y'
        }, 
        {
          fillcolor: 'rgb(61.56, 81.15, 81.75)', 
          line: {width: 0}, 
          opacity: 1, 
          type: 'rect', 
          x0: '2009-03-10', 
          x1: '2009-04-30', 
          xref: 'x', 
          y0: 2.8, 
          y1: 3.2, 
          yref: 'y'
        }, 
        {
          fillcolor: 'rgb(64.44, 86.1, 85.5)', 
          line: {width: 0}, 
          opacity: 1, 
          type: 'rect', 
          x0: '2009-02-25', 
          x1: '2009-06-30', 
          xref: 'x', 
          y0: 3.8, 
          y1: 4.2, 
          yref: 'y'
        }
      ], 
      showlegend: false, 
      title: 'Gantt Chart', 
      width: 900, 
      xaxis: {
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
        zeroline: false
      }, 
      yaxis: {
        autorange: false, 
        range: [-1, 6], 
        showgrid: true, 
        ticktext: ['Job A', 'Job B', 'Job C', 'Job D', 'Job E'], 
        tickvals: [0, 1, 2, 3, 4], 
        zeroline: false
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