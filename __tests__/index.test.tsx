import { shallow } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index';

describe('With React Testing Library', () => {
  it('Shows welcome message', () => {
    const app = shallow(<App />)

    expect(app.find('div').text()).toEqual('Welcome to next.js!');
  })
})

describe('With Snapshot testing', () => {
  it('Should match Snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
