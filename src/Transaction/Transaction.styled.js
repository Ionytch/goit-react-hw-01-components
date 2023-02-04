import styled from "styled-components";

export const TableStyle = styled.table`
border-collapse: collapse;
border: 2px solid rgb(200, 200, 200);
`
export const TrTableStyle = styled.tr``

export const TheadStyle = styled.thead`
background-color: #3f87a6;
color: #fff;
`

export const ThStyle = styled.th`
border: 1px solid rgb(190, 190, 190);
padding: 5px 10px;
text-align: center;
`
export const TbodyStyle = styled.tbody`
background-color: #e4f0f5;
`
export const TrStyle = styled.tr`
&nth-child(even)${TbodyStyle}{
    background-color: #eee;
}
`

export const TdStyle = styled.td`
border: 1px solid rgb(190, 190, 190);
padding: 5px 10px;
text-align: center;
`
