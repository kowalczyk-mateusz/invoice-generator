import React from 'react';
import {Headline, Inputs, Input, Label} from '../Styles/CreatorInfoStyles'
import {StyledBuyerContainer} from './Styles/BuyerContainerStyles'
import {Company, NIP, Address, Code, City} from './Styles/SellerContainerStyles'
const BuyerContainer = () => {
    return (
        <StyledBuyerContainer>
            <Headline>
            Dane nabywcy
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
        </StyledBuyerContainer>
    );
}

export default BuyerContainer;