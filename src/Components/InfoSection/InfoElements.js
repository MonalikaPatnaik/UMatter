import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.div`
    color : var(--text-clr);
    background : var(--bg-clr);
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 960px;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
    justify-content: flex-start; 
`
export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    background-color: #495057;
    height: 600px; 
    width:105rem;
    border-top-right-radius: 50px; 
    border-bottom-right-radius: 50px; 
    margin-top:9rem;
    position:absolute;
    left:0;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    margin-left:3rem;
    // background-color:pink;
`;
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;
export const TextWrapper = motion(styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`);
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 24px; /* Increased font size */
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 36px; /* Increased font size */
    line-height: 1.1;
    font-weight: 600;
    color: var(--text-clr);
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 25px; /* Increased font size */
    line-height: 26px;
    color: var(--text-clr);
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = motion(styled.div`
    max-width: 555px;
    height: 100%
`);

export const Img = styled.img`
    width: 100rem;
    max-width: 600px; /* Increased max-width */
    margin: 0 0 10px 0;
    padding-right: 0;
    margin-bottom:2rem;
`