import styled from "styled-components";

export const UserCard = styled.div`
width: 900px;
display: flex;
flex-direction: column;
border: 1px solid black;
`

export const UserDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const UserImage = styled.img`
`

export const UserTextStyle1 = styled.p`
font-weight:700;
`
export const UserTextStyle2 = styled.p`
color:#888888;
`

export const StatsStyle = styled.ul`
list-style: none;
width: 100%;
display: flex;

justify-items: stretch;
flex: auto;
padding:0;
margin:0;
`
export const StatsListStyle = styled.li`
width:300px;
display: flex;
gap: 10px;
border: 1px solid black;
padding-top: 20px;
padding-bottom: 20px;
background-color:#E8E8E8;
`

export const LabelStyle = styled.span`
margin-left: 10px;
color: #909090;
`

export const QuantityStyle = styled.span`
font-weight: 700;

`