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
import SearchBox from '../src/components/SearchBox';

describe('Tests for search box component', function () {
            var getImages=function(){}
           
            const wrapper = mount( <SearchBox searchImages = {getImages}> </SearchBox>);
                it('Component exists test', function () {
                    expect(wrapper).to.exist;
                });
                it('on click of button', function () {
                    const spy = spyOn(wrapper.instance(), 'searchImages');
                    var button=wrapper.find('.ui .button');
                    button.simulate('click');
                    expect(spy).to.have.been.called;
                });
            });