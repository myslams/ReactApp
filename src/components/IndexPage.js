'use strict';

import React from 'react';
import config from '../config';
import SearchBox from './SearchBox';
import ImageViewer from './ImageViewer';
import ImageService from '../services/ImageService';
let imageService = new ImageService(config.vodService.endpointUrl);
export default class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        // state gets keyPressed from parent.It sets it in its state so that it can be passed to its children.
        this.state = {
            imageList: []
        };
        this.getImages=this.getImages.bind(this);
    }

    getImages(tags){
      this.setState({
          imageList: []
      });
      imageService.getData(tags)
            .then(imageData => {
           console.log("imageData");
                    console.log(imageData);
            // When the data is received successfully by back end service and status is success. Updates the videoList.
                if (imageData.status === "success") {
                    var imageList = imageData.res;

                    this.setState({
                        imageList
                    });
                    console.log("this.state");
                    console.log(this.state);
                } else if (imageData.status === "error") { // When service return status error writes error in videoList.
                    var imageList = {"items":"error"};
                    this.setState({
                        imageList
                    })
                }
            });

    }

     componentDidMount() {
        this.getImages();
    }


  render() {
    return (
        <div>
       <SearchBox searchImages = {this.getImages}></SearchBox>
        <br />
        <ImageViewer imageList = {this.state.imageList.items} ></ImageViewer>
      </div>
    );
  }
}
