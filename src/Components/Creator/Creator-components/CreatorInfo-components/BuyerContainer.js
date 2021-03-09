import React from 'react';
import {Headline, Inputs, Input, Label} from '../Styles/CreatorInfoStyles'
import {StyledBuyerContainer} from './Styles/BuyerContainerStyles'
import {Company, NIP, Address, Code, City} from './Styles/SellerContainerStyles'
const BuyerContainer = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledBuyerContainer>
            <Headline>
            Dane nabywcy
            </Headline>
            <Inputs>
        <Company>
            <Label for="company">Nazwa firmy</Label>
            <Input name="buyerCompany" value={invoice.buyerCompany} onChange={handleChange}/>
        </Company>
        <NIP>
            <Label for="nip">Nip</Label>
            <Input name="buyerNip"  value={invoice.buyerNip} onChange={handleChange}/>
        </NIP>
        <Address>
            <Label for="address">Ulica</Label>
            <Input name="buyerAddress"  value={invoice.buyerAddress} onChange={handleChange}/>
        </Address>
        <City>
            <Label for="city">Miasto</Label>
            <Input name="buyerCity"  value={invoice.buyerCity} onChange={handleChange}/>
        </City>
        <Code>
            <Label for="code">Kod</Label>
            <Input name="buyerCode"  value={invoice.buyerCode} onChange={handleChange}/>
        </Code>
        </Inputs>
        </StyledBuyerContainer>
    );
}

export default BuyerContainer;