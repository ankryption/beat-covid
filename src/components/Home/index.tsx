import React from 'react';
import { Col, Input, Card, Skeleton } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IState {}

class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Col span={12}>
          <Input placeholder="search your location"></Input>
        </Col>
        {[1, 2, 3, 4].map(() => (
          <Card style={{ margin: '16px 0' }}>
            <Skeleton avatar active />
          </Card>
        ))}
      </>
    );
  }
}

export default withRouter(Home);
