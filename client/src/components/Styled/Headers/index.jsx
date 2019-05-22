import styled from 'styled-components';

const primary="#639B78";


export const Title = styled.h1 `
  font-family: 'Ubuntu', sans-serif;
  font-size: ${props => props.fontSize ||'2em'};
  text-align: ${props => props.position ||'center'};
  color: ${props => props.color ||'white'};
`;

export const Brand = styled.h1 `
    font-family: 'Ubuntu', sans-serif;
    font-weight: 600;

    margin-top: ${props => props.position ||'0.4em'};
    font-size:${props => props.fontSize ||'0.9em'};
  color: ${props => props.color ||'black'};
`;
export const Padding = styled.div `
    padding-top: ${props => props.top ||'0 em'};
    padding-bottom: ${props => props.bottom ||'0 em'};
    padding-left: ${props => props.left ||'0 em'};
    padding-right: ${props => props.right ||'0 em'};
    padding: ${props => props.padding ||'0 em'};

`;

export const Paragraph = styled.p `
font-family: 'Ubuntu', sans-serif;
  font-size:${props => (props.fontSize) ||'1em'};
  text-align: ${props => props.textAlign ||'left'};
  color: ${props => props.color ||'white'};
  padding-left:${props => props.paddingLeft ||'0 px'};
  padding-right:${props => props.paddingRight ||'0 px'};
`;

export const Section = styled.section`
font-family: 'Ubuntu', sans-serif;
  padding: 5em;
  background: ${props => props.color ||primary};
`;

export const Landing = styled.div`
  background-size:contain;
  background-color:${props => props.background ||primary};
`;