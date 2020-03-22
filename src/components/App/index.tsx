import React from 'react';
import { Layout, Menu } from 'antd';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import Home from '../Home';
import Report from '../Report';

const { Header, Content } = Layout;

interface IState {
  token: string;
}

export default class App extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { token: '12345' };
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={this.handleMenu}
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Report</Menu.Item>
              <Menu.Item key="3">Awareness</Menu.Item>
              <Menu.Item key="4">Feedback</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ marginTop: '64px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/report*" component={Report} />
              <Redirect to="/" />
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }

  handleMenu = ({ key }: { key: string }) => {
    if (key === '1') {
      this.props.history.push({ pathname: '/' });
    }

    if (key === '2') {
      this.props.history.push({ pathname: '/report' });
    }

    if (key === '3') {
      this.props.history.push({ pathname: '/awareness' });
    }

    if (key === '4') {
      this.props.history.push({ pathname: '/feedback' });
    }
  };
}
