import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import PairedUser from './PairedUser';

const Pair = () => {

  // const { id } = useParams();
  const [ pairName, setPair ] = useState({});
  const user = useSelector((state) => state.namePair);
  // console.log(id);
  const URL = "http://localhost:1111";
  const webURL = "https://valentian-app.onrender.com";

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

    axios.get(`${webURL}/api/user/${pairName._id}`).then((res) => {
      // console.log(res.data);
      setPair(res.data.data);
    }).catch((err) => {
      console.log(err.message);
    });
  };


  useEffect(() => {
    getPair();
  }, []);

  console.log(pairName);

  return (
    <div>
      <Container>
        <Card>
          🤍🤍🤍🤍
          <Name>{ pairName.name }</Name>
          <span>you are paired to</span>
          <Name1><PairedUser pairName={ pairName.pair[ 0 ] } pair={ pairName } pairWith /></Name1>
          🤍🤍🤍🤍
        </Card>
        <button onClick={ pairUser }>Pair</button>
      </Container>
    </div>
  );
};

export default Pair;

const Container = styled.div`
width: 100%;
height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-image: url("/image/piiii.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;

  button{
    border: 1px solid white;
    background-color: transparent;
    outline: none;
    width: 130px;
    height: 30px;
    color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 350ms;
    :hover{
      background-color: red;
      border: 0;
    }
  }

`;


const Card = styled.div`
width: 300px;
height: 200px;
border-radius: 10px;
background-color: transparent;
display: flex;
border: 2px solid white;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 10px;
span{
    color: white;
    font-size: small;
}
`;
const Name = styled.div`
font-family: cursive;
color: white;
font-size: larger;
`;
const Name1 = styled.div`
color: white;
font-family: cursive;
font-size: larger;



`;