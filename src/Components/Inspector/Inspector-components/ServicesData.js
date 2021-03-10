import React from 'react';
import styled from 'styled-components';
import {Lp, ServiceName, Qty, Jm, PriceNetto, ValueNetto, Vat, VatPrice, BruttoValue, StyledServicesData} from './Styles/ServicesDataStyles'
const ServicesData = ({invoiceInfo}) => {
    return (
        <StyledServicesData>
            <Lp>
                1
            </Lp>
            <ServiceName>
            {invoiceInfo.serviceName}
            </ServiceName>
            <Jm>
                szt
            </Jm>
            <Qty>
            {invoiceInfo.qty}
            </Qty>
            <PriceNetto>
            {invoiceInfo.priceNetto}
            </PriceNetto>
            <ValueNetto>
                
            </ValueNetto>
            <Vat>
            {invoiceInfo.vat}%
            </Vat>
            <VatPrice>
                
            </VatPrice>
            <BruttoValue>
            {invoiceInfo.priceBrutto}
            </BruttoValue>

        </StyledServicesData>
    );
}


export default ServicesData;