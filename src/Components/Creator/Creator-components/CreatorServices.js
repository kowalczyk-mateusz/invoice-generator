import React from 'react';
import styled from 'styled-components';
import Service from './CreatorServices-components/Service'
import {StyledCreatorServices} from './Styles/CreatorServicesStyles'
const CreatorServices = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledCreatorServices>
            <Service handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}/>
        </StyledCreatorServices>
    );
}

export default CreatorServices;