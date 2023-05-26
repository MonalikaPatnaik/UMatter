import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#d2f7d3' : '#010606')};
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#010606' : '#fff')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: 2px solid black;
    // Issue #1: Type in cursor spelling was there earlier
    // Issue #1 Fixed: Corrected the spelling of cursor.
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff' : '#01BF71')};
        box-shadow: 0 0 12px #d2f7d3;
    }
`
