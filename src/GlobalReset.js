import { createGlobalStyle } from 'styled-components';
import TopBG from './assets/bg-top.svg';
import BottomBG from './assets/bg-bottom.svg';

const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        outline: none;
    }

    html {
        /* colors */
        --very-light-grayish-blue: hsl(240, 78%, 98%);
        --light-grayish-blue: hsl(234, 14%, 74%);
        --grayish-blue: hsl(233, 13%, 49%);
        --dark-grayish-blue: hsl(232, 13%, 33%);
        --bg-gradient: linear-gradient(115deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%));

        /* space */
        --safe-area-padding: 0 20px 0 20px;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        background: url(${TopBG}) top right no-repeat, url(${BottomBG}) left 470px no-repeat, var(--very-light-grayish-blue);
        }

    button {
        cursor: pointer;
    }
`;

export default GlobalReset;
