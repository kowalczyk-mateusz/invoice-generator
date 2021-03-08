import React from 'react';
import styled from 'styled-components';
import {Lp, ServiceName, Qty, Jm, PriceNetto, ValueNetto, Vat, VatPrice, BruttoValue, StyledServicesData} from './Styles/ServicesDataStyles'
const ServicesData = () => {
    return (
        <StyledServicesData>
            <Lp>
                1
            </Lp>
            <ServiceName>
                Remont klatki schodowej(ostatni etap).
            </ServiceName>
            <Jm>
                szt
            </Jm>
            <Qty>
                1 
            </Qty>
            <PriceNetto>
                38 872,22
            </PriceNetto>
            <ValueNetto>
                38 872,22 
            </ValueNetto>
            <Vat>
                8%
            </Vat>
            <VatPrice>
                3 109,78
            </VatPrice>
            <BruttoValue>
                41 982,00
            </BruttoValue>

        </StyledServicesData>
    );
}


export default ServicesData;