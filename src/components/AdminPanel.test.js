import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

configure({adapter: new Adapter()});

describe('AdminPanel tests', () => { // zbiera metody it
    it('AdminPanel render without a problem', () => { //czysyty 'jest' // enzym pozwala na wpinanie komponentow
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel />, div);
        ReactDOM.unmountComponentAtNode(div); // zwalnianie pamieci
    })

    it('Snapshot Matches', () => {
        const wrapper = shallow(<AdminPanel/>); // enzyme tu utworzyl komponent
        //console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();

    })
})