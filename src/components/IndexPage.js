'use strict';

import React from 'react';
import config from '../config';
import SearchBox from './SearchBox';
import ImageViewer from './ImageViewer';
import ImageService from '../services/ImageService';
let imageService = new ImageService(config.imageService.endpointUrl);
/*
This react coponent is the parent component. It recieves the tags from the searchbox component. It sends the images to show to the imageviewer component. It is responsible to take tags and get the imagedata based on these tags and give it to the imageviewer component.
*/
export default class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        // It sets imageList in its state so that it can be passed to its children.
        this.state = {
            imageList: []
        };
        this.getImages=this.getImages.bind(this);
    }
// this function gets the images from image service based on tags. If no tags are specified all images are recieved.
    getImages(tags){
      this.setState({
          imageList: []
      });
      imageService.getData(tags)
            .then(imageData => {
            // When the data is received successfully by back end service and status is success. Updates the imageList.
                if (imageData.status === "success") {
                    var imageList = imageData.res;

                    this.setState({
                        imageList
                    });
                } else if (imageData.status === "error") { // When service return status error writes error in imageList.
                    var imageList = {"items":"error"};
                    this.setState({
                        imageList
                    })
                }
            });

    }
    // calls the getimages function without tags as sson as component is loaded.
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
