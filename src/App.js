import React from "react";
import { DatePicker, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";
require("moment-precise-range-plugin");

export default class App extends React.Component {
  state = {
    date1: null,
    date2: null,
    diff: null,
  };

  componentDidMount() {}

  render() {
    return (
      <div style={{ width: 500, margin: "100px auto 0" }}>
        <Row>
          <Col span={24} className="text-center">
            <h1>Calculate date difference</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} className="text-center">
            <DatePicker
              onChange={(date1, ds) => {
                this.setState({ date1: ds }, () => {
                  this.state.date2 &&
                    this.setState({
                      diff: moment.preciseDiff(this.state.date2, ds),
                    });
                });
              }}
            />
          </Col>
          <Col span={12} className="text-center">
            <DatePicker
              onChange={(date2, ds) => {
                this.setState({ date2: ds }, () => {
                  this.state.date1 &&
                    this.setState({
                      diff: moment.preciseDiff(this.state.date1, ds),
                    });
                });
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24} className="text-center">
            <h1 className="m-t-05em">{this.state.diff}</h1>
          </Col>
        </Row>
      </div>
    );
  }
}
