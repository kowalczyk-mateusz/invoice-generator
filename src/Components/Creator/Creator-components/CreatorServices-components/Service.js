import React from 'react';
import {Label, Input,} from '../Styles/CreatorInfoStyles'
import { ServiceName, StyledService, Qty, PriceNetto, Vat, Option, Select} from './ServiceStyles'
const Service = () => {
    return (
        <StyledService>
            <ServiceName>
                <Label>Nazwa towaru lub usługi</Label>
                <Input />
            </ServiceName>
            <Qty>
                <Label>Ilość</Label>
                <Input />
            </Qty>
            <PriceNetto>
                <Label>Cena Netto</Label>
                <Input />
            </PriceNetto>
            <Vat>
                <Label>Stawka VAT</Label>
                <Select>
                    <Option>23%</Option>
                    <Option>8%</Option>
                </Select>
            </Vat>
        </StyledService>
    );
}

export default Service;