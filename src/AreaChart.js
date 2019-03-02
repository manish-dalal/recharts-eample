import React, { Component } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  Area
} from "recharts";
// import { scaleOrdinal } from "d3-scale";
import { data, dataGen, dataGenRan } from "./data";

const renderLegend = props => {
  const { payload } = props;

  return (
    <div>
      {payload.map((entry, index) => (
        <span key={`item-${index}`}>{entry.value}</span>
      ))}
    </div>
  );
};

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
  constructor(props) {
    super(props);
    this.state = {
      data: dataGen(),
      data1: dataGenRan(),
      opacity: {
        amt: 1,
        uvError: 1,
        uv: 1,
        pv: 1,
        pvError: 1
      }
    };
  }

  // componentWillMount() {
  //   let options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       data: `#include <stdio.h>
  //     int main()
  //     {
  //        printf("Hello HelloHelloHelloHelloHelloHelloHello, World!");
  //        printf("Hello World World World WorldWorld World World World World\n");
  //        return 0;
  //     }`
  //     })
  //   };
  //   //console.log("LoginForm, options", options);
  //   fetch("http://192.168.100.243:1415/compiler/c", options)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("options =======", options);

  //       console.log("LoginForm, data fetch", data);
  //       if (data.bit === 1) {
  //         this.setState({
  //           emailMsg: "Email not register",
  //           passwordMsg: ""
  //         });
  //       } else if (data.bit === 2) {
  //         this.setState({ emailMsg: "", passwordMsg: "Invalid Password" });
  //       } else if (data.bit === 3) {
  //         this.setState({ emailMsg: "Email not verified yet" });
  //       } else if (data.bit === 4) {
  //         localStorage.setItem("userLocal", data.email);
  //         this.props.history.push("/index");
  //       }
  //     });
  // }

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

  render() {
    const { opacity } = this.state;

    console.log("render");

    return (
      <div className="BarChart">
        <ComposedChart
          width={1200}
          height={500}
          data={this.state.data}
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
              // props: { fontSize: 10, fontWeight: 200 }
            }}
          />
          <Tooltip />
          <CartesianGrid
            vertical={false}
            //  stroke="#f5f5f5"
          />
          <Legend
            iconSize={20}
            iconType="rect"
            // content={renderLegend}
            payload={[
              {
                id: "uvError",
                value: "pppv",
                type: "rect",
                color: "#8FAADC"
              },
              { id: "uv", value: "uuuv", type: "rect", color: "#203864" },
              {
                id: "uvError",
                value: "pppv",
                type: "rect",
                color: "#A9D18E"
              },
              { id: "pv", value: "uuuv", type: "rect", color: "#FFC000" },
              {
                id: "pvError",
                value: "pppv",
                type: "rect",
                color: "#5B9BD5"
              },
              { id: "amt", value: "uuuv", type: "line", color: "#70AD47" }
            ]}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <Area
            type="linear"
            stackId="0"
            dataKey="uvError"
            fill="#8FAADC"
            barSize={20}
            stroke="black"
            // strokeOpacity={opacity.uvError}
          />
          <Area
            type="linear"
            stackId="0"
            dataKey="uv"
            fill="#203864"
            stroke="black"
            // strokeOpacity={opacity.uv}
          />
          <Area
            type="linear"
            stackId="0"
            dataKey="uvError"
            fill="#A9D18E"
            stroke="black"
            // strokeOpacity={opacity.uvError}
          />
          <Area
            type="linear"
            stackId="0"
            dataKey="pv"
            fill="#FFC000"
            stroke="black"
            // strokeOpacity={opacity.pv}
          />
          <Area
            type="linear"
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
    );
  }
}

export default BarCharts;
