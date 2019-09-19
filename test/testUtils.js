/**
 * Functional react component for congratulatory message.
 * @function
 * @param
 * @returns {JSXElement} - Rendered component (or null if `success` prop is ...)
 */

export const findByTestAttr = (wrapper, val ) => {
    return wrapper.find(`[data-test="${val}"]`)
}