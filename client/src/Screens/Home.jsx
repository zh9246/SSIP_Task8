import React, {useEffect} from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux";
import Pizza from "../components/Pizza";
import {getAllPizzas} from "../actions/pizzaAction";
import AllPizza from "../pizza-data"
const Home = () => {

  
  
  
  return (
    <>
      <Container>
      <Row>
            {AllPizza.map((pizza)=>(
              
              <Col md={4}>
                <Pizza pizza={pizza}/>
              </Col>
            ))}
          </Row>
      </Container>
    </>
  )
}

export default Home
