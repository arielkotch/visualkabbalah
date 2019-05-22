import React from 'react';
import {Container} from 'react-bootstrap';
/**
 * 
 * 
 * @param {any} {children} 
 */
export const Panel = ({children,...props}) => (
    <React.Fragment>
            <Container {...props} fluid>
                 {children}
            </Container>
    </React.Fragment>
);

export default Panel;