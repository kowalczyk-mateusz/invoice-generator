import React from 'react';
import styled from 'styled-components';
import BackgroundHeadline from '../../../Assets/BackgroundHeadline'

const Data = () => {
    return (
        <StyledData>
            <DataInfo>
            <City>
                <BackgroundHeadline text='Miejsce wystawienia'/>
                Katowice
            </City>
            <IssuingDate>
            <BackgroundHeadline text="Data wystawienia"/>
                30-12-2020
            </IssuingDate>
            <SaleDate>
            <BackgroundHeadline text="Data sprzedaży"/>
                30-12-2020
            </SaleDate>
            </DataInfo>
        </StyledData>
    );
}

const StyledData = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
margin-bottom: 2rem;
`
const DataInfo = styled.div`
width: 330px;
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;
`
const City = styled.div`
text-align: center;
width: 100%;
padding-bottom: 0.4rem;
`
const IssuingDate = styled.div`
text-align: center;
width: 100%;
padding-bottom: 0.4rem;
`
const SaleDate = styled.div`
text-align: center;
width: 100%;
padding-bottom: 0.4rem;
`
export default Data;