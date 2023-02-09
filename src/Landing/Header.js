import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Private from "./Private";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createUser, createPair } from './Global';

const Header = () => {

  // const user = useSelector((state) => state.namePair);
  // console.log(user._id);
  const [ pairName, setPair ] = useState({});
  const dispatch = useDispatch();
  const webURL = "https://valentian-app.onrender.com";
  const user = useSelector((state) => state.pair);

  const pairUser = () => {

    axios.patch(`${webURL}/api/user/${user._id}/pair`).then((res) => {

      setPair(res.data);
      alert(res.data.message);
      console.log(res.data.message);
    }).catch((err) => {
      alert(err.message);
    });
  };

  const getPair = () => {

    axios.get(`${webURL}/api/user/${user._id}`).then((res) => {
      // console.log(res.data);
      setPair(res.data.data);
      dispatch(createPair(res.data.data));
    }).catch((err) => {
      console.log(err.message);
    });
  };

  useEffect(() => {
    getPair();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src='/image/logo.png' alt='' />
          </Logo>
          <Private>
            <But to="/pairing">
              <button onClick={ pairUser }>My pair</button>
            </But>
          </Private>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;


const Container = styled.div`
width: 100%;
height: 70px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;

`;
const Logo = styled.div`
width: 50px;
height: 50px;

img{
    width: 100px;
height: 100px;
}

`;
const But = styled(Link)`
margin-top: 40px;

button{
    border: 1.5px solid red;
    background-color: transparent;
font-weight: 600;
    outline: none;
    width: 150px;
    height: 30px;
    color: red;
    margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;

  }

`;