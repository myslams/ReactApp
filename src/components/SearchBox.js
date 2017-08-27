'use strict';

import React from 'react';
// comtains the input search field in which we enter tags
export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.searchImages=this.searchImages.bind(this);
    }
    // called when user clicks search button. In turn calls method of parent with tags.
    searchImages() {
    this.props.searchImages(this.input.value);
    }

  render() {
        return (
            <div>
            <div className="ui fluid action input">
            <input ref={(input) => this.input = input} type="text"  placeholder="Search..." />
            <button onClick={this.searchImages} className="ui button">Search</button>
            </div>
            </div>
    );
  }
}
