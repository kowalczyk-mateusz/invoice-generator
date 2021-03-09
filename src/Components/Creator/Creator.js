import React from 'react';
import styled from 'styled-components';
import CreatorInfo from './Creator-components/CreatorInfo'
import CreatorServices from './Creator-components/CreatorServices'
import CreatorPayment from './Creator-components/CreatorPayment'
import {Link} from 'react-router-dom'
const Creator = ({handleChange, invoice, setInvoice}) => {
    return (
        <StyledCreator>
            <CreatorInfo handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}>

            </CreatorInfo>
            <CreatorServices handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}>

            </CreatorServices>
            <CreatorPayment handleChange={handleChange} invoice={invoice} setInvoice={setInvoice}>

            </CreatorPayment>
            <Link to="/inspect">Podgląd</Link>
        </StyledCreator>
    );
}

const StyledCreator = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export default Creator;