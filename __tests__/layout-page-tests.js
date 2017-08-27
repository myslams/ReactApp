import React from 'react';
import Request from 'request'
import {
    shallow,
    mount,
    render
} from 'enzyme';
import {
    expect
} from 'chai';

import Layout from '../src/components/Layout';

describe('Tests for Layout page component', function () {
            const wrapper = mount( <Layout> </Layout>);
                it('Component exists test', function () {
                    expect(wrapper).to.exist;
                    expect(wrapper.find('.ui .container')).to.exist;
                });
            });