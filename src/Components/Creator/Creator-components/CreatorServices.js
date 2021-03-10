import React from 'react';
import styled from 'styled-components';
import Service from './CreatorServices-components/Service'
import {StyledCreatorServices} from './Styles/CreatorServicesStyles'
const CreatorServices = ({handleChange, invoice, setInvoice}) => {

    const Vat = invoice.vat === 23 ? 1.23 : 1.08
    const PriceVat = parseFloat(invoice.priceBrutto !== '' ? invoice.priceBrutto - (invoice.priceBrutto / Vat) : invoice.priceNetto * Vat - invoice.priceNetto)
    const FixedPriceVat = PriceVat.toFixed(2)
    const PriceBrutto = parseFloat(invoice.priceBrutto !== '' ? invoice.priceBrutto : invoice.priceNetto * Vat)
    const FixedPriceBrutto = PriceBrutto.toFixed(2)
    const PriceNetto = parseFloat(invoice.priceNetto !== '' ? invoice.priceNetto : invoice.priceBrutto - (invoice.priceBrutto - (invoice.priceBrutto / Vat)))
    const FixedPriceNetto = PriceNetto.toFixed(2)
    console.log('pricebrutto ' + PriceBrutto)
    console.log('vat ' + Vat)
    console.log('pricenetto ' + PriceNetto)
    console.log('price Vat ' + PriceVat)
    return (
        <StyledCreatorServices>
            <Service handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}/>
                Brutto: {FixedPriceBrutto}
                Netto: {FixedPriceNetto}
                Vat: {FixedPriceVat}
        </StyledCreatorServices>
    );
}

export default CreatorServices;