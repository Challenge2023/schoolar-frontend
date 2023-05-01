import styled from 'styled-components'

export const ContentSectionContainer = styled.section`
    background-color: ${({ theme }) => theme.colors['brand-blue']};
    border-radius: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 3rem;
`

export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.2rem;

    @media(max-width: 768px) {
        gap: 0.5rem;
    }
`

export const ImageContainer = styled.div`
    display: flex;

    img {
        max-width: 58rem;
    }

    @media(max-width: 768px) {
        img {
            max-width: 20rem;
        }
    }
`