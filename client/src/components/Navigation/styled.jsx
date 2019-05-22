import styled from 'styled-components';
import {backgroundColor,textColor,fontFamily} from 'theme/index.jsx'
var bootstrap = require('react-bootstrap');


export const Navbar = styled(bootstrap.Navbar)`
  background-color:${backgroundColor};
`;

export const Nav = styled(bootstrap.Nav)`
background-color:${backgroundColor};
`;
export const NavItem = styled(bootstrap.NavItem)`
   color:${textColor};
   font-family: ${fontFamily};
`;
export const Brand = styled.h1 `
    font-family: ${fontFamily};
    font-weight: 600;
    margin-top: ${props => props.position || '0.4em'};
    font-size:${props => props.fontSize || '0.9em'};
    color: ${props => props.color || 'black'};
`;
