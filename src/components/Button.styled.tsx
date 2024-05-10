import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
    border: none;
    background-color: crimson;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #0a24a6;
    }

    &:last-child {
        background-color: #83ff3d;
    }
`

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: chartreuse;
    color: #383838;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }

`