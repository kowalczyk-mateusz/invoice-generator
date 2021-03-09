import React from 'react';
import styled from 'styled-components';
import {StyledDateContainer, City, DateInputs, ReleaseDate, SaleDate, InvoiceNumber} from './Styles/DateContainerStyles'
import {Label, Headline, Input} from '../Styles/CreatorInfoStyles'

const DateContainer = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledDateContainer>
        <Headline>
            Data
        </Headline>
        <DateInputs>
            <InvoiceNumber>
            <Label htmlFor="invoiceNr">Nr faktury</Label>
            <Input name="invoiceNumber" value={invoice.invoiceNumber} onChange={handleChange}/>
            </InvoiceNumber>
        <City>
            <Label htmlFor="city">Miejsce wystawienia</Label>
            <Input name="city" value={invoice.city} onChange={handleChange}/>
        </City>
        <ReleaseDate>
            <Label htmlFor="releaseDate">Data wystawienia</Label>
            <Input name="releaseDate" type="date" value={invoice.releaseDate} onChange={handleChange}/>
        </ReleaseDate>
        <SaleDate>
            <Label htmlFor="saleDate">Data sprzedaży</Label>
            <Input name="saleDate" type="date" value={invoice.sellDate} onChange={handleChange}/>
        </SaleDate>
        </DateInputs>
    </StyledDateContainer>
    );
}

export default DateContainer;