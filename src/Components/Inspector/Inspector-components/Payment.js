import React from 'react';
import styled from 'styled-components';
import Line from '../../../Assets/Line'
import {StyledPayment, PaymentInfo, PaymentMethod, PaymentDeadline, BankNumber, PaymentValue, Amount, AmountInWords, ToPay, Label, Content, ContentValue} from './Styles/PaymentStyles'
const Payment = () => {
    return (
        <StyledPayment>
            <PaymentInfo>
                <Line />
                <PaymentMethod>
                    <Label>Sposób płatnośći</Label>
                    <Content>Przelew</Content>
                </PaymentMethod>
                <Line/>
                <PaymentDeadline>
                <Label> Termin płatności</Label>
                <Content>14 dni</Content>
                </PaymentDeadline>
                <Line/>
                <BankNumber>
                <Label> Numer konta</Label>
                <Content> 66 1020 2313 0000 3102 0021 8941</Content>
                </BankNumber>
            </PaymentInfo>
            <PaymentValue>
                <Line/>
                <Amount>
                <Label>  Razem</Label>
                <ContentValue>41 982,00 PLN</ContentValue>
                </Amount>
                <Line/>
                <AmountInWords>
                <Label> Słownie</Label>
                <ContentValue>czterdzieści jeden tysięcy dziewięćset osiemdziesiąt dwa 00/100 PLN</ContentValue>
                </AmountInWords>
                <Line/>
                <ToPay>
                    <p>Do zapłaty</p> <p>Wartość netto</p> <p>38 872,22 PLN</p>
                </ToPay>
                <Line />
                <ToPay>
                    <p>Do zapłaty</p> <p>Kwota Vat</p> <p>3 109,78 PLN</p>
                </ToPay>
            </PaymentValue>
        </StyledPayment>
    );
}

export default Payment;