import React, { useEffect, useRef } from 'react';
import styles from './stats.module.scss';
import * as d3 from 'd3';
import axios from 'axios';
import { api } from '../../meta.json';

const Statistics = (props) => {
  const graphRef = useRef(null);
  const drawGraph = (dataset, width, height) => {
    const svg = d3.select(graphRef.current)
                  .append('svg')
                  .attr('width', width+100)
                  .attr('height', height+60);

    const count = dataset.map(data => data.count);
    const state = dataset.map(data => data._id);
    const barWidth = width / state.length;
    const padding = 55;

    const maxcount = d3.max(count);

    const xScale = d3.scaleBand()
                      .domain(state)
                      .range([0, width]);

    const yScale = d3.scaleLinear()
                      .domain([maxcount, 0])
                      .range([padding, height]);

    const xAxis = d3.axisBottom().scale(xScale);
    const yAxis = d3.axisLeft(yScale);

    const countScale = d3.scaleLinear()
                          .domain([0, d3.max(count)])
                          .range([padding, height]);

    svg.append('g')
       .attr('transform', `translate(${padding}, ${height})`)
       .attr('id', 'x-axis')
       .call(xAxis);

    svg.append('g')
       .attr('transform', `translate(${padding}, 0)`)
       .attr('id', 'y-axis')
       .call(yAxis);

    svg.selectAll('rect')
       .data(count.map(d => countScale(d)))
       .enter()
       .append('rect')
       .attr('x', (d, i) => xScale(state[i]))
       .attr('y', (d, i) => height + padding - d)
       .attr('width', barWidth)
       .attr('height', (d) => d-padding)
       .attr('data-count', (d, i) => dataset[i].count)
       .attr('data-state', (d, i) => dataset[i]._id)
       .attr('class', styles.bar)
       .attr('transform', `translate(${padding}, 0)`);

    svg.append('text')
      .attr('x', -260)
      .attr('y', 20)
      .attr('transform', 'rotate(-90)')
      .text('Total Voters Count');
  }

  useEffect(() => {
    axios.get(api.evoter.statistics)
      .then(res => drawGraph(res.data.result, 600, 400))
      .catch(error => console.log(error));
  }, []);
  return (
    <section>
      <h1 className="section-title">Statistics: Total Voters Statewise</h1>
      <hr />
      <div id="graph" className={styles.graph} ref={graphRef}/>
      <p>
        Note: Total States displayed in graph means the voters of those states are added only.
        Add Voters from more states to show them here.
      </p>
    </section>
  );
};

export default Statistics;
