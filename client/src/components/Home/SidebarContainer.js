import React, { Component } from 'react';

class SidebarContainer extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default SidebarContainer;
