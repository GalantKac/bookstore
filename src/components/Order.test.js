import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

configure({adapter: new Adapter()});

describe('Order tests', () => {
    it('Inventory render without a problem', () => {
        const div = document.createElement('div');
        const order = [];
        ReactDOM.render(<Order order={order} />, div);
        ReactDOM.unmountComponentAtNode(div); // zwalnianie pamieci
    })
    it('Snapshot Matches', () => {
        const order = [];
        const wrapper = shallow(<Order order={order}/>); 
        expect(wrapper).toMatchSnapshot();

    })
})