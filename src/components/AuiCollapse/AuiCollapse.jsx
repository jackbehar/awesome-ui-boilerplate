import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';
import { v4 as uuidv4 } from 'uuid';

function AuiCollapse(props) {
    const WrappedCollapse = ReactWrapper('aui-collapse');

    return (
        <WrappedCollapse {...props}
      width="100%"
      >
</WrappedCollapse>

    
    )
};

AuiCollapse.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
};



export { AuiCollapse as default };