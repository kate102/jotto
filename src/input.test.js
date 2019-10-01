import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';
// import { tsExternalModuleReference } from '@babel/types';


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

        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('it renders the component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        })
        test('it renders the input box', () => {
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(1);
        })
        test('it renders the submit button', () => {
            const component = findByTestAttr(wrapper, "submit-button");
            expect(component.length).toBe(1);
        })
    })

    describe('word has been guessed', () => {

        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test('it renders the component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        })
        test('it doesnt render the input box', () => {
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(0);
        })
        test('it doesnt render the submit button', () => {
            const component = findByTestAttr(wrapper, "submit-button");
            expect(component.length).toBe(0);
        })
    })
})

describe('redux props', () => {
    test('has success pience of state as prop', () => {
        const success = true;
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        // console.log(wrapper.instance().props)
        expect(guessWordProp).toBeInstanceOf(Function)
    })
})