import styled from 'styled-components'

export const BaseSectionContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%; 
    padding: 0 10rem;

    @media (max-width: 1366px) {
        padding: 0 8rem;
    }

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        padding: 0 3rem;
        align-items: center;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    @media(max-width: 768px) {
        text-align: justify;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    img {
        max-width: 28rem;
    }

    @media(max-width: 768px) {
        img {
            max-width: 20rem;
        }
    }
`