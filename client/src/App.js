import React from 'react';
import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/ur';
import './App.css';
import Header from './components/Header';
import { MENUS_URL, API_URL, MENUS, POSTS } from './constants';
import HomeView from './components/Home/HomeView';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: MENUS,
      posts: POSTS,
      currentDate: moment().format('LL')
    };
  }

  componentDidMount() {
    //#region axios get
    // axios.get(MENUS_URL).then(res => {
    //   const { data } = res;
    //   const { items } = data;
    //   console.log(items);
    //   const menus = items.map(item => {
    //     const menu = {
    //       title: item.title,
    //       url: item.url
    //     };
    //     return menu;
    //   });
    //   this.setState({ menus });
    // });
    // axios.get(API_URL).then(res => {
    //   const { data } = res;
    //   this.setState({
    //     posts: data
    //   });
    // });
    //#endregion
  }

  render() {
    const { menus, posts, currentDate } = this.state;
    console.log(currentDate);
    return (
      <div className="bg-white">
        <div className="pl-4 pr-4">
          <Header menus={menus} currentDate={currentDate} />
          <HomeView posts={posts} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
