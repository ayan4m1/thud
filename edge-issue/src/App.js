import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    cache: true,
    value: null
  };

  constructor(props) {
    super(props);

    this.bustCache = this.bustCache.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    if (/Edge/.test(navigator.userAgent) && this.state.cache) {
      this.setState({
        cache: false
      }, this.fetchData);
      return;
    }

    const options = (this.state.cache) ? {} : {
      headers: {
        'ApiCache-Control': 'no-cache',
        'Cache-Control': 'no-cache',
        'Expires': 0,
        'Pragma': 'no-cache'
      }
    };

    return axios.get('http://localhost:9001/api/test', options)
      .catch(console.error)
      .then((res) => {
        if (!res) return;
        console.dir(res);
        this.setState({
          cache: true,
          value: res.data.value
        });
      });
  }

  bustCache() {
    this.setState({
      cache: false
    }, this.fetchData);
  }

  render() {
    return (this.state.value) ? (
      <div className="App">
        <header className="App-header">
          <p>I am {this.state.value}</p>
          <button className="App-button" onClick={this.bustCache}>
            Bust Cache!
          </button>
        </header>
      </div>
    ) : (<div>Nope</div>);
  }
}

export default App;
