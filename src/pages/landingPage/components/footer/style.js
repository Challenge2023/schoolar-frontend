import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.colors['secondary-background']};
    padding: 4rem 8rem 0 8rem;
`

export const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 12.5%;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 2rem;

        img {
            width: 70%;
        }
    } 
`

export const FooterLinksContainer = styled.ul`
    display: flex;
    gap: 2.5rem;
    padding-top: 1.5rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-top: 3.5rem;
    } 
`

export const PoweredContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 8rem;

    @media(max-width: 768px) {
        padding-top: 5rem;
    }
`