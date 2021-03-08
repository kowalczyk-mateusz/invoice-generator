import styled from 'styled-components';


export const StyledCreatorInfo = styled.div`
display: grid;

grid-template-rows: 1fr;
grid-row-gap: 4rem;
max-width: 900px;
justify-content: center;
align-items: center;
grid-template-columns: repeat(auto-fill, 1fr);
`
export const Headline = styled.div`
font-size: 1.5rem;
font-weight: bold;
`
export const Inputs = styled.div`

`

export const Label = styled.label`
font-size: 0.9rem;
font-weight: bold;
padding-right: 1rem;
`
export const Input = styled.input`
border: 1px solid gray;
padding: 0.33rem;
border-radius: 0.33rem;
`
export const CodeInput = styled.div`
border: 1px solid gray;
padding: 0.33rem;
border-radius: 0.33rem;
width: 50%;
`
