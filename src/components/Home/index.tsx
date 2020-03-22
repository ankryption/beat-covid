import React from 'react';
import { Col, Input, Card, Skeleton } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ExclamationCircleOutlined, LikeOutlined } from '@ant-design/icons';

interface IState {
  data: any;
}

class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {
            infected: 5,
            location: 2,
            distance: 2,
            quarantined: 64,
          },
        ],
      });
    }, 2000);
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Col span={12}>
          <Input placeholder="search location"></Input>
        </Col>
        {data &&
          !data.length &&
          [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <Card
              style={{ margin: '16px 0' }}
              actions={[
                <>
                  <LikeOutlined />
                  Mark as correct
                </>,
                <>
                  <ExclamationCircleOutlined />
                  Report as error
                </>,
              ]}
            >
              <Skeleton avatar active />
            </Card>
          ))}
        {data &&
          data.length &&
          data.map(() => (
            <Card
              style={{ margin: '16px 0' }}
              actions={[
                <>
                  <LikeOutlined />
                  Mark as correct
                </>,
                <>
                  <ExclamationCircleOutlined />
                  Report as error
                </>,
              ]}
            >
              <Skeleton avatar active />
            </Card>
          ))}{' '}
      </>
    );
  }
}

export default withRouter(Home);
