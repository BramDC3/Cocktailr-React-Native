import React from 'react';
import App from './src';

export default class AppContainer extends React.Component {
  state = {
    loaded: false,
  };

  async componentDidMount() {
    // await network calls
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    return loaded ? <App /> : null;
  }
}
