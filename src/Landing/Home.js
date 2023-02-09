import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
// import { StateContext } from './Global';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { createUser } from './Global';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [ name, setName ] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const URL = "http://localhost:1111";
  const webURL = "https://valentian-app.onrender.com";

  const handleSubmit = () => {
    axios.post(`${webURL}/api/user/create`, { name: name }).then((res) => {

      dispatch(createUser(res.data.data));
      console.log(res.data.data);
    }).catch((err) => {
      alert(err.message);
    });

    swal({
      title: "Good job!",
      text: "Your name as been added to the list",
      icon: "success",
      button: "Ok",
    });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>HAPPY VALENTINE</Title>
          <Text>One word frees us of all the weight and pain of life: that word is love.</Text>
          <Holder onSubmit={ handleSubmit }>
            <input placeholder='name' value={ name } onChange={ (e) => {
              setName(e.target.value);
            } }></input>
            <button type='submit'>submit</button>
          </Holder>

        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
width: 100%;
height: 100vh;
/* background-color: red; */
background-image: url("/image/love.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  font-family: cursive;
  color: white;
  text-align: center;
`;
const Text = styled.div`
color: #fff;
text-align: center;

`;
const Holder = styled.form`
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;

  input{
    border: 2px solid white;
    color: white;
    padding-left: 10px;
    outline: none;
    width: 250px;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: transparent;
    font-size: 20px;
  }
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