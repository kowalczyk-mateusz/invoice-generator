import React from 'react';
import styled from 'styled-components';
import Service from './CreatorServices-components/Service'
import {StyledCreatorServices} from './Styles/CreatorServicesStyles'
const CreatorServices = () => {
    return (
        <StyledCreatorServices>
            <Service />
        </StyledCreatorServices>
    );
}

export default CreatorServices;