import styled from 'styled-components';
import {backgroundColor,textColor,fontFamily} from 'theme/index'
var bootstrap = require('react-bootstrap');


export const Button = styled(bootstrap.Button)`
  background-color:${backgroundColor};
  color:${textColor};
  font-family:${fontFamily};
`;

export const Badge = styled(bootstrap.Badge)`
  background-color:${backgroundColor};
  color:${textColor};
  font-family:${fontFamily};
`;

