import React from 'react';
import styled from 'styled-components';
import Signatures from './Inspector-components/Signatures';
import Data from './Inspector-components/Data'
import SellerBuyer from './Inspector-components/SellerBuyer'
import Payment from './Inspector-components/Payment'
const Inspector = () => {
    return (
        <StyledInspector>
            <Headline>
                Podgląd faktury
            </Headline>
            <InspectorPreview>
                <Data />
                <SellerBuyer/>
                <Payment />
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
padding: 4rem 3rem 0rem 3rem;
`
export default Inspector;