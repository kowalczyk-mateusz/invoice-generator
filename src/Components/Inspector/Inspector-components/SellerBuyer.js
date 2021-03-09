import styled from 'styled-components';
import React, {useState} from 'react';
import BackgroundHeadline from '../../../Assets/BackgroundHeadline'
const SellerBuyer = ({invoiceInfo}) => {
    const [bold, setBold] = useState(true);
    return (
        <StyledSellerBuyer>
            <Seller>
                <BackgroundHeadline bold={bold} text="Sprzedawca"/>
                <SellerInfo>
                    <Company>
                        {invoiceInfo.sellerCompany}
                    </Company>
                    <NIP>
                    {invoiceInfo.sellerNip}
                    </NIP>
                    <Address>
                    {invoiceInfo.sellerAddress}
                    </Address>
                    <CityCode>
                    {invoiceInfo.sellerCode}{invoiceInfo.sellerCity}
                    </CityCode>
                </SellerInfo>
            </Seller>
            <Buyer>
                <BackgroundHeadline bold={bold} text="Nabywca"/>
                <BuyerInfo>
                    <Company>
                    {invoiceInfo.buyerCompany}
                    </Company>
                    <NIP>
                    {invoiceInfo.buyerNip}
                    </NIP>
                    <Address>
                    {invoiceInfo.buyerAddress}
                    </Address>
                    <CityCode>
                    {invoiceInfo.buyerCity}{invoiceInfo.buyerCode}
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