import React from 'react';
import styled from 'styled-components';
import {StyledInvoiceService, Headline, SplitPayment, Services, ServicesLables, ServiceName, Qty, Jm, Lp, PriceNetto, PriceVat, ValueBrutto, ValueNetto, Vat} from './Styles/InvoiceServiceStyles'
const InvoiceService = () => {
    return (
        <StyledInvoiceService>
            <Headline>
                Faktura VAT 16/2020
            </Headline>
            <SplitPayment>
                Mechanizm podzielonej płatności
            </SplitPayment>
            <Services>
                <ServicesLables>
                    <Lp>
                        Lp.
                    </Lp>
                    <ServiceName>
                        Nazwa towaru lub usługi
                    </ServiceName>
                    <Jm>
                        szt.
                    </Jm>
                    <Qty>
                        1
                    </Qty>
                    <PriceNetto>
                        Cena Netto
                    </PriceNetto>
                    <ValueNetto>
                        Wartość netto
                    </ValueNetto>
                    <Vat>
                        8%
                    </Vat>
                    <PriceVat>
                        3 109,78
                    </PriceVat>
                    <ValueBrutto>
                        41 982,00
                    </ValueBrutto>
                </ServicesLables>
            </Services>
        </StyledInvoiceService>
    );
}

export default InvoiceService;