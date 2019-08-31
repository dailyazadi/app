import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/ur';
import './App.css';
import Header from './components/Header';
import { MENUS_URL, API_URL, MENUS, POSTS } from './constants';
import HomeView from './components/Home/HomeView';
import Footer from './components/Footer';
import { ROUTES } from './constants';
import Epaper from './components/Epaper';
import Multimedia from './components/Multimedia';
import SingleStory from './components/Home/SingleStory';

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
      <div>
        <Header menus={menus} currentDate={currentDate} />
        <Router>
          <div className="bg-white">
            <div className="pl-4 pr-4">
              <Route
                path={ROUTES.home}
                exact
                render={props => <HomeView posts={posts} />}
              />
              <Route path={ROUTES.post} component={SingleStory} />
              <Route path={ROUTES.epaper} component={Epaper} />
              <Route path={ROUTES.multimedia} component={Multimedia} />
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
