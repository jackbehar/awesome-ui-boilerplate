import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

function AuiButton(props) {
    const WrappedButton = ReactWrapper('aui-button');
    
    return (
        <WrappedButton {...props}/>
    )
};

AuiButton.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(["primary", "accent", "light"]),
    size: PropTypes.oneOf(["small", "default", "large"]),
    shape: PropTypes.oneOf(["square", "round"]),
    variant: PropTypes.oneOf(["outlined", "contained"]),
    Type: PropTypes.oneOf(["button", "reset", "submit"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

AuiButton.defaultProps = {
    // children: "Click Me",
    // variant: "raised",
    // disabled: false,
};

export { AuiButton as default };