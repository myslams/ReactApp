'use strict';

import React from 'react';
//require('../views/style.scss');
//import styles from '../views/style.css';
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
      if (!images) {
            return  <div className="ui active inverted dimmer">
                    <div className="ui medium text loader">Loading</div>
                    </div>;
		}
      
      if (images.length===0) {
            return  <div className="ui error no-image message">
                    <div className="header">
                    No images found
                    </div>
                    </div>;
		}
      let slides =[];
      slides = images.map((image,index) => {
          return (

      <img key={index} className="ui bordered image" src={image.media.m}/>

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
