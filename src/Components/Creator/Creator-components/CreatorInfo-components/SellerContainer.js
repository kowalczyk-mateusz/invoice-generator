import React from 'react';
import {StyledSellerContainer, Company, NIP, Address, CityCode, Code, City} from './Styles/SellerContainerStyles.js'
import {Headline, Input, Inputs, Label} from '../Styles/CreatorInfoStyles'
const SellerContainer = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledSellerContainer>
        <Headline>
            Dane sprzedawcy
        </Headline>
        <Inputs>
        <Company>
            <Label for="company">Nazwa firmy</Label>
            <Input name="sellerCompany" value={invoice.sellerCompany} onChange={handleChange}/>
        </Company>
        <NIP>
            <Label for="nip">Nip</Label>
            <Input name="sellerNip" value={invoice.sellerNip} onChange={handleChange}/>
        </NIP>
        <Address>
            <Label for="address">Ulica</Label>
            <Input name="sellerAddress" value={invoice.sellerAddress} onChange={handleChange}/>
        </Address>
        <City>
            <Label for="city">Miasto</Label>
            <Input name="sellerCity" value={invoice.sellerCity} onChange={handleChange}/>
        </City>
        <Code>
            <Label for="code">Kod</Label>
            <Input name="sellerCode" value={invoice.sellerCode} onChange={handleChange}/>
        </Code>
        </Inputs>
    </StyledSellerContainer>
    );
}

export default SellerContainer;