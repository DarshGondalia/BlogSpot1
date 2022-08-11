import styled from "styled-components";
import variables from "./variables.js";

const InputSearch = `
    height: 45px;
    width: 20vw;
    font-size: 16px;
    padding-left: 18px;
    border-top-left-radius: 25rem;
    border-bottom-left-radius: 25rem;
    border: none;

    &:focus, &:active {
        outline: none;
    }
`

const InputModal = `
    background-color: white;
    margin: 5px;
    font-size: 18px !important;
    padding-left: 10px;
    min-height: 40px; 
    min-width: 330px;
    border-radius: 0.2rem !important;
`

const InputStyle = props => {
    switch (props.sty) {
        case 'search':
            return InputSearch;
        case 'modal':
            return InputModal;
        default:
            return InputModal;
    }
}

export const Input = styled.input`
    ${variables};
    ${props => props.bg ?
        `background-color: var(--${props.bg});` :
        `background-color: var(--primary);`
    }
    color: var(--${props => props.color});
    ${InputStyle};
`
