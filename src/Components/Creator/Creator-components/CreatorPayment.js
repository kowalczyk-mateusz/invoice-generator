import React from 'react';
import styled from 'styled-components';
import {Label, Input} from './Styles/CreatorInfoStyles'
import {PaymentMethod, AccountNumber, PaymentDeadline, SplitPayment, StyledCreatorPayment} from './Styles/CreatorPaymentStyles'
const CreatorPayment = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledCreatorPayment>
            <PaymentMethod>
                <Label>Sposób płatności</Label>
                <Input name="paymentMethod" onChange={handleChange} value={invoice.paymentMethod}/>
            </PaymentMethod>
            <PaymentDeadline>
                <Label>Termin płatności</Label>
                <Input name="paymentDeadline" onChange={handleChange} value={invoice.paymentDeadline}/>
            </PaymentDeadline>
            <AccountNumber>
            <Label>Number konta</Label>
            <Input name="accountNumber" onChange={handleChange} value={invoice.accountNumber}/>
            </AccountNumber>
            <SplitPayment>
            <Label>Mechanizm podzielonej płatności</Label>
            <Input type="checkbox" name="splitPayment" checked={invoice.splitPayment} onChange={handleChange}/>
            </SplitPayment>
        </StyledCreatorPayment>
    );
}

export default CreatorPayment;