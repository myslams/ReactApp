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

describe('Tests for rest api', function () {


    let chai = require('chai');
    let chaiHttp = require('chai-http');
    let should = chai.should();
    chai.use(chaiHttp)
    let server = require('../src/server');

    it('Api provides feeds test', function (done) {
        chai.request("http://localhost:3000")
            .get('/feeds')
            .end((err, res) => {
                expect(res).to.have.status(200);
                res.body.items.should.be.a('array');
                res.body.items.length.should.be.eql(20);
                done();
            });
    });
    it('Application is loaded instead of feeds test', function (done) {
        chai.request("http://localhost:3000")
            .get('')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.exist;
                done();
            });
    });

});