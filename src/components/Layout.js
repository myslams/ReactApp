'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
        <div>
        <br /><br />
      <div className="ui container">
      <div className="ui raised segment">{this.props.children}</div>
       </div>
        <br /><br />
      </div>
    );
  }
}
