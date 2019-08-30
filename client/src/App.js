import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import { MENUS_URL } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    axios.get(MENUS_URL).then(res => {
      const { data } = res;
      const { items } = data;
      console.log(items);
      const menus = items.map(item => {
        const menu = {
          title: item.title,
          url: item.url
        };

        return menu;
      });
      this.setState({ menus });
    });
  }

  render() {
    const { menus } = this.state;
    return (
      <div className="App">
        <Header menus={menus} />
      </div>
    );
  }
}

export default App;
