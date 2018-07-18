import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Layout from 'components/Layout';
import './globalStyles.js';
import store from './redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    );
  }
}

export default App;
