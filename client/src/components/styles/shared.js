import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const MainHeader = styled.h1`
  background-color: ${ props => props.bg ? "#F2F2F2" : "white"};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
  font-weight: 300;
`

export const AboutHeader = styled.div`
  background-color: ${ props => props.bg ? "#F2F2F2" : "white"};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutH1 = styled.h1`
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
  font-weight: 600;
`

export const AboutP = styled.p`
  color: black;
  text-align: center;
  font-weight: 300;
  width: 50%;
  margin-top: 40px;
`

export const Feature = styled(Col)`
  padding: 30px;
`

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'sm':
      return '1rem';
    default:
      return '2rem';
  }
}

const textAligning = (dir) => {
  switch(dir) {
    case 'right':
      return 'right';
    case 'left':
      return 'left';
    default:
      return 'center';
  }
}


export const SubHeader = styled.h1`
  font-size: ${ props => fontSize(props.size)};
  margin-left: 18px;
  margin-top: 20px;
  text-align: ${ props => textAligning(props.textAlign)};
`