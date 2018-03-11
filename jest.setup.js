const Enzyme = require('enzyme'); // eslint-disable-line import/no-extraneous-dependencies
const Adapter = require('enzyme-adapter-react-16'); // eslint-disable-line import/no-extraneous-dependencies
const React = require('react');

Enzyme.configure({ adapter: new Adapter() });

const { shallow, render, mount } = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
