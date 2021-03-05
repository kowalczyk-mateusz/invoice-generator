import React from 'react';
import styled from 'styled-components';

const BackgroundHeadline = ({text}) => {
    return (
        <StyledHeadline>
            {text}
        </StyledHeadline>
    );
}
const StyledHeadline = styled.div`
width: 100%;
border-top: 1px solid black;
background-color: #d6d6d6;
font-weight: 400;
font-size: 0.95rem;
text-align: center;

`
export default BackgroundHeadline;