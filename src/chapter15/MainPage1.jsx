import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 1em;
    background-color: grey;
    `;


const Title = styled.h1`
    padding: 1.5em;
    color: white;
    text-align: center;
    `;

function MainPage1(props){
    return(
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
        </Wrapper>
    );
}

export default MainPage1;