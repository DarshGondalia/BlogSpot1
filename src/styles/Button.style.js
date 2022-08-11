import styled from "styled-components";
import variables from "./variables.js";

const btnStyNav = `
    font-size: 17px;
    border: none;
    border-radius: 0.25rem;
    min-height: 40px; 
    min-width: 108px;
`;

const btnStySearch = `
    height: 45px;
    width: 50px;
    border-top-right-radius: 25rem;
    border-bottom-right-radius: 25rem;
    border: none;
    &:hover {
        filter: none;
    }
`

const btnStyModal = `
    font-size: 20px;
    padding: 8px;
    min-height: 40px; 
    min-width: 330px;
    border-radius: 0.25rem;
`

const btnStyLink = `
    background-color: inherit;
    font-size: inherit;
    color: var(--primary);
    border: none;
`

const ButtonStyle = props => {
    switch (props.sty) {
        case 'nav':
            return btnStyNav;
        case 'search':
            return btnStySearch;
        case 'modal':
            return btnStyModal;
        case 'link':
            return btnStyLink;
        default:
            return btnStyNav;
    }
}

export const Button = styled.button`
    ${variables};
    ${props => props.bg ?
        `background-color: var(--${props.bg});` :
        `background-color: var(--primary);`
    }
    color: var(--${props => props.color});
    cursor: pointer;
    &:hover {
        filter: brightness(0.95);
    }
    &:focus, &:active {
        filter: brightness(0.8);
    }
    ${ButtonStyle}
`;