import React from "react";
// import { Input, Button, Spin, Empty, message } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IState {
}

class Report extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
          <p>Report</p>
    );
  }
}

export default withRouter(Report);
