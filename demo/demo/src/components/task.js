import React,{Component} from 'react';
import styled from 'styled-components'
import { Container,Flex,Box} from 'rebass'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Champion from './Champion';
const ButtonOrder=styled.button`
  background: #3b5998;
`;
const ButtonSales=styled.button`
  background: #F96131;
`;
const ButtonCustom=styled.button`
  background: #55acee;

`;
const Title =styled.h1`
  font-size: 3em;
  text-align: right;
  color: white;
  line-height: 10px;
`;
const Import=styled.p`
  font-size: 1em;
  text-align: right;
  color: white;
`
class Task extends Component {
  render(){
    return(
      <div>
        <Flex wrap>
         <Box px={10} py={2} width={[1,1/2,null,1/4]}>
          <Link to="/order">
            <ButtonOrder>
                <Title>21321320</Title>
                <hr color="white"/>
                <Import>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Total Order</Import>
            </ButtonOrder>
          </Link>
         </Box>
         <Box px={10} py={2} width={[1,1/2,null,1/4]}>
          <Link to="/sales">
              <ButtonSales>
                <Title >0</Title >
                <hr color="white"/>
                <Import>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Total Sales Today</Import>
              </ButtonSales>
            </Link>
          </Box>
          <Box px={10} py={2} width={[1,1/2,null,1/4]}>
          <Link to="/custom">
            <ButtonCustom>
              <Title >0</Title >
              <hr color="white"/>
              <Import>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Total New Custom This Week</Import>
            </ButtonCustom>
            </Link>
          </Box>
        </Flex>
        <Route exact path="/order" component={Champion}/>
        <Route path="/sales" component={App}/>
        <Route path="/custom" component={App}/>
      </div>
    );
  }
}
export default Task;
