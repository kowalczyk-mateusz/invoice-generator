import React from 'react';
import styled from 'styled-components';
import {StyledDateContainer, City, DateInputs, ReleaseDate, SaleDate} from './Styles/DateContainerStyles'
import {Label, Headline, Input} from '../Styles/CreatorInfoStyles'

const DateContainer = () => {
    return (
        <StyledDateContainer>
        <Headline>
            Data
        </Headline>
        <DateInputs>
        <City>
            <Label for="city">Miejsce wystawienia</Label>
            <Input name="city"/>
        </City>
        <ReleaseDate>
            <Label for="releaseDate">Data wystawienia</Label>
            <Input name="releaseDate" type="date"/>
        </ReleaseDate>
        <SaleDate>
            <Label for="saleDate">Data sprzedaży</Label>
            <Input name="saleDate" type="date"/>
        </SaleDate>
        </DateInputs>
    </StyledDateContainer>
    );
}

export default DateContainer;