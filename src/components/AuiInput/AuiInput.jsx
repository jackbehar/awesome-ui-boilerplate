import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

function AuiInput(props) {
    const WrappedInput = ReactWrapper('aui-input');
    
    return (
        <WrappedInput {...props}/>
    )
};

AuiInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export { AuiInput as default };