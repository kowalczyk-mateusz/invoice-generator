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
const InvoiceService = ({invoiceInfo}) => {
    return (
        <StyledInvoiceService>
            <Headline>
            {invoiceInfo.invoiceNumber}
            </Headline>
            <SplitPayment>
                {invoiceInfo.splitPayment ? 'Mechanizm podzielonej platnosci' : ''}
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
                <ServicesData invoiceInfo={invoiceInfo}/>
                <Outcome>
                    <OutcomeHeadline>
                        W tym
                    </OutcomeHeadline>
                    <OutcomeValues>
                    <OutcomeValueNetto>
                        
                    </OutcomeValueNetto>
                    <OutcomeVat>
                        {invoiceInfo.vat}%
                    </OutcomeVat>
                    <OutcomePriceVat>
                        
                    </OutcomePriceVat>
                    <OutcomeValueBrutto>
                        
                    </OutcomeValueBrutto>
                    </OutcomeValues>
                </Outcome>
                <Outcome>
                    <OutcomeHeadline>
                        Razem
                    </OutcomeHeadline>
                    <OutcomeValues>
                    <OutcomeValueNetto>
                        
                    </OutcomeValueNetto>
                    <OutcomeVat>
                        
                    </OutcomeVat>
                    <OutcomePriceVat>
                        
                    </OutcomePriceVat>
                    <OutcomeValueBrutto>
                        
                    </OutcomeValueBrutto>
                    </OutcomeValues>
                </Outcome>
            </Services>
        </StyledInvoiceService>
    );
}

export default InvoiceService;