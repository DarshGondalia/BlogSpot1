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
        background-color: var(--grey);
        color: var(--black);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Arial;
    }
    
    p {
        font-family: Georgia;
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

    textarea {
        font-family: 'Nunito', sans-serif;
        font-size: 18px !important;
        padding: 3px 5px;
        border-radius: 0.2rem !important;
        border: 2px solid var(--black);
        min-height: 300px;
        resize: none;
    }

    /* format, styling */
    .align-items-center {
        align-items: center;
    }

    .pointer {
        cursor: pointer;
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
    
    .text-start {
        text-align: start;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: end;
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

    /* font */
    .fw-light {
        font-weight: 200 !important;
    }
    
    .fw-lighter {
        font-weight: lighter !important;
    }
    .fw-bold {
        font-weight: bold !important;
    }

    .fw-bolder {
        font-weight: bolder !important;
    }
    
    .display-1 {
        font-size: 5rem;
    }

    .display-2 {
        font-size: 4.5rem;
    }
    
    .display-3 {
        font-size: 4rem;
    }
    
    .display-4 {
        font-size: 3.5rem;
    }
    
    .display-5 {
        font-size: 3rem;
    }
    
    .display-6 {
        font-size: 2.5rem;
    }

    .display-7 {
        font-size: 2rem;
    }

    .display-8 {
        font-size: 1.5rem;
    }

    .display-9 {
        font-size: 1.25rem;
    }
    

    /* color, backgroundcolor, opacity */
    .bg-primary {
        background-color: var(--primary);
    }

    .bg-white {
        background-color: var(--white);
    }

    .text-primary {
        color: var(--primary);
    }

    .text-white {
        color: var(--white);
    }

    .text-light {
        color: var(--lightgrey);
    }

    .text-grey {
        color: var(--darkgrey)
    }

    .opacity-60 {
        opacity: 0.60 !important;
    }

    .opacity-75 {
        opacity: 0.75 !important;
    }
    
    /* navbar */    
    .dropdown-content-open {
        display: block;
        position: absolute;
        margin-top: 38px;
        margin-left: -20px;
        background-color: var(--white);
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    
    .dropdown-content-open div {
        display: flex;
        padding: 8px 20px;
        gap: 3px;
        align-items: center;
    }

    .dropdown-content-open div:hover {
        background-color: var(--lightgrey);
    }

    .dropdown-content-open a {
        color: inherit;
        text-decoration: none;
    }    

    .dropdown-content-open div:focus, .dropdown-content-open div:active {
        background-color: var(--grey);
    }

    .hidden {
        display: none;
    }

    /* register form error */
    .instructions {
        font-size: 0.75rem;
        border-radius: 0.5rem;
        background: #000;
        color: #fff;
        padding: 0.25rem;
        position: relative;
        bottom: -10px;
    }
  
    .instructions > svg {
        margin-right: 0.25rem;
    }
    
    .offscreen {
        position: absolute;
        left: -9999px;
    }
    
    .hide {
        display: none;
    }
    
    .valid {
        color: limegreen;
        margin-left: 0.25rem;
    }
    
    .invalid {
        color: red;
        margin-left: 0.25rem;
    }
    
    .errmsg {
        background-color: lightpink;
        color: firebrick;
        font-weight: bold;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    }

    /* post */
    .post {
        font-size: larger;
        margin: auto;
        padding: 30px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        width: 60vw;
    }

    /* myblogs */
    .blog-form {
        width: 80vw;
        margin: auto;
        padding: 0em 2em 1.5em;
        background-color: var(--white);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    .form-nav {
        margin: 0em -2em 1.25em;
        max-height: max-content;
        padding: 0.5em 1em;
        background-color: var(--softgrey);
    }

    .form-left {
        width: 15%;
    }

    .form-right {
        width: 40%;
    }

    .form-content {
        width: 80%;
    }
`