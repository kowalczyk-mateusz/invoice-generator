import React from 'react';
import styled from 'styled-components';
import Signatures from './Inspector-components/Signatures';

const Inspector = () => {
    return (
        <StyledInspector>
            <Headline>
                Podgląd faktury
            </Headline>
            <InspectorPreview>
                <Signatures />
            </InspectorPreview>
        </StyledInspector>
    );
}

const StyledInspector = styled.div`
width: 100%;
min-height: 100vh;
background-color: gray;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 2rem;
`
const Headline = styled.div`
padding: 1rem 0rem;
font-size: 3rem;
font-weight: bold;
`
const InspectorPreview = styled.div`
width: 803px;
height: 1132px;
background-color: white;
`
export default Inspector;