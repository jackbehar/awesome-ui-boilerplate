import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';
import { v4 as uuidv4 } from 'uuid';

function AuiText(props) {
    const WrappedText = ReactWrapper('aui-text');

    return (
        <WrappedText {...props}  />
    )
};

AuiText.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(["body1", "body2", "caption", "h1", "h2", "h3", "h4", "headline", "subheading", "title"]),
};

export { AuiText as default };