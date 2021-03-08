import React from 'react';
import styled from 'styled-components';
import ServicesData from './ServicesData'
import {StyledInvoiceService,
     Headline, 
     SplitPayment, 
     Services, 
     ServicesLables, 
     ServiceName, 
     Qty, 
     Jm, 
     Lp, 
     PriceNetto, 
     PriceVat, 
     ValueBrutto, 
     ValueNetto, 
     Vat, 
     Outcome,
     OutcomeValues,
     OutcomeValueNetto,
     OutcomeVat,
     OutcomePriceVat,
     OutcomeValueBrutto,
     OutcomeHeadline} from './Styles/InvoiceServiceStyles'
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
                        Jm.
                    </Jm>
                    <Qty>
                        Ilość
                    </Qty>
                    <PriceNetto>
                        Cena Netto
                    </PriceNetto>
                    <ValueNetto>
                        Wartość netto
                    </ValueNetto>
                    <Vat>
                        Stawka VAT
                    </Vat>
                    <PriceVat>
                        Kwota VAT
                    </PriceVat>
                    <ValueBrutto>
                        Wartość brutto
                    </ValueBrutto>
                </ServicesLables>
                <ServicesData />
                <ServicesData />
                <ServicesData />
                <Outcome>
                    <OutcomeHeadline>
                        W tym
                    </OutcomeHeadline>
                    <OutcomeValues>
                    <OutcomeValueNetto>
                        38 872,22
                    </OutcomeValueNetto>
                    <OutcomeVat>
                        8% 
                    </OutcomeVat>
                    <OutcomePriceVat>
                        3 109,78 
                    </OutcomePriceVat>
                    <OutcomeValueBrutto>
                        41 982,00
                    </OutcomeValueBrutto>
                    </OutcomeValues>
                </Outcome>
                <Outcome>
                    <OutcomeHeadline>
                        Razem
                    </OutcomeHeadline>
                    <OutcomeValues>
                    <OutcomeValueNetto>
                        38 872,22
                    </OutcomeValueNetto>
                    <OutcomeVat>
                        
                    </OutcomeVat>
                    <OutcomePriceVat>
                        3 109,78 
                    </OutcomePriceVat>
                    <OutcomeValueBrutto>
                        41 982,00
                    </OutcomeValueBrutto>
                    </OutcomeValues>
                </Outcome>
            </Services>
        </StyledInvoiceService>
    );
}

export default InvoiceService;