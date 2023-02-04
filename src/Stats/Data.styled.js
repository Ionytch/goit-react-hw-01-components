import styled from "styled-components";

export const StatisticStyle = styled.section`
width:900px;
display: flex;
flex-direction: column;
`


export const TitleStyle = styled.h2`
font-size:50px;
text-align: center;
`
export const StatListStyle = styled.ul`
list-style: none;
display: flex;
padding:0;
margin:0;
`

export const StatItemStyle = styled.li`
width: 180px;
display: flex;
background-color:${
    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}
`

export const LableStatStyle = styled.span`
margin-right:10px;
font: cursive;
`

export const PercentStyle = styled.span`
font-weight:700;
`