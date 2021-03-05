import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body, *, html{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
`