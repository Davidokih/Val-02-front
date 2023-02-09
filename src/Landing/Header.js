import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Private from "./Private";

const Header = () => {

  // const user = useSelector((state) => state.namePair);
  // console.log(user._id);
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src='/image/logo.png' alt='' />
          </Logo>
          <Private>
            <But to={ `/pairing` }>
              <button>My pair</button>
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