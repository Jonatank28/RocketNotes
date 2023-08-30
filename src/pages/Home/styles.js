import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnode content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1{
        font-size: 24PX;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;

    > li{
        margin-bottom: 24px;
    }
`;

export const Search = styled.div`
    grid-area: search;

    width: calc(100%);
    padding: 64px 64px 0px;
`;

export const Content = styled.div`
    grid-area: content;



    padding: 0 64px;
    overflow-y: auto;
`;

export const NewNote = styled(Link)`
    grid-area: newnode;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    font-size: 20px;


`;