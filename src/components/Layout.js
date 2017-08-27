'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
        <div>
        <br /><br />
      <div className="ui container">
      <div className="ui raised segment">
         <h2 className="ui header">
  <img className="ui image" src="http://www.cubicleapps.com/assets/flickr-icon-58cd624d0a24be66adb309f5a1b24f53.png"/>
  <div className="content">
    Flickr feed viewer and search
  </div>
</h2>
        {this.props.children}
        </div>
       </div>
        <br /><br />
      </div>
    );
  }
}
