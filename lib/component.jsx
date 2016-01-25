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
 * @since 2.0.0
*/

import React from "react";
import Input from "itsa-react-input";

const Textarea = React.createClass({

    element(inputProps) {
        return (<textarea {...inputProps} />);
    },

    render() {
        return <Input {...this.props} element={this.element} />;
    }

});

module.exports = Textarea;
