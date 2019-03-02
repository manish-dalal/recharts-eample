import React, { Component } from "react";
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  Line
} from "recharts";
// import { scaleOrdinal } from "d3-scale";
import { data } from "./data";
import { Consumer } from "./App2";

class CustomizedAxisTick extends Component {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={5}
          textAnchor="end"
          fill="#666"
          transform="rotate(-90)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

class BarCharts extends Component {
  // static contextType = Consumer;

  constructor(props) {
    super(props);
    this.state = {
      opacity: {
        amt: 1,
        uvError: 1,
        uv: 1,
        pv: 1,
        pvError: 1
      }
    };
  }

  handleMouseEnter = o => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.4 }
    });
  };

  handleMouseLeave = o => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 }
    });
  };

  componentWillMount() {
    console.log("this.context", this.context);
  }

  render() {
    const { opacity } = this.state;

    console.log("render", this.props.children);

    return (
      <Consumer>
        {({ name, updateAge }) => (
          <div className="BarChart">
            {console.log("context===>>>>", name, "updateAge", updateAge)}
            <ComposedChart
              width={1200}
              height={500}
              data={data}
              margin={{ top: 20, right: 20, bottom: 5, left: 30 }}
            >
              <XAxis
                dataKey="name"
                // angle={-90}
                // textAnchor="end"
                tickLine={false}
                height={100}
                tick={<CustomizedAxisTick />}
                interval={0}
                // tick={{ fontFamily: "sans-serif", color: "red", height: 500 }}
                // padding={{ top: 37, bottom: 37 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                label={{
                  value: "MWh",
                  angle: -90,
                  position: "insideLeft",
                  dx: -10
                }}
              />
              <Tooltip />
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <Legend
                iconSize={20}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              />
              <Bar
                stackId="0"
                dataKey="uvError"
                fill="#8FAADC"
                barSize={20}
                stroke="black"
                // strokeOpacity={opacity.uvError}
              />
              <Bar
                stackId="0"
                dataKey="uv"
                fill="#203864"
                stroke="black"
                // strokeOpacity={opacity.uv}
              />
              <Bar
                stackId="0"
                dataKey="uvError"
                fill="#A9D18E"
                stroke="black"
                // strokeOpacity={opacity.uvError}
              />
              <Bar
                stackId="0"
                dataKey="pv"
                fill="#FFC000"
                stroke="black"
                // strokeOpacity={opacity.pv}
              />
              <Bar
                stackId="0"
                dataKey="pvError"
                fill="#5B9BD5"
                stroke="black"
                // strokeOpacity={opacity.pvError}
              />
              <Line
                type="linear"
                dataKey="amt"
                stroke="#70AD47"
                dot={false}
                strokeWidth={2}
                // strokeOpacity={opacity.amt}
              />
            </ComposedChart>
          </div>
        )}
      </Consumer>
    );
  }
}

BarCharts.contextType = Consumer;

export default BarCharts;
