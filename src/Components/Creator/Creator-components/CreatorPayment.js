import React from 'react';
import styled from 'styled-components';
import {Label, Input} from './Styles/CreatorInfoStyles'
import {PaymentMethod, AccountNumber, PaymentDeadline, SplitPayment, StyledCreatorPayment} from './Styles/CreatorPaymentStyles'
const CreatorPayment = () => {
    return (
        <StyledCreatorPayment>
            <PaymentMethod>
                <Label>Sposób płatności</Label>
                <Input/>
            </PaymentMethod>
            <PaymentDeadline>
                <Label>Termin płatności</Label>
                <Input/>
            </PaymentDeadline>
            <AccountNumber>
            <Label>Number konta</Label>
            <Input/>
            </AccountNumber>
            <SplitPayment>
            <Label>Mechanizm podzielonej płatności</Label>
            <Input type="checkbox"/>
            </SplitPayment>
        </StyledCreatorPayment>
    );
}

export default CreatorPayment;