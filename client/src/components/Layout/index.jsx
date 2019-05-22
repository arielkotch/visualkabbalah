import React from 'react';
import {Row, Col} from 'react-bootstrap';
/**
 *
 *
 * @param {any} {children}
 * @returns
 */
export const Layout = ({children,...props }) => {
    return (
        <React.Fragment>
            <Row>
            {
                React.Children.map(children,(child, index) => {                    
                    return <Col {...props} key={index}>{child}</Col>
                })
            }
            </Row>
        </React.Fragment>
    );
}
