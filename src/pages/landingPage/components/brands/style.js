import styled from 'styled-components'

export const BrandsContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items: center;
    padding: 0 10rem;

    img {
        max-width: 12rem;
    }

    @media (max-width: 1366px) {
        padding: 0 3rem;
    }

    @media (max-width: 768px) {
        display: none;
    }
`