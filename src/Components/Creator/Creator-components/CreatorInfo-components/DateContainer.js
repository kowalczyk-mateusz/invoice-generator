import React from 'react';
import styled from 'styled-components';
import {StyledDateContainer, City, ReleaseDate, SaleDate} from './Styles/DateContainerStyles'
import {Label, Inputs, Headline, Input} from '../Styles/CreatorInfoStyles'
const DateContainer = () => {
    return (
        <StyledDateContainer>
        <Headline>
            Data
        </Headline>
        <Inputs>
        <City>
            <Label for="city">Miejsce wystawienia</Label>
            <Input name="city"/>
        </City>
        <ReleaseDate>
            <Label for="releaseDate">Data wystawienia</Label>
            <Input name="releaseDate"/>
        </ReleaseDate>
        <SaleDate>
            <Label for="saleDate">Data sprzedaży</Label>
            <Input name="saleDate"/>
        </SaleDate>
        </Inputs>
    </StyledDateContainer>
    );
}

export default DateContainer;