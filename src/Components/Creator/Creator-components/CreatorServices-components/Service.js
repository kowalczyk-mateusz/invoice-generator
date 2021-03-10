import React, { useState } from 'react';
import {Label, Input,} from '../Styles/CreatorInfoStyles'
import { ServiceName, StyledService, Qty, PriceNetto, Vat,PriceBrutto, Option, Select} from './ServiceStyles'
const Service = ({handleChange, invoice, setInvoice}) => {

    return (
        <StyledService>
            <ServiceName>
                <Label>Nazwa towaru lub usługi</Label>
                <Input name="serviceName" value={invoice.serviceName} onChange={handleChange}/>
            </ServiceName>
            <Qty>
                <Label>Ilość</Label>
                <Input name="qty" value={invoice.qty} onChange={handleChange}/>
            </Qty>
            <PriceNetto>
                <Label>Cena Netto</Label>
                <Input name="priceNetto" value={invoice.priceNetto} onChange={handleChange} disabled={invoice.priceBrutto !== '' ? true : false}/>
            </PriceNetto>
            <PriceBrutto>
                <Label>Cena Brutto</Label>
                <Input name="priceBrutto" value={invoice.PriceBrutto} onChange={handleChange} disabled={invoice.priceNetto !== '' ? true : false}/>
            </PriceBrutto>
            <Vat>
                <Label>Stawka VAT</Label>
                <Select name="vat" onChange={handleChange} value={invoice.vat}>
                    <Option value="23">23%</Option>
                    <Option value="8">8%</Option>
                </Select>
            </Vat>
            
        </StyledService>
    );
}

export default Service;