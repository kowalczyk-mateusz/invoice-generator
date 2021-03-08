import React from 'react';
import styled from 'styled-components';
import CreatorInfo from './Creator-components/CreatorInfo'
import CreatorServices from './Creator-components/CreatorServices'
import CreatorPayment from './Creator-components/CreatorPayment'
const Creator = () => {
    return (
        <StyledCreator>
            <CreatorInfo>

            </CreatorInfo>
            <CreatorServices>

            </CreatorServices>
            <CreatorPayment>

            </CreatorPayment>
        </StyledCreator>
    );
}

const StyledCreator = styled.div`

`
export default Creator;