import styled from 'styled-components';

export const StyledInvoiceService = styled.div`
width: 100%;
margin: 2rem 0rem;
`
export const Headline = styled.div`
font-size: 2rem;
text-align: center;
font-weight: bold;
`
export const SplitPayment = styled.div`
text-align: center;
padding: 0.25rem 0rem 0.75rem 0rem;
`
export const Services = styled.div`

`
export const ServicesLables = styled.div`
border-top: 1px solid black;
border-right: 1px solid black;
border-left: 1px solid black;
justify-content: space-between;
font-size: 0.8rem;
font-weight: bold;
text-align: center;
background-color: #dedef0;
width: 100%;
height: 40px;
display: grid;
grid-template-columns: 0.1fr 1fr 0.15fr 0.15fr 0.3fr 0.3fr 0.25fr 0.25fr 0.3fr;
`
export const Lp = styled.div`
border-right: 1px solid black;
height: 100%;
line-height: 40px;
`
export const ServiceName = styled.div`
border-right: 1px solid black;
height: 100%;
line-height: 40px;
`
export const Jm = styled.div`
border-right: 1px solid black;
height: 100%;
line-height: 40px;
`
export const Qty = styled.div`
border-right: 1px solid black;
line-height: 40px;
height: 100%;
`
export const PriceNetto = styled.div`
border-right: 1px solid black;
line-height: 40px;
height: 100%;

`
export const ValueNetto = styled.div`
border-right: 1px solid black;
padding-top: 5px;
line-height: 15px;
height: 100%;
`
export const Vat = styled.div`
border-right: 1px solid black;
height: 100%;
padding-top: 5px;
line-height: 15px;
height: 100%;
`
export const PriceVat = styled.div`
border-right: 1px solid black;
height: 100%;
padding-top: 5px;
line-height: 15px;
height: 100%;
`
export const ValueBrutto = styled.div`
height: 100%;
padding-top: 5px;
line-height: 15px;
height: 100%;
`
export const Outcome = styled.div`
display: flex;
justify-content: flex-end;
font-size: 0.8rem;
padding-left: 20rem;
`
export const OutcomeHeadline = styled.div`
font-weight: bold;
width: 3rem;
padding: 0.25rem 0rem;
`
export const OutcomeValues = styled.div`
border-bottom: 1px solid black;
border-right: 1px solid black;
border-left: 1px solid black;
justify-content: flex-end;
text-align: center;
display: flex;
`
export const OutcomeValueNetto = styled.div`
width: 75.53px;
border-right: 1px solid black;
padding: 0.25rem 0rem;
`
export const OutcomeVat = styled.div`
width: 62.94px;
border-right: 1px solid black;
padding: 0.25rem 0rem
`
export const OutcomePriceVat = styled.div`
width: 62.94px;
border-right: 1px solid black;
padding: 0.25rem 0rem
`
export const OutcomeValueBrutto = styled.div`
width: 75.53px;
padding: 0.25rem 0rem
`