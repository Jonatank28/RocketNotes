import styled from 'styled-components'

export const Container = styled.div`

    > header{
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        height: 144px;
        display: flex;
        align-items: center;
        padding: 0 80px;
    }

    svg{
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;

export const Form = styled.form`
    width: min(400px, 95vw);
    margin: 0 auto;

    margin-top: 80px;

    > input:last-child{
        background-color: red;
    }

    > div:nth-child(4){
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;

    margin: -124px auto 32px;
    width: 186px;
    height: 186px;

    > img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label{
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;