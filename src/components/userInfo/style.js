import styled from 'styled-components'

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media(max-width: 1000px) {
        flex-direction: row;
        gap: 15px;
    }
`

export const UserImageContainer = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors['brand-blue']};
    border-radius: 15px;

    @media(max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`

export const UserTitleContainer = styled.div`
    text-align: center;

    @media(max-width: 1000px) {
        text-align: start;
    }
`