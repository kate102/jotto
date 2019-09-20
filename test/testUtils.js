import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}
/**
 * Functional react component for congratulatory message.
 * @function
 * @param
 * @returns {JSXElement} - Rendered component (or null if `success` prop is ...)
 */

export const findByTestAttr = (wrapper, val ) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}