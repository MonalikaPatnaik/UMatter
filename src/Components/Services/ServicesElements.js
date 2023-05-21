import styled from "styled-components"
export const ServicesContainer=styled.div`
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
/* background:white; */

@media screen and (max-width:768px){
    height:1400px;
}
@media screen and (max-width:992px){
    height:1200px;
}
@media screen and (max-width:480px){
     height:1500 px;
}
`
export const ServicesWrapper=styled.div`
max-width:1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;
@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr ;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding:0 20px;
}


`
export const ServicesCard=styled.div`
/* background:black; */
align-items:center;
display:flex;
flex-direction:column;
justify-content:flex-start;
border-radius:10px;
max-height:380px;
padding:30px;
box-shadow: 0 1px 3px gray;
transition: all 0.2s ease-in-out;
&:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;

}

`
export  const ServicesIcon=styled.img`
height:170px;
width:180px;
margin-bottom:10px;
border:0.5px solid gray;
box-shadow:3px 3px 3px gray;
`
export const ServicesH1=styled.h1`
/* font-size:5rem;
color:black;
margin-bottom:64px; */
margin-bottom: 64px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({lightText})=> (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width:480px){
    font-size:2rem;
}
`
export const ServicesH2=styled.h2`
font-size:1rem;
/* background-color:black; */
margin-bottom:10px;


`
export const ServicesP=styled.p`
font-size:1rem;
text-align:center;
`;
