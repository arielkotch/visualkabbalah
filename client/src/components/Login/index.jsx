import React from 'react';

import {Form, Row, Col, Button, Padding} from './styled.jsx';


/**
 * 
 * 
 * @param {any} {labels, buttonText} 
 * @returns 
 */
const renderLoginButton=(labels,index,buttonText)=>((labels.length-1===index)?(<Button size="sm" variant="secondary">{buttonText}</Button>):(null))

export const Login = ({labels, buttonText}) => {
    return (
        <Form inline >
            <Row>
                {labels.map((placeholder, index) => {
                    return (
                        <Form.Group>
                            <Form.Control size="sm" key={index} placeholder={placeholder}/>
                            <Padding/>
                            {renderLoginButton(labels,index,buttonText)}
                        </Form.Group >
                    );
                })
}
              
            </Row>
        </Form >

    );
}

export default Login;
