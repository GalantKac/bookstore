import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

configure({adapter: new Adapter()});

describe('Inventory tests', () => {
    it('Inventory render without a problem', () => {
        const div = document.createElement('div');
        const books = [];
        ReactDOM.render(<Inventory books={books}/>, div);
        ReactDOM.unmountComponentAtNode(div); // zwalnianie pamieci
    })

    it('Snapshot Matches', () => {
        const books = [];
        const wrapper = shallow(<Inventory books={books}/>); 
        expect(wrapper).toMatchSnapshot();
    })
})