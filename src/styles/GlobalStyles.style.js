import { createGlobalStyle } from "styled-components";
import variables from "./variables.js";

export const GlobalStyles = createGlobalStyle`
    ${variables};

    * {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    body {
        color: var(--black);
    }

    nav {
        font-weight: 500;
        font-size: 17px;
    }

    nav ul {
        list-style: none;
    }
    
    nav li {
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        padding-left: 1.2em;
        padding-right: 1.2em;
        min-height: 42px;
        float: left;
        cursor: pointer;
    }

    nav li:hover, nav li:focus, nav li:active {
        background-color: #5c87b5;
        filter: brightness(1.25);
    }

    /* format, styling */
    .align-items-center {
        align-items: center;
    }

    .d-flex {
        display: flex;
    }

    .d-inline {
        display: inline;
    }

    .d-inline-block {
        display: inline-block;
    }

    .d-block {
        display: block;
    }
    
    .flex-column {
        flex-direction: column;
    }

    .float-start {
        float: left;
    }

    .float-end {
        float: right;
    }

    .justify-content-center {
        justify-content: center;
    }

    .justify-content-end {
        justify-content: end;
    }

    .justify-content-between {
        justify-content: space-between;
    }

    .gap-0 {
        gap: 0;
    }

    .gap-1 {
        gap: 0.25rem;
    }
    
    .gap-2 {
        gap: 0.5rem;
    }
    
    .gap-3 {
        gap: 1rem;
    }
    
    .gap-4 {
        gap: 1.5rem;
    }
    
    .text-center {
        text-align: center;
    }

    /* spacing */
    .m-0 {
        margin: 0 !important;
    }

    .m-1 {
        margin: 0.25rem !important;
    }

    .m-2 {
        margin: 0.5rem !important;
    }

    .m-3 {
        margin: 1rem !important;
    }

    .m-4 {
        margin: 1.5rem !important;
    }

    .m-5 {
        margin: 3rem !important;
    }

    .m-auto {
        margin: auto !important;
    }

    .mx-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-0 {
        margin-top: 0 !important;
    }

    .mt-1 {
        margin-top: 0.25rem !important;
    }

    .mt-2 {
        margin-top: 0.5rem !important;
    }

    .mt-3 {
        margin-top: 1rem !important;
    }

    .mt-4 {
        margin-top: 1.5rem !important;
    }

    .mt-5 {
        margin-top: 3rem !important;
    }

    .mt-auto {
        margin-top: auto !important;
    }

    .me-0 {
        margin-right: 0 !important;
    }

    .me-1 {
        margin-right: 0.25rem !important;
    }

    .me-2 {
        margin-right: 0.5rem !important;
    }

    .me-3 {
        margin-right: 1rem !important;
    }

    .me-4 {
        margin-right: 1.5rem !important;
    }

    .me-5 {
        margin-right: 3rem !important;
    }

    .me-auto {
        margin-right: auto !important;
    }

    .mb-0 {
        margin-bottom: 0 !important;
    }

    .mb-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-3 {
        margin-bottom: 1rem !important;
    }

    .mb-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-5 {
        margin-bottom: 3rem !important;
    }

    .mb-auto {
        margin-bottom: auto !important;
    }

    .ms-0 {
        margin-left: 0 !important;
    }

    .ms-1 {
        margin-left: 0.25rem !important;
    }

    .ms-2 {
        margin-left: 0.5rem !important;
    }

    .ms-3 {
        margin-left: 1rem !important;
    }

    .ms-4 {
        margin-left: 1.5rem !important;
    }

    .ms-5 {
        margin-left: 3rem !important;
    }

    .ms-auto {
        margin-left: auto !important;
    }

    .p-0 {
        padding: 0 !important;
    }

    .p-1 {
        padding: 0.25rem !important;
    }

    .p-2 {
        padding: 0.5rem !important;
    }

    .p-3 {
        padding: 1rem !important;
    }

    .p-4 {
        padding: 1.5rem !important;
    }

    .p-5 {
        padding: 3rem !important;
    }

    .px-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
        }

    .px-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-0 {
        padding-top: 0 !important;
    }

    .pt-1 {
        padding-top: 0.25rem !important;
    }

    .pt-2 {
        padding-top: 0.5rem !important;
    }

    .pt-3 {
        padding-top: 1rem !important;
    }

    .pt-4 {
        padding-top: 1.5rem !important;
    }

    .pt-5 {
        padding-top: 3rem !important;
    }

    .pe-0 {
        padding-right: 0 !important;
    }

    .pe-1 {
        padding-right: 0.25rem !important;
    }

    .pe-2 {
        padding-right: 0.5rem !important;
    }

    .pe-3 {
        padding-right: 1rem !important;
    }

    .pe-4 {
        padding-right: 1.5rem !important;
    }

    .pe-5 {
        padding-right: 3rem !important;
    }

    .pb-0 {
        padding-bottom: 0 !important;
    }

    .pb-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-3 {
        padding-bottom: 1rem !important;
    }

    .pb-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-5 {
        padding-bottom: 3rem !important;
    }

    .ps-0 {
        padding-left: 0 !important;
    }

    .ps-1 {
        padding-left: 0.25rem !important;
    }

    .ps-2 {
        padding-left: 0.5rem !important;
    }

    .ps-3 {
        padding-left: 1rem !important;
    }

    .ps-4 {
        padding-left: 1.5rem !important;
    }

    .ps-5 {
        padding-left: 3rem !important;
    }

    /* color, backgroundcolor */
    .bg-primary {
        background-color: var(--primary);
    }

    .text-primary {
        color: var(--primary);
    }

    .text-white {
        color: var(--white);
    }
`