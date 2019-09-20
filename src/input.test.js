import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';


/**
 * 
 * @param {*} initialState 
 */

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive()
    return wrapper;
;}

describe('render', () => {
    describe('word has not been guessed', () => {
        test('it renders the component without error', () => {

        })
        test('it renders the input box', () => {

        })
        test('it renders the submit button', () => {

        })
    })
    describe('word has been guessed', () => {
        
    })
})

describe('update state', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = { success: false };
        wrapper = setup(initialState);
    });
    test('it renders the component without error', () => {
        const component = findByTestAttr(wrapper, "component-input");
        expect(component.length).toBe(1);
    })
    test('it does not render the input box', () => {
        const component = findByTestAttr(wrapper, "input-box");
        expect(component.length).toBe(1);
    })
    test('it does not render the submit button', () => {
        const component = findByTestAttr(wrapper, "submit-button");
        expect(component.length).toBe(1);
    })
})
