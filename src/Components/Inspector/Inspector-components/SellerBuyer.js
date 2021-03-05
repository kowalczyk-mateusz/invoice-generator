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
                        COMPANY NAME
                    </Company>
                    <NIP>
                        NIP: 1234567890
                    </NIP>
                    <Address>
                        Street 56/521
                    </Address>
                    <CityCode>
                        00-000 CityName
                    </CityCode>
                </SellerInfo>
            </Seller>
            <Buyer>
                <BackgroundHeadline text="Nabywca"/>
                <BuyerInfo>
                    <Company>
                        COMPANY NAME COMPANY NAME COMPAMY NAME
                    </Company>
                    <NIP>
                        NIP: 1234567890
                    </NIP>
                    <Address>
                        Street 56/521 Street 56/521
                    </Address>
                    <CityCode>
                        00-000 CityName
                    </CityCode>
                </BuyerInfo>
            </Buyer>
        </StyledSellerBuyer>
    );
}

const StyledSellerBuyer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 2rem;
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