import styled from "styled-components";

interface collapsedProps {
    collapsed:boolean
}

export const ImageContainer = styled.div<collapsedProps>`
    display: flex; 
    justify-content: ${(props) => props.collapsed ? 'center' : 'space-between'};
    align-items: center;
    box-sizing: border-box;
    width: 100%; 
    padding: 15px 15px 15px 15px; 
    margin-bottom: ${(props) => props.collapsed ? '35px' : '0px'};
`