import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import { MENUS_URL, API_URL } from './constants';
import HomeView from './components/Home/HomeView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      posts: []
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

    axios.get(API_URL).then(res => {
      const { data } = res;
      this.setState({
        posts: data
      });
    });
  }

  render() {
    const { menus, posts } = this.state;
    return (
      <div className="pl-4 pr-4 bg-white">
        <Header menus={menus} />
        <HomeView posts={posts} />
      </div>
    );
  }
}

export default App;
