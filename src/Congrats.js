import React from 'react';
import PropTypes from 'prop-types';


/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSXElement} - Rendered component (or null if `success` prop is ...)
 */

export default (props) => {
        if (props.success) {
            return (
                <div data-test="component-congrats">
                    <span data-test="component-message">
                        Congratulations! You guessed the word!
                    </span>
                </div>
            );
        } else {
            return (
                <div data-test="component-congrats"></div>
            )
        }
}
