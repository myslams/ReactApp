'use strict';

import React from 'react';
//Shows the images passed to it in a gallery.
export default class ImageViewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let images = this.props.imageList;
        // if error recieved while getting images show error msg.
        if (images==="error"){
            return  <div className="ui error message">
                    <div className="header">
                    Error loading images
                    </div>
                    </div>;
        }
        // if images not set show loading.
        if (!images) {
            return  <div className="ui active inverted dimmer">
                    <div className="ui medium text loader">Loading</div>
                    </div>;
		}
        // if images revieved are empty array show no images found.
        if (images.length===0) {
            return  <div className="ui error no-image message">
                    <div className="header">
                    No images found
                    </div>
                    </div>;
		}
        // if atlest one image found create slides to render images.
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
