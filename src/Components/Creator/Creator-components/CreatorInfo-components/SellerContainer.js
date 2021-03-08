import React from 'react';
import {StyledSellerContainer, Company, NIP, Address, CityCode} from './Styles/SellerContainerStyles.js'
import {Headline, Input, Inputs, Label} from '../Styles/CreatorInfoStyles'
const SellerContainer = () => {
    return (
        <StyledSellerContainer>
        <Headline>
            Dane sprzedawcy
        </Headline>
        <Inputs>
        <Company>
            <Label for="company">Nazwa firmy</Label>
            <Input name="company"/>
        </Company>
        <NIP>
            <Label for="nip">Nip</Label>
            <Input name="nip"/>
        </NIP>
        <Address>
            <Label for="address">Ulica</Label>
            <Input name="address"/>
        </Address>
        <CityCode>
            <Label for="city">Miasto / Kod</Label>
            <Input name="city"/>
            <Input name="code"/>
        </CityCode>
        </Inputs>
    </StyledSellerContainer>
    );
}

export default SellerContainer;