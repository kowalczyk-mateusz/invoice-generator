import React from 'react';
import styled from 'styled-components';
import Line from '../../../Assets/Line'
const Signatures = () => {
    return (
        <StyledSignatures>
            <BuyerSignature>
                <Line />
                <BuyerText>
                    Podpis osoby upoważnionej do wystawienia
                </BuyerText>
            </BuyerSignature>
            <SellerSignature>
                <Line />
                <SellerText>
                    Podpis osoby upoważnionej do odbioru
                </SellerText>
            </SellerSignature>

        </StyledSignatures>
    );
}

const StyledSignatures = styled.div`
display: flex;
justify-content: space-between;
`
const BuyerSignature = styled.div`

`
const BuyerText = styled.div`
padding-top: 0.3rem;
font-size: 0.8rem;
text-align: center;
`
const SellerSignature = styled.div`

`
const SellerText = styled.div`
padding-top: 0.3rem;
font-size: 0.8rem;
text-align: center;
`

export default Signatures;