import React, { Component, Suspense, lazy, createContext } from "react";
import { Route, Link } from "react-router-dom";

// import App from './App';
// import BarCharts from "./BarCharts";
// import AreaChart from "./AreaChart";
// import BarCharts1 from "./BarCharts1";
const BarCharts = lazy(() => import("./BarCharts"));
const AreaChart = lazy(() => import("./AreaChart"));
const BarCharts1 = lazy(() => import("./BarCharts1"));

const initialState = {
  name: "",
  age: 0
};

const ApplicationContext = createContext(initialState);

const { Provider, Consumer } = ApplicationContext;

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Wes",
      age: 100
    };
  }

  // componentDidMount() {
  //   const showImage = "";
  //   this.props.match.path === "/" &&
  //     import("./BarCharts").then(da => this.setState({ showImage: da }));
  // }

  updateAge = age => {
    this.setState({ age });
  };

  render() {
    return (
      <Provider value={{ ...this.state, updateAge: this.updateAge }}>
        <div>
          <ul>
            <li>
              <Link to="/">BarCharts stacked</Link>
            </li>
            <li>
              <Link to="/AreaChart">AreaChart stacked</Link>
            </li>
            <li>
              <Link to="/BarCharts">BarCharts</Link>
            </li>
          </ul>
          {console.log("ssssssssss", this.state.showImage)}
          <hr />
          <Route
            exact
            path="/"
            render={props => (
              <Suspense fallback={<div>Loading...</div>}>
                <BarCharts {...props}>{"aaaaaaaaa"}</BarCharts>
              </Suspense>
            )}
            // component={BarCharts}
          />
          <Route
            path="/AreaChart"
            render={props => (
              <Suspense fallback={<div>Loading...</div>}>
                <AreaChart {...props} />
              </Suspense>
            )}
            // component={AreaChart}
          />
          <Route
            path="/BarCharts"
            render={props => (
              <Suspense fallback={<div>Loading...</div>}>
                <BarCharts1 {...props} />
              </Suspense>
            )}
            // component={BarCharts1}
          />
        </div>
      </Provider>
    );
  }
}

export default App2;
export { Provider, Consumer };
