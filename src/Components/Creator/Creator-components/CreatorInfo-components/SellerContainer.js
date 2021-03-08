import React from 'react';
import {StyledSellerContainer, Company, NIP, Address, CityCode, Code, City} from './Styles/SellerContainerStyles.js'
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
        <City>
            <Label for="city">Miasto</Label>
            <Input name="city"/>
        </City>
        <Code>
            <Label for="code">Kod</Label>
            <Input name="code"/>
        </Code>
        </Inputs>
    </StyledSellerContainer>
    );
}

export default SellerContainer;