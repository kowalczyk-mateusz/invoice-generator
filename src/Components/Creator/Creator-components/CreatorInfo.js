import React from 'react';
import styled from 'styled-components';
import {StyledCreatorInfo} from './Styles/CreatorInfoStyles'
import DateContainer from './CreatorInfo-components/DateContainer'
import SellerContainer from './CreatorInfo-components/SellerContainer'
import BuyerContainer from './CreatorInfo-components/BuyerContainer'
const CreatorInfo = () => {
    return (
        <StyledCreatorInfo>
            <DateContainer />
            <SellerContainer />
            <BuyerContainer />
        </StyledCreatorInfo>
    );
}

export default CreatorInfo;