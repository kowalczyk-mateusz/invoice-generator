import React from 'react';
import styled from 'styled-components';
import {StyledCreatorInfo} from './Styles/CreatorInfoStyles'
import DateContainer from './CreatorInfo-components/DateContainer'
import SellerContainer from './CreatorInfo-components/SellerContainer'
import BuyerContainer from './CreatorInfo-components/BuyerContainer'
const CreatorInfo = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledCreatorInfo>
            <DateContainer handleChange={handleChange} invoice={invoice} setInvoice={setInvoice} />
            <SellerContainer handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}/>
            <BuyerContainer handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}/>
        </StyledCreatorInfo>
    );
}

export default CreatorInfo;