import React from 'react';
import { Card, Col, Row, Form, Input, Checkbox, Button, InputNumber } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps {
  infected: any;
  location: any;
  distance: any;
  quarantined: any;
}

interface IState {
  infected: any;
  location: any;
  distance: any;
  quarantined: any;
}

class Report extends React.Component<IProps & RouteComponentProps, IState> {
  constructor(props: IProps & RouteComponentProps) {
    super(props);
    this.state = {
      location: this.props.location || 0,
      infected: this.props.infected || 0,
      distance: this.props.distance || 0,
      quarantined: this.props.quarantined || 0,
    };
  }

  render() {
    return (
      <Col span={12} offset={6} style={{ marginTop: '16px' }}>
        <Card title="Default size card">
          <Form
            name="basic"
            layout="vertical"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Your location" extra="please allow when prompted">
              <Input />
            </Form.Item>

            <Row>
              <Col span={12}>
                <Form.Item label="Number of infected cases">
                  <InputNumber value={this.state.infected} onChange={this.handleInfected} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Number of quarantined cases">
                  <InputNumber value={this.state.quarantined} onChange={this.handleQuarantined} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Distance from your location (optional)" extra="in km">
              <Input />
            </Form.Item>

            <Form.Item label="Shortages / Requirements">
              <Row>
                <Checkbox>Sanitization</Checkbox>
              </Row>
              <Row>
                <Checkbox>medical needs</Checkbox>
              </Row>
              <Row>
                <Checkbox>essentials/groceries</Checkbox>
              </Row>
              <Row>
                <Checkbox>dead body clearing</Checkbox>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    );
  }

  handleInfected = (value: any) => {
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;

    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setState({ infected: value });
    }
  };

  handleQuarantined = (value: any) => {
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;

    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setState({ quarantined: value });
    }
  };
}

export default withRouter(Report);
