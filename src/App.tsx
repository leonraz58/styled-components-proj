import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
    return (
        <div>
        <Menu>
            <ul>
                <li><a href="/url1">menu item 1</a></li>
                <li><a href="/url2">menu item 2</a></li>
                <li><a href="/url3">menu item 3</a></li>
            </ul>
        </Menu>
        <Box>
            <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
            <StyledBtn as={'a'} href={'#'}>Link</StyledBtn>
            <StyledBtn>Hello</StyledBtn>
            <SuperButton>hi</SuperButton>
        </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button {
        cursor: pointer;
    }
    
    ${Link} {
        cursor: zoom-in;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

