import React from 'react';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import {
    expect
} from 'chai';
import spy from 'sinon'
import ImageViewer from '../src/components/ImageViewer';

describe('Tests for Image Viewer component', function () {
               it('Component exists test', function () {
                    var wrapper = mount( <ImageViewer> </ImageViewer>);
                    expect(wrapper).to.exist;
                });
                it('on passing images', function () {
                    var imageList=[];
                   var wrapper = mount( <ImageViewer imageList = {imageList} > </ImageViewer>);
                    expect(wrapper.find('.no-image')).to.have.lengthOf(1);
                });
                it('on getting error', function () {
                    var imageList="error";
                   var wrapper = mount( <ImageViewer imageList = {imageList} > </ImageViewer>);
                    expect(wrapper.find('.loader')).to.not.have.lengthOf(1);
                    expect(wrapper.find('.error')).to.have.lengthOf(1);
                });
                it('on getting images', function () {
                    var imageList=[{
                                "media": {"m":"mock_image"}
                                
                        },{
                                "media": {"m":"mock_image"}
                                
                        }];
                   var wrapper = mount( <ImageViewer imageList = {imageList} > </ImageViewer>);
                    expect(wrapper.find('.loader')).to.not.have.lengthOf(1);
                    expect(wrapper.find('.error')).to.not.have.lengthOf(1);
                    expect(wrapper.find('.image')).to.have.lengthOf(2);
                    
                });
            });