import styled from 'styled-components';
import React from 'react';
import BackgroundHeadline from '../../../Assets/BackgroundHeadline'
const SellerBuyer = () => {
    return (
        <StyledSellerBuyer>
            <Seller>
                <BackgroundHeadline text="Sprzedawca"/>
                <SellerInfo>
                    <Company>
                        MAL-TAP
                    </Company>
                    <NIP>
                        NIP: 9541607505
                    </NIP>
                    <Address>
                        Pogodna 13/56
                    </Address>
                    <CityCode>
                        40-319 Katowice
                    </CityCode>
                </SellerInfo>
            </Seller>
            <Buyer>
                <BackgroundHeadline text="Nabywca"/>
                <BuyerInfo>
                    <Company>
                        WSPÓLNOTA MIESZKANIOWA UL. WALLISA 2.
                    </Company>
                    <NIP>
                        NIP: 6272363990
                    </NIP>
                    <Address>
                        ul. Stanisława Wallisa 2
                    </Address>
                    <CityCode>
                        41-605 Świętochłowice
                    </CityCode>
                </BuyerInfo>
            </Buyer>
        </StyledSellerBuyer>
    );
}

const StyledSellerBuyer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10rem;
`

const Seller = styled.div`
width: 330px;
`
const Buyer = styled.div`
width: 330px;
`
const SellerInfo = styled.div` 
`
const BuyerInfo = styled.div`
`
const Company = styled.div`
`
const NIP = styled.div`

`
const Address = styled.div`
`
const CityCode = styled.div`

`
export default SellerBuyer;