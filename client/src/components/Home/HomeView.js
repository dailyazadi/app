import React, { Component } from 'react';
import LeadStory from './LeadStory';
import Section from './Section';
import TopFour from './TopFour';
import NewsFlash from './NewsFlash';
import { SECTIONS } from '../../constants';
import SidebarContainer from './SidebarContainer';
import Editorial from './Editorial';
import SocialMediaFollow from './SocialMediaFollow';
import MultimediaSection from './MultimediaSection';

class HomeView extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="container-fluid">
        <TopFour post={posts[0]} />
        <div className="dropdown-divider border-dark mb-0 pb-0"></div>
        <div className="dropdown-divider border-dark pb-3 mt-1 pt-0"></div>
        {/* <NewsFlash post={posts[0]} /> */}
        <div className="row">
          <div className="col-md-8">
            <div className="dropdown-divider border-dark mb-0 pb-3"></div>
            <LeadStory post={posts[0]} />
            <MultimediaSection />
            {SECTIONS.map((section, index) => (
              <Section
                sectionTitle={section}
                post={posts[0]}
                posts={posts}
                key={index}
              />
            ))}
          </div>
          <div className="col-md-4 border-right-1">
            <SidebarContainer>
              <Editorial post={posts[0]} />
              <SocialMediaFollow />
            </SidebarContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
