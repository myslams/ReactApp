import React from 'react';
import axios from 'axios';
import Request from 'request'
import {
    shallow,
    mount,
    render
} from 'enzyme';
import {
    expect
} from 'chai';
import MockAdapter from 'axios-mock-adapter';
import IndexPage from '../src/components/IndexPage';

describe('Tests for index page component', function () {
            const wrapper = mount( < IndexPage > < /IndexPage>);
                it('Component exists test', function () {
                    expect(wrapper).to.exist;
                }); 
    
                it('axios mock for success request', function (done) {
                            let mockAdapter = new MockAdapter(axios);
                            var tags;
                            mockAdapter.onGet('./feeds/'+tags).reply(200,{ "items":[{
                                "media": {"m":"mock_image"}
                                
                        },{
                                "media": {"m":"mock_image"}
                                
                        }]});

                            const mockedAxiosWrapper = mount( <IndexPage> </IndexPage>);
                                mockedAxiosWrapper.update();

                                setImmediate(() => {
                                    expect(mockedAxiosWrapper.instance().state.imageList.items).to.have.lengthOf(2);
                                    done()

                                })
                    });
    it('axios mock for error request', function (done) {
                            let mockAdapter = new MockAdapter(axios);
                            var tags;
                            mockAdapter.onGet('./feeds/'+tags).reply(500,{});

                            const mockedAxiosWrapper = mount( <IndexPage> </IndexPage>);
                                mockedAxiosWrapper.update();

                                setImmediate(() => {
                                   
                              expect(mockedAxiosWrapper.instance().state.imageList.items).to.equal("error");
                                    done()

                                })
                    });
            });