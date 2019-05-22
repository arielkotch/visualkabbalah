import styled from 'styled-components';
import {backgroundColor,textColor,fontFamily} from 'theme/index'

var bootstrap = require('react-bootstrap');


export const Form = styled(bootstrap.Form)`
    color:${textColor};
    background-color:${backgroundColor};
    font-family:${fontFamily};
    padding-left:25%;
`;
export const Padding = styled.span`
    padding-left:0.5em;
`;
export const Row = styled(bootstrap.Row)`

`;
export const Col = styled(bootstrap.Col)`

`;
export const Button = styled(bootstrap.Button)`

`;
export const Control = styled(bootstrap.Form.Control)`

`;
