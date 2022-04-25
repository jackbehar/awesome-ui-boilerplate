import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';
import { v4 as uuidv4 } from 'uuid';

function AuiPaper(props) {
    const WrappedPaper = ReactWrapper('aui-paper');

    return (
        <WrappedPaper  {...props} >
            {props.children}
        </WrappedPaper>
    )
};

AuiPaper.propTypes = {
    children: PropTypes.node,
};



export { AuiPaper as default };