import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    // primary?: boolean
    // outlined?: boolean
    btnType?: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    //background-color: crimson;
        //background-color: ${props => props.color || 'crimson'};
    padding: 10px 20px;
    //color: snow;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    
    //&:last-child {
    //    background-color: #83ff3d;
    //}

    //outlined
    ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || 'crimson'};
        color: ${props => props.color || 'crimson'};
        background-color: transparent;

        &:hover {
            border-color: #4053cc;
            color: #4053cc;
            background-color: transparent;
        }
        
    `} //
            //primary
    ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
        color: snow;
        background-color: ${props => props.color || 'crimson'};

        &:hover {
            background-color: #4053cc;
        }
    
    `} 
    
    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(255, 133, 211, 0.52);
    `}
    
`

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: chartreuse;
    color: #383838;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }

    
    
    
`