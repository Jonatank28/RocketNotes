import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 8px;
    border-radius: 10px;
    gap: 2px;
    width: 100%;

    > input{
        height: 56px;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        outline: none;
        width: 100%;

        &:placeholder{
            color: ${({ theme }) => theme.GRAY_300};
        }

    }

    > svg{
        margin-left: 10px;
    }
`;