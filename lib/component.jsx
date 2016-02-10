"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module itsa-react-textarea
 * @class TextArea
 * @since 0.0.1
*/

import React, {PropTypes} from "react";
import Input from "itsa-react-input";

const Textarea = React.createClass({

    propTypes: {
        /**
         * Whether to autofocus the Component.
         *
         * @property autoFocus
         * @type Boolean
         * @since 0.0.1
        */
        autoFocus: PropTypes.bool,

        /**
         * The error-message that appears when the element is wrong validated.
         *
         * @property errorMsg
         * @type String
         * @since 0.0.1
        */
        errorMsg: PropTypes.string,

        /**
         * Whether the parent-form has been validated.
         * This value is needed to determine if the validate-status should be set.
         *
         * @property formValidated
         * @type Boolean
         * @since 0.0.1
        */
        formValidated: PropTypes.bool,

        /**
         * The text that should appear when the element is wrong validated.
         *
         * @property helpText
         * @type String
         * @since 0.0.1
        */
        helpText: PropTypes.string,

        /**
         * The `id` of the element.
         *
         * @property id
         * @type String
         * @since 0.0.1
        */
        id: PropTypes.string,

        /**
         * Whether to mark the Component when successfully validated.
         *
         * @property markValidated
         * @type Boolean
         * @since 0.0.1
        */
        markValidated: PropTypes.bool,

        /**
         * Whether the Component should show an validate-reclamation (star)
         *
         * @property markValidated
         * @type Boolean
         * @since 0.0.1
        */
        markRequired: PropTypes.bool,

        /**
         * The `name` for the element.
         *
         * @property name
         * @type String
         * @since 0.0.1
        */
        name: PropTypes.string,

        /**
         * The `onBlur` function, when happening on the DOM-Element.
         *
         * @property onChange
         * @type Function
         * @since 0.1.0
        */
        onBlur: PropTypes.func,

        /**
         * The `onChange` function, which should update the `state`.
         *
         * @property onChange
         * @type Function
         * @since 0.0.1
        */
        onChange: PropTypes.func.isRequired,

        /**
         * The `onClick` function, when happening on the DOM-Element.
         *
         * @property onChange
         * @type Function
         * @since 0.0.1
        */
        onClick: PropTypes.func,

        /**
         * The `onFocus` function, when happening on the DOM-Element.
         *
         * @property onChange
         * @type Function
         * @since 0.1.0
        */
        onFocus: PropTypes.func,

        /**
         * The `placeholder` for the element.
         *
         * @property placeholder
         * @type String
         * @since 0.0.1
        */
        placeholder: PropTypes.string,

        /**
         * The tabindex of the Component.
         *
         * @property type
         * @type Number
         * @since 0.0.1
        */
        tabIndex: PropTypes.number,

        /**
         * Whether the property is validated right.
         *
         * @property validated
         * @type Boolean
         * @since 0.0.1
        */
        validated: PropTypes.bool,

        /**
         * The `value` of the input-element.
         *
         * @property value
         * @type String
         * @since 0.0.1
        */
        value: PropTypes.string
    },

    /**
     * componentDidMount will call `this.activatePlaces()`;
     *
     * @method componentDidMount
     * @since 0.0.1
     */

    /**
     * Returns the rendered React-Element that serves as the source dom-element
     *
     * @method element
     * @param props {Object} props to be passed through to the Component
     * @return ReactComponent
     * @since 0.0.4
     */
    element(inputProps) {
        inputProps["aria-multiline"] = true;
        return (<textarea {...inputProps} />);
    },

    /**
     * Gets the Component"s internal state. Note, that the this is NOT Redux"s state.
     *
     * @method getInitialState
     * @return Object the Component internal initial state
     * @since 0.0.1
     */

    /**
     * Sets the focus on the Component.
     *
     * @method focus
     * @chainable
     * @since 0.0.1
     */

    /**
     * The method that is called whenever the input-Element changes its value.
     * Will update the Redux-store (signupuser.homeaddress);
     *
     * @method handleChange
     * @param e {Object} event-payload
     * @since 0.0.1
     */

    /**
     * The method that is called whenever the input-Element gets the focus.
     * It will change its internal state, so that the css looks right and
     * also any validation-messages disappear.
     *
     * @method handleFocus
     * @param e {Object} event-payload
     * @since 0.0.1
     */

    /**
     * The method that is called whenever the input-Element gets blurred.
     * It will change its internal state, so that the css looks right and
     * also any validation-messages appear.
     *
     * @method handleBlur
     * @param e {Object} event-payload
     * @since 0.0.1
     */

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 0.0.1
     */
    render() {
        return <Input {...this.props} element={this.element} />;
    }

});

module.exports = Textarea;
