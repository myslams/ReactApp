'use strict';

import React from 'react';

export default class ImageViewer extends React.Component {

    constructor(props) {
        super(props);
        }

  render() {
      let images = this.props.imageList;
      if (images==="error"){
            return  <div className="ui error message">
                    <div className="header">
                    Error loading images
                    </div>
                    </div>;
    }
      if (!images || images.length === 0) {
            return  <div className="ui active inverted dimmer">
                    <div className="ui medium text loader">Loading</div>
                    </div>;
		}

      let slides =[];
      slides = images.map(image => {
          return (

      <img className="ui bordered image" src={image.media.m}/>

          );
      });
    return (
        <div>

   <div id="photos">
         {slides}
  </div>

        </div>
    );
  }
}
