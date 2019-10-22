import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      page: 0,
      compId: -1
    };
  }

  viewDetail = (id) => {
    this.setState({compId: id});
  };

  setPage = (currPage) => {
    this.setState({page: currPage});
    this.setState({compId: -1});
  };

  doLogin = () => {
    this.setState({login: true});
    this.setState({compId: -1});
  };

  doLogout = () => {
    this.setState({login: false});
    this.setState({compId: -1});
  };

  render() {
    return [
      <Header doLogout={this.doLogout} login={this.state.login} setPage={this.setPage} page={this.state.page}/>,
      <Content doLogin={this.doLogin} login={this.state.login} page={this.state.page} compId={this.state.compId} viewDetail={this.viewDetail}/>
    ];
  }
}

export default App;