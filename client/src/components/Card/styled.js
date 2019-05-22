import styled from 'styled-components';
import {backgroundColor,textColor,fontFamily} from 'theme/index'
var bootstrap = require('react-bootstrap');


export const Card = styled(bootstrap.Card)`
  background-color:${backgroundColor};
  color:${textColor};
  font-family:${fontFamily};
  width: ${props => props.width ||'100%'};
`;

