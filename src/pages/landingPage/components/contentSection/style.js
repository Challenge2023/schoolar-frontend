import styled from 'styled-components'

export const ContentSectionContainer = styled.section`
    background-color: ${({ theme }) => theme.colors['brand-blue']};
    border-radius: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 3rem 0 3rem;
    margin-bottom: 2.5%;
`

export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    
    img {
        max-width: 60rem;
        padding-left: 4%;
        transform: translateY(10%);
    }

    @media(max-width: 768px) {
        img {
            max-width: 30rem;
            transform: translateY(20%);
        }
    }
`
