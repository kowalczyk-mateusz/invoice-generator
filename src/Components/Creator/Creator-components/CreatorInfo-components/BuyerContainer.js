import React from 'react';
import {Headline, Inputs, Input, Label} from '../Styles/CreatorInfoStyles'
import {StyledBuyerContainer} from './Styles/BuyerContainerStyles'
import {Company, NIP, Address, CityCode} from './Styles/SellerContainerStyles'
const BuyerContainer = () => {
    return (
        <StyledBuyerContainer>
            <Headline>
            Dane
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
        </StyledBuyerContainer>
    );
}

export default BuyerContainer;