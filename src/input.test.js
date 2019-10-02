import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';
import { tsExternalModuleReference } from '@babel/types';
// instance method returns a React component


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

describe('guessWord action creator call', () => {
    let guessWordMock
    let wrapper
    const guessedWord = "train"
    beforeEach(() => {
        guessWordMock = jest.fn()
        const props = {
            guessWord: guessWordMock
        }
    wrapper = shallow(<UnconnectedInput {...props} />)

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord })
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {} })
    })

    test('calls guessWord when button is clicked', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length
        expect(guessWordCallCount).toBe(1)
    })
    test('calls guessWord with input value as arguement', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0]
        expect(guessWordArg).toBe(guessedWord)
    })
    test('input box clears on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('')
    })
})